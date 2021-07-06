import React, { useState, useRef, forwardRef, useImperativeHandle, useMemo, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
//import { localize } from "../../util/Localizer";


const autocompleteService = { current: null };

const componentForm = {
    locality: 'long_name',
    administrative_area_level_1: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
};

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    controlDisabled: {
        '& > div': {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            backgroundColor: theme.palette.disabledInput
        },
        '& > div > div > input': {
            backgroundColor: 'transparent'
        }
    }
}));

const AddressAutocomplete = forwardRef((props, ref) => {

    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const refAutocomplete = useRef();
    const refInputSearch = useRef();
    const { onSelectAddressInfo, label, idName, name, /* onChangeInput, */ isRequired } = props;

    const addressInfo = {
        fullAddress: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        state: '',
        country: '',
        latitude: '',
        longitude: ''
    };

    const onClearInputFilter = () => {
        setInputValue('');
        const btn = refAutocomplete.current.querySelector("button[title='Clear']");
        if (btn) {
            btn.click();
        }
    }

    useImperativeHandle(ref, () => ({
        onClearFilter() {
            onClearInputFilter();
        },
        onFocus() {
            refInputSearch.current.focus();
        },
        setValueAddress(fieldValue) {
            setInputValue(fieldValue);
            if (fieldValue) {
                setIsDisabled(true);
            }
            else {
                setIsDisabled(false);
            }
        },
        setDisabled(disabled) {
            setIsDisabled(disabled);
        }
    }));

    const handleChange = (event) => {
        setInputValue(event.target.value);
        //onChangeInput(event.target.value);
    };

    const fetch = useMemo(
        () => throttle((request, callback) => {
            if (!request.input) {
                return;
            }
            setLoading(true);
            const requestDto = {
                input: request.input,
                componentRestrictions: { country: 'PE' },
            };
            autocompleteService.current.getPlacePredictions(requestDto, callback);
        }, 200),
        [],
    );

    useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setData([]);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                setLoading(false);
                setData(results || []);
            }
        });

        return () => {
            active = false;
        };
    }, [inputValue, fetch]);

    const onPreSelectedAddress = (item, fieldValue) => {
        if (fieldValue) {
            setInputValue(fieldValue.description);
            const parameter = {
                placeId: fieldValue.place_id
            };
            addressInfo.streetAddress = fieldValue.structured_formatting.main_text;
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(parameter, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    const addressComponents = results[0].address_components;
                    for (let i = 0; i < addressComponents.length; i += 1) {
                        const addressType = addressComponents[i].types[0];
                        if (componentForm[addressType]) {
                            const val = addressComponents[i][componentForm[addressType]];
                            switch (addressType) {
                                case 'locality':
                                    addressInfo.city = val;
                                    break;
                                case 'administrative_area_level_1':
                                    addressInfo.state = val;
                                    break;
                                case 'postal_code':
                                    addressInfo.zipCode = val;
                                    break;
                                case 'country':
                                    addressInfo.country = val;
                                    break;
                                default:
                                    break;
                            }
                        }
                        addressInfo.fullAddress = fieldValue.description;
                        addressInfo.latitude = results[0].geometry.location.lat();
                        addressInfo.longitude = results[0].geometry.location.lng();
                    }
                }
                onSelectAddressInfo(addressInfo);
            });
        } else {
            onSelectAddressInfo({
                fullAddress: '',
                streetAddress: '',
                city: '',
                zipCode: '',
                state: '',
                country: '',
                latitude: '',
                longitude: ''
            });
            setInputValue('');
        }

    }

    const onLoadableTextField = (params) => {
        return <TextField
            id={params.id}
            inputRef={refInputSearch}
            onChange={handleChange}
            label={label}
            variant="filled"
            fullWidth
            size="small"
            name={name}
            disabled={isDisabled}
            inputProps={params.inputProps}
            InputLabelProps={params.InputLabelProps}
            InputProps={{
                className: params.InputProps.className,
                ref: params.InputProps.ref,
                endAdornment: (
                    <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {(inputValue ? inputValue.length > 0 : false) ? params.InputProps.endAdornment : null}
                    </>
                ),
            }}
            required={isRequired}
        />;
    }

    const onRenderOptionResult = (option) => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length]),
        );
        return (
            <Grid container alignItems="center">
                <Grid item>
                    <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item xs>
                    {parts.map((part) => (
                        <span key={Math.random()} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                            {part.text}
                        </span>
                    ))}

                    <Typography variant="body2" color="textSecondary">
                        {option.structured_formatting.secondary_text}
                    </Typography>
                </Grid>
            </Grid>
        );
    };

    const classesControl = isDisabled ? classes.controlDisabled : '';

    return (
        <Autocomplete
            id={idName}
            freeSolo
            className={classesControl}
            ref={refAutocomplete}
            getOptionLabel={item => typeof item === 'object' ? item.structured_formatting.main_text : inputValue || ''}
            filterOptions={(x) => x}
            options={data}
            //loadingText={localize('search.searchingForStudents')}
            includeInputInList
            filterSelectedOptions
            value={inputValue}
            onChange={onPreSelectedAddress}
            onInputChange={(event, newInputValue) => { setInputValue(newInputValue); }}
            renderInput={params => onLoadableTextField(params)}
            renderOption={(option) => onRenderOptionResult(option)}
            disabled={isDisabled}
        />
    );
});

export default AddressAutocomplete;

