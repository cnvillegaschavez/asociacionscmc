import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import ContactDetailService from '../contact/ContactDetailService';
import CardListCustom from '../cards/CardListCustom';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

import AbogadoVirtual from '../../../images/xabogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/xarbitrajeVirtual.jpg';
import MediacionOnline from '../../../images/xmediacionOnline.jpg';
import RedaccionCartasNotariales from '../../../images/xredaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/xconciliacionMype.jpg';
import ConciliacionResoluciónContrato from '../../../images/xconciliacionResoluciónContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../../images/xconciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../../images/xconciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../../images/xconciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../../images/xconciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../../images/xconciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../../images/xconciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../../images/xconciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../../images/xconciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../../images/xconciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../../images/xconciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../../images/xconciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../../images/xconciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../../images/xconciliacionDivorcio.jpg';
import ConciliacionSocial from '../../../images/xconciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../../images/xconciliacionPersonaNarutal.jpg';
import ConciliacionDivisionParticionBienes from '../../../images/xconciliacionDivisionParticionBienes.jpg';
import ConciliacionIndenmizacionDañosVehiculos from '../../../images/xconciliacionIndenmizacionDañosVehiculos.jpg';
import ConciliacionIndenmizaciónNegligenciaMedica from '../../../images/xconciliacionIndenmizaciónNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../../images/xconciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../../images/xconciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../../images/xconciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionesEstado from '../../../images/xconciliacionContratacionesEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../../images/xconciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../../images/xconciliacionViciosOcultosContratacionesEstado.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../../images/xconciliacionIndenmizacionContratacionesEstado.jpg';
import ConciliacionPagoDeudasContratacionesEstado from '../../../images/xconciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../../images/xconciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciónConformidad from '../../../images/xconciliacionRecepciónConformidad.jpg';
import ConciliacionResoluciónContratosSuministrosServiciosObras from '../../../images/xconciliacionResoluciónContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciónPlazo from '../../../images/xconciliacionAmpliaciónPlazo.jpg';
import ConciliacionFueraCentroConciliacion from '../../../images/xconciliacionFueraCentroConciliacion.jpg';
import ConciliacionApoderado from '../../../images/xconciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../../images/xconciliacionHoyMismo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary.main,
        marginTop: "30px"
    },
    title: {
        marginTop: "5%",
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textAlign: "center"
    },
    subtitle: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
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
        height: "3px",
    },
}));

const ServicesInfoNavbar = (props) => {
    const classes = useStyles();
    const { value } = props;
    const [services, setServices] = useState([
        {
            link: "mediaciononline",
            img: MediacionOnline,
            title: "Mediacion Online",
            descriptionPrimary: "Es un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
            descriptionSecondary: "Materias que se pueden mediar:",
            price: "S/.350",
            list: [
                "Desalojo.",
                "Cobro de deudas.",
                "Indemnización.",
                "Otros derechos disponibles."
            ],
            more: [
                {
                    img: ConciliacionLiquidacionesContratacionesEstado,
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionViciosOcultosContratacionesEstado,
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionIndenmizacionContratacionesEstado,
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionPagoDeudasContratacionesEstado,
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionValorazionesMetrados,
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "S/.499"
                },
                {
                    img: ConciliacionRecepciónConformidad,
                    title: "Conciliación de Recepción y Conformidad",
                    price: "S/.300"
                },
                {
                    img: ConciliacionResoluciónContratosSuministrosServiciosObras,
                    title: "Conciliación de Resolución de Contratos de Suministros, Servicios y Obras",
                    price: "S/.300"
                },
                {
                    img: ConciliacionAmpliaciónPlazo,
                    title: "Conciliación de Ampliación del Plazo",
                    price: "S/.499"
                }
            ]
        },
        {
            link: "arbitrajevirtual",
            img: ArbitrajeVirtual,
            title: 'Arbitraje Virtual',
            descriptionPrimary: "Es un servicio enfocado en las micro y pequeñas empresas que les permite obtener soluciones vinculantes, rápidas y económicas en conflictos comerciales.",
            descriptionSecondary: "",
            price: "S/.5 500",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 250"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
            ]
        },
        {
            link: "abogadovirtual",
            img: AbogadoVirtual,
            title: 'Abogado Virtual',
            descriptionPrimary: "Es un servicio de asesoría y defensa legal virtual ante los tribunales de justicia del Perú eficiente, eficaz  y dedicación a sus clientes.",
            descriptionSecondary: "Cubrimos las siguientes áreas:",
            price: "",
            list: [
                "Área de derecho de familia.",
                "Área de derecho civil.",
                "Área de derecho arbitral.",
                "Área derecho internacional.",
                "Área derecha inversión finanzas empresarial.",
                "Área derecho penal.",
                "Área derecho laboral.",
                "Área previsional.",
                "Área contrataciones del Estado.",
            ],
            more: [
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: RedaccionCartasNotariales,
                    title: "Redaccion de cartas notariales",
                    price: "S/. 100"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación por Régimen de Visitas sin externamiento",
                    price: "S/.300"
                },
                {
                    img: AbogadoVirtual,
                    title: "Abogado Virtual",
                    price: ""
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/.300"
                },
            ]
        },
    ])

    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <br />
            <br />
            <br />
            {
                services.map((element, index) => {
                    if (element.link == value) {
                        return (<ContactDetailService
                            title={element.title}
                            subtitle={element.subtitle}
                            descriptionPrimary={element.descriptionPrimary}
                            descriptionSecondary={element.descriptionSecondary}
                            price={element.price}
                            list={element.list}
                            img={element.img}
                        />)
                    }
                })
            }

            <Typography variant="h3" color="primary" className={classes.title}>Aquí te recomendamos más Servicios de Conciliación relacionados</Typography>
            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.subtitle}>
                Puedes comunicarte con nosotros directamente mediante nuestro <span style={{ color: "#FFB341" }}>WhatsApp</span>, donde podrás realizar cualquier consulta y asi resolver cada una de tus dudas
            </Typography>

            {
                services.map((element, index) => {
                    if (element.link == value) {
                        return (<CardListCustom data={element.more} />)
                    }
                })
            }
            <br />
        </Fragment>
    )
}

export default ServicesInfoNavbar;
