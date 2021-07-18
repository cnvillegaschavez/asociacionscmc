import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    withStyles,
    withWidth,
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Typography, Divider } from '@material-ui/core';
import Nosotros from '../../../images/nosotros.jpg';
import MediacionOnline from '../../../images/fondoMediacionOnline.jpg';
import AbogadoVirtual from '../../../images/fondoAbogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/fondoArtibrajeVirtual.jpg';

const styles = (theme) => ({
    wrapper: {
        position: "relative",
        //height: "100vh",
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: theme.spacing(0),
        filter: "brightness(50%)",
    },
    container: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
        },
    },
    text: {
        position: "absolute"
    },
    title: {
        color: "#fff",
        textAlign: "center"
    },
    subtitle: {
        color: "#fff",
        textAlign: "center",
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
    },
});

function HeadSection(props) {
    const { classes } = props;
    const info = [
        {
            img: Nosotros,
            title: "Centro de Concilacion EX LEGE",
            description: "EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.",
        },
        {
            img: MediacionOnline,
            title: "Mediación Online",
            description: "Es un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
        },
        {
            img: AbogadoVirtual,
            title: "Abogado Virtual",
            description: "Es un servicio de asesoría y defensa legal virtual ante los tribunales de justicia del Perú eficiente, eficaz  y dedicación a sus clientes.",
        },
        {
            img: ArbitrajeVirtual,
            title: "Arbitraje Virtual",
            description: "Es un servicio enfocado en las micro y pequeñas empresas que les permite obtener soluciones vinculantes, rápidas y económicas en conflictos comerciales.",
        }
    ]

    return (
        <Fragment>
            <div className={classNames(/* "lg-p-top", */ classes.wrapper)}>
                <div className={classNames(/* "container-fluid",  */classes.container)} >
                    <Carousel autoFocus={true} autoPlay infiniteLoop emulateTouch showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
                        {
                            info.map((element, index) => (
                                <div key={index}>
                                    <img src={element.img} alt={element.title} />

                                    <div className={classes.text}>
                                        <Typography variant="h3" color="primary" className={classes.title}>{element.title}</Typography>
                                        <Divider className={classes.divider} />
                                        <Typography variant="body1" className={classes.subtitle}>
                                            {element.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </Fragment>
    );
}

HeadSection.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object,
};

export default withWidth()(
    withStyles(styles, { withTheme: true })(HeadSection)
);