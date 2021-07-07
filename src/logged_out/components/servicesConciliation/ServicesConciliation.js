import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

import AbogadoVirtual from '../../../images/abogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/arbitrajeVirtual.jpg';
import CharlasVirtuales from '../../../images/charlasVirtuales.jpg';
import MediacionOnline from '../../../images/mediacionOnline.jpg';
import RedaccionCartasNotariales from '../../../images/redaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/conciliacionMYPE.jpg';
import ConciliacionResoluciónContrato from '../../../images/conciliacionResoluciónContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../../images/conciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../../images/conciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../../images/conciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../../images/conciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../../images/conciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../../images/conciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../../images/conciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../../images/conciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../../images/conciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../../images/conciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../../images/conciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../../images/conciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../../images/conciliacionDivorcio.jpg';
import ConciliacionSocial from '../../../images/conciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../../images/conciliacionPersonaNarutal.jpg';
import ConciliacionDivisionParticionBienes from '../../../images/conciliacionDivisionParticionBienes.jpg';
import ConciliacionIndenmizacionDañosVehiculos from '../../../images/conciliacionIndenmizacionDañosVehiculos.jpg';
import ConciliacionIndenmizaciónNegligenciaMedica from '../../../images/conciliacionIndenmizaciónNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../../images/conciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../../images/conciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../../images/conciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionEstado from '../../../images/conciliacionContratacionEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../../images/conciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../../images/conciliacionViciosOcultosContratacionesEstado.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../../images/conciliacionIndenmizacionContratacionesEstado.jpg';
import ConciliacionPagoDeudasContratacionesEstado from '../../../images/conciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../../images/conciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciónConformidad from '../../../images/conciliacionRecepciónConformidad.jpg';
import ConciliacionResoluciónContratosSuministrosServiciosObras from '../../../images/conciliacionResoluciónContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciónPlazo from '../../../images/conciliacionAmpliaciónPlazo.jpg';
import ConciliacionCentroConciliacion from '../../../images/conciliacionCentroConciliacion.jpg';
import ConciliacionApoderado from '../../../images/conciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../../images/conciliacionHoyMismo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        /* padding: theme.spacing(3), */
        background: theme.palette.primary.main,
        marginTop: "80px"
    },
}));

const ServicesConciliation = () => {
    const classes = useStyles();
    const [servicesConciliation, setServicesConciliation] = useState([
        {
            img: ConciliacionMYPE,
            title: 'Conciliación para MYPE',
        },
        {
            img: ConciliacionFamiliar,
            title: 'Conciliación Familiar',
        },
        {
            img: ConciliacionDivorcio,
            title: 'Conciliación para Divorcio',
        },
        {
            img: ConciliacionSocial,
            title: 'Conciliación para MYPE',
        },
        {
            img: ConciliacionContratacionEstado,
            title: 'Conciliación en Contrataciones con el Estado',
        },
        {
            img: ConciliacionCentroConciliacion,
            title: 'Conciliación fuera del Centro de Conciliación',
        },
        {
            img: ConciliacionApoderado,
            title: 'Conciliación con Apoderado',
        },
        {
            img: ConciliacionHoyMismo,
            title: 'Conciliación hoy mismo',
        }
    ]);

    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container /* spacing={2} */>
                    {
                        servicesConciliation.map((element, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <Card title={element.title} img={element.img}></Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Fragment>
    );
}

export default ServicesConciliation;
