import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import {
    Grid,
    Typography,
    Box,
    IconButton,
    withStyles,
    withWidth,
    isWidthUp,
    TextField
} from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GavelIcon from '@material-ui/icons/Gavel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import transitions from "@material-ui/core/styles/transitions";
import ColoredButton from "../../../shared/components/ColoredButton";
import { sendEmail } from '../../../redux/actions/contactActions';


const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#FFB341"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#FFB341"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#FFB341"
        },
        "&:hover fieldset": {
          borderColor: "#FFB341"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FFB341"
        }
      },
      color: "#fff",
    }
  })(TextField);
  
const styles = theme => ({
    footerInner: {
        backgroundColor: theme.palette.common.darkBlack,
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(16),
            paddingRight: theme.spacing(16),
            paddingBottom: theme.spacing(10)
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        }
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400,
        color: theme.palette.common.white
    },
    footerLinks: {
        marginTop: theme.spacing(2.5),
        marginBot: theme.spacing(1.5),
        color: theme.palette.common.white
    },
    infoIcon: {
        color: `${theme.palette.common.white} !important`,
        backgroundColor: `${theme.palette.secondary.main} !important`
    },
    socialIcon: {
        fill: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    link: {
        cursor: "Pointer",
        color: theme.palette.common.white,
        transition: transitions.create(["color"], {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeIn
        }),
        "&:hover": {
            color: theme.palette.primary.light
        }
    },
    whiteBg: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.common.darkBlack
    },
    buttonProgress: {
        color: theme.palette.common.white,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    buttonSuccess: {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    wrapper: {
        position: 'relative',
        width: '100%'
    },
    titleFooter: {
        marginBottom: "30px",
    },
    infoContact: {
        fontSize: "4px !important",
    },
    textEvaluation: {
        color: "#ffffff",
        textAlign: "justify",
        marginBottom: "10px"
    },
    inputEvaluation: {
        color: "#ffffff",
    }
});

const infos = [
    {
        icon: <PhoneIcon />,
        description: "963 559 100"
    },
    {
        icon: <MailIcon />,
        description: "exlegecentrodeconciliacion@gmail.com"
    },
    {
        icon: <AccessTimeIcon />,
        description: "Horario: 09:00 - 19:00"
    },
    {
        icon: <GavelIcon />,
        description: "Estudio jurídico"
    }
];

const infosServices = [
    {
        icon: <AccountBalanceIcon />,
        description: "Mediación online"
    },
    {
        icon: <AccountBalanceIcon />,
        description: "Arbitraje Virtual"
    },
    {
        icon: <AccountBalanceIcon />,
        description: "Abogado Virtual"
    },
];

const socialIcons = [
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Facebook</title>
                <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
            </svg>
        ),
        label: "Facebook",
        href: "https://www.facebook.com/Centro-de-Conciliaci%C3%B3n-Ex-Lege-108763947357901"
    },
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Twitter</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
        ),
        label: "Twitter",
        href: "https://www.facebook.com/Centro-de-Conciliaci%C3%B3n-Ex-Lege-108763947357901"
    },
    {
        icon: <YouTubeIcon />,
        label: "Youtube",
        href: "https://www.facebook.com/Centro-de-Conciliaci%C3%B3n-Ex-Lege-108763947357901"
    },
];

function Footer(props) {
    const { classes, theme, width } = props;
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [responseResult, setResponseResult] = useState({ message: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'comments':
                setComments(value);
                break;
            default:
                break;
        }
    }

    const onClickBtnSubmit = (event) => {
        event.preventDefault();
        setResponseResult({ message: '' });
        const requestDto = { Email: email, Message: comments };
        setLoading(true);
        sendEmail(requestDto, callBackResponse);
    }

    const callBackResponse = (responseDto) => {

        if (responseDto.isValid) {
            setEmail('');
            setComments('');
        }
        setLoading(false);
        setResponseResult(responseDto);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const transitionUp = (props) => {
        return <Slide {...props} direction="up" />;
    }

    return (
        <footer /* className="lg-p-top" */>
            <div className={classes.footerInner}>
                <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
                    <Grid item xs={12} md={6} lg={4}>

                        <Typography variant="h5" color="secondary" className={classes.titleFooter}>Contacto</Typography>

                        <Box display="flex" /* justifyContent="center" */>
                            <div >
                                {infos.map((info, index) => (
                                    <Box display="flex" mb={1} key={index}>
                                        <Box mr={2} className={classes.infoContact}>
                                            <IconButton
                                                className={classes.infoIcon}
                                                tabIndex={-1}
                                                disabled
                                            >
                                                {info.icon}
                                            </IconButton>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Typography variant="h6" className="text-white">
                                                {info.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </div>
                        </Box>

                        <Typography variant="h6" paragraph className="text-white">
                            Siganos:
                        </Typography>

                        <Box display="flex">
                            {socialIcons.map((socialIcon, index) => (
                                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                                    <IconButton
                                        aria-label={socialIcon.label}
                                        className={classes.socialIcon}
                                        href={socialIcon.href}
                                    >
                                        {socialIcon.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h5" color="secondary" className={classes.titleFooter}>Servicios</Typography>
                        <Box display="flex" /* justifyContent="center" */>
                            <div >
                                {infosServices.map((info, index) => (
                                    <Box display="flex" mb={1} key={index}>
                                        <Box mr={2} className={classes.infoContact}>
                                            <IconButton
                                                className={classes.infoIcon}
                                                tabIndex={-1}
                                                disabled
                                            >
                                                {info.icon}
                                            </IconButton>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Typography variant="h6" className="text-white">
                                                {info.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </div>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>

                        <Typography variant="h5" color="secondary" className={classes.titleFooter}>Evaluación gratuita</Typography>
                        <Typography variant="subtitle1" className={classes.textEvaluation}>
                            Si tiene preguntas, necesita el consejo de un consejero de confianza o simplemente no sabe a quién acudir, nuestro equipo está aquí para ayudarlo. Contáctenos hoy para programar una consulta gratis.
                        </Typography>
                        <form onSubmit={onClickBtnSubmit}>
                            <Box display="flex" flexDirection="column">
                                <Box mb={1}>
                                    <CssTextField
                                        disabled={loading}
                                        value={email}
                                        name="name"
                                        label="Nombre"
                                        variant="outlined"
                                        //id="custom-css-outlined-input"
                                        inputProps={{ "aria-label": "Get in Touch", maxLength: 60 }}
                                        InputProps={{
                                            className: classes.inputEvaluation
                                        }}
                                        fullWidth
                                        required
                                        style={{padding: "10px 0"}}
                                    />
                                    <CssTextField
                                        disabled={loading}
                                     
                                        label="Correo electrónico"
                                        variant="outlined"
                                        //id="custom-css-outlined-input"
                                        inputProps={{ "aria-label": "Get in Touch", maxLength: 60 }}
                                        InputProps={{
                                            className: classes.inputEvaluation
                                        }}
                                        fullWidth
                                        required
                                        style={{padding: "10px 0"}}
                                    />

                                </Box>
                                <Box mb={1}>
                                    <CssTextField
                                        disabled={loading}
                                     
                                        label="Cuéntanos tu caso"
                                        variant="outlined"
                                        //id="custom-css-outlined-input"
                                        inputProps={{ "aria-label": "Get in Touch", maxLength: 400 }}
                                        InputProps={{
                                            className: classes.inputEvaluation
                                        }}
                                        fullWidth
                                        required
                                        style={{padding: "10px 0"}}
                                        rows={6}
                                        maxRows={20}
                                        multiline
                                    />
                                </Box>
                                <div className={classes.wrapper} >
                                    <ColoredButton
                                        fullWidth
                                        disabled={loading}
                                        color={theme.palette.common.white}
                                        className={classes.buttonSuccess}
                                        variant="outlined"
                                    >
                                        Enviar mensaje
                                    </ColoredButton>
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>

                                <Snackbar
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={transitionUp}
                                    message={responseResult.message}
                                />
                            </Box>
                        </form>


                    </Grid>

                </Grid>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,

};

const mapStateToProps = (state, ownProps) => {
    return {
        responseDto: state.contactSendMailReducers || null
    }
}


export default connect(mapStateToProps)(withWidth()(withStyles(styles, { withTheme: true })(Footer)));
