import React, { Fragment } from 'react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#fff",
        padding: "0",
    }
}));

export default function CardAnimation(props) {
    const { img, title, descriptionPrimary, descriptionSecondary, list, more } = props;
    const history = useHistory();
    const classes = useStyles();
    const values = {
        img: img,
        title: title,
        descriptionPrimary: descriptionPrimary,
        descriptionSecondary: descriptionSecondary,
        list: list,
        more: more,
        img: img
    }

    const onServicesInfo = (event) => {
        event.preventDefault();
        history.push({
            pathname: '/servicesinfo',
            state: values,
        });
    }

    return (
        <Fragment>
            <div id="cardAnimation" >
                <div className="ui-card">
                    <img src={img} />
                    <div className="description">
                        <h2>{title}</h2>
                        <Button className="mi-link" style={{ color: "#fff" }} size="small" onClick={onServicesInfo}>
                            Más información
                        </Button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}