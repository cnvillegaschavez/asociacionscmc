import React, { useState, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardListAnimation from '../cards/CardListAnimation';

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
        marginTop: "100px",
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textAlign: "center"
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

const ServicesConciliation = () => {
    const classes = useStyles();
    const [servicesConciliation, setServicesConciliation] = useState([
        {
            img: ConciliacionMYPE,
            title: "Conciliación para MYPE",
            descriptionPrimary: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionResoluciónContrato,
                    title: "Conciliación de Resolución de Contrato",
                    price: "S/. 300"
                },  
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/. 300"
                },  
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/. 300"
                },  
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/. 300"
                },  
                
            ]
        },
        {
            img: ConciliacionEmpresa,
            title: "Conciliación Empresarial",
            descriptionPrimary: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliacion de Desalojo por Falta de Pago",
                    price: "S/. 300"
                },
            ]
        },
        {
            img: ConciliacionFamiliar,
            title: "Conciliación Familiar",
            descriptionPrimary: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionExoneracionPersionAlimentos,
                    title: "Conciliación de Exoneracion de persión de alimentos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para divorcio",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                }
            ]
        },
        {
            img: ConciliacionDivorcio,
            title: "Conciliación para Divorcio",
            descriptionPrimary: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/. 300"
                },
                {
                    img: RedaccionCartasNotariales,
                    title: "Redaccion de cartas notariales",
                    price: "S/. 300"
                },
                {
                    img:   ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación por Régimen de Visitas sin externamiento",
                    price: "S/. 300"
                },
                {
                    img:  AbogadoVirtual,
                    title: "Abogado virtual",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/. 300"
                },
            ]
        },
        {
            img: ConciliacionSocial,
            title: "Conciliación Social",
            descriptionPrimary: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/. 300"
                },
            ]
        },
        {
            img: ConciliacionPersonaNarutal,
            title: "Conciliación para Personas Naturales",
            descriptionPrimary: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionDivisionParticionBienes,
                    title: "Conciliación de División y Partición de Bienes",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehículos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizacionAccidenteTransito,
                    title: "Conciliación por Indenmización de accidente de transito",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoVencimientoContrato,
                    title: "Conciliación de Desalojo por Vencimiento de contrato",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 300"
                },
            ]
        },
        {
            img: ConciliacionContratacionesEstado,
            title: "Conciliación en Contrataciones del Estado",
            descriptionPrimary: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionLiquidacionesContratacionesEstado,
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionViciosOcultosContratacionesEstado,
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizacionContratacionesEstado,
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionPagoDeudasContratacionesEstado,
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionValorazionesMetrados,
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRecepciónConformidad,
                    title: "Conciliación de Recepción y Conformidad",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionResoluciónContratosSuministrosServiciosObras,
                    title: "Conciliación de Resolución de Contratos de Suministros Servicios y Obras",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionAmpliaciónPlazo,
                    title: "Conciliación de Ampliación del Plazo",
                    price: "S/. 300"
                }
            ]
        },
        {
            img: ConciliacionFueraCentroConciliacion,
            title: "Conciliación fuera del Centro de Conciliación",
            descriptionPrimary: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                },
            ]
        },
        {
            img: ConciliacionApoderado,
            title: "Conciliación con Apoderado",
            descriptionPrimary: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionDivisionParticionBienes,
                    title: "Conciliación de División y Partición de Bienes",
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación de Indenmización de Negligencia Médica",
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                },
                {
                    img: ConciliacionDesalojoVencimientoContrato,
                    title: "Conciliación de Desalojo por Vencimiento de Contrato",
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                },

            ]
        },
        {
            img: ConciliacionHoyMismo,
            title: "Concilia hoy mismo",
            descriptionPrimary: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                },
                {
                    img: ConciliacionExoneracionPersionAlimentos,
                    title: "Conciliación de Exoneración de pensión de alimentos",
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                }
            ]
        },
        {
            img: MediacionOnline,
            title: "Mediacion Online",
            descriptionPrimary: "Es un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
            descriptionSecondary: "Materias que se pueden mediar:",
            list:  [
                "Desalojo.", 
                "Cobro de deudas.", 
                "Indemnización.", 
                "Otros derechos disponibles."
            ],
            more: [
                {
                    img: ConciliacionLiquidacionesContratacionesEstado,
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionViciosOcultosContratacionesEstado,
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizacionContratacionesEstado,
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionPagoDeudasContratacionesEstado,
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionValorazionesMetrados,
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRecepciónConformidad,
                    title: "Conciliación de Recepción y Conformidad",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionResoluciónContratosSuministrosServiciosObras,
                    title: "Conciliación de Resolución de Contratos de Suministros Servicios y Obras",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionAmpliaciónPlazo,
                    title: "Conciliación de Ampliación del Plazo",
                    price: "S/. 300"
                }
            ]
        },
        {
            img: ArbitrajeVirtual,
            title: 'Arbitraje Virtual',
            descriptionPrimary: "Es un servicio enfocado en las micro y pequeñas empresas que les permite obtener soluciones vinculantes, rápidas y económicas en conflictos comerciales.",
            descriptionSecondary: "",
            list:  [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/. 300"
                },
            ]
        },
    ]);

    return (
        <Fragment>
            <Typography variant="h3" color="primary" className={classes.title}>Servicios de Conciliación para ti</Typography>
            <Divider className={classes.divider} />
            <CardListAnimation data={servicesConciliation}/>
        </Fragment>
    );
}

export default ServicesConciliation;
