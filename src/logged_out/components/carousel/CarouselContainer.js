import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Nosotros from '../../../images/nosotros.jpg';
import MediacionOnline from '../../../images/fondoMediacionOnline.jpg';
import AbogadoVirtual from '../../../images/fondoAbogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/fondoArtibrajeVirtual.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        filter: "brightness(50%)",
        backgroundColor: "rgba(0,0,0,0.5)"
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
}));

const CarouselContainer = () => {
    const classes = useStyles();
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
        <Carousel fade={true} pause={false}>

            {
                info.map((element, index) => (
                    <Carousel.Item interval={10000} key={index}>
                        <img
                            src={element.img}
                            alt="First slide"
                            className={classes.root}
                        />
                        <Carousel.Caption>
                            <Typography variant="h3" color="primary" className={classes.title}>{element.title}</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.subtitle}>
                                {element.description}
                            </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
          
        </Carousel>
    )
}

export default CarouselContainer;