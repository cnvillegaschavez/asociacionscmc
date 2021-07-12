import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cardx from './Cardx';

import AbogadoVirtual from '../../../images/abogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/arbitrajeVirtual.jpg';
import CharlasVirtuales from '../../../images/charlasVirtuales.jpg';
import MediacionOnline from '../../../images/mediacionOnline.jpg';
import RedaccionCartasNotariales from '../../../images/redaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/xconciliacionMype.jpg';
import ConciliacionResoluciónContrato from '../../../images/conciliacionResoluciónContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../../images/conciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../../images/conciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../../images/conciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../../images/conciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../../images/conciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../../images/xconciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../../images/conciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../../images/conciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../../images/conciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../../images/conciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../../images/conciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../../images/conciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../../images/xconciliacionDivorcio.jpg';
import ConciliacionSocial from '../../../images/xconciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../../images/conciliacionPersonaNarutal.jpg';
import ConciliacionDivisionParticionBienes from '../../../images/conciliacionDivisionParticionBienes.jpg';
import ConciliacionIndenmizacionDañosVehiculos from '../../../images/conciliacionIndenmizacionDañosVehiculos.jpg';
import ConciliacionIndenmizaciónNegligenciaMedica from '../../../images/conciliacionIndenmizaciónNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../../images/conciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../../images/conciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../../images/conciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionesEstado from '../../../images/xconciliacionContratacionesEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../../images/conciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../../images/conciliacionViciosOcultosContratacionesEstado.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../../images/conciliacionIndenmizacionContratacionesEstado.jpg';
import ConciliacionPagoDeudasContratacionesEstado from '../../../images/conciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../../images/conciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciónConformidad from '../../../images/conciliacionRecepciónConformidad.jpg';
import ConciliacionResoluciónContratosSuministrosServiciosObras from '../../../images/conciliacionResoluciónContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciónPlazo from '../../../images/conciliacionAmpliaciónPlazo.jpg';
import ConciliacionFueraCentroConciliacion from '../../../images/xconciliacionFueraCentroConciliacion.jpg';
import ConciliacionApoderado from '../../../images/xconciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../../images/xconciliacionHoyMismo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
            title: 'Conciliación para Social',
        },
        {
            img: ConciliacionContratacionesEstado,
            title: 'Conciliación en Contrataciones con el Estado',
        },
        {
            img: ConciliacionFueraCentroConciliacion,
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
                <Grid container>
                    {
                        servicesConciliation.map((element, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <Cardx title={element.title} img={element.img}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Fragment>
    );
}

export default ServicesConciliation;
