import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Avatar, Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EmailIcon from '@material-ui/icons/Email';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import classNames from "classnames";
import { isAuth, getUserInfo } from '../../../api/userApi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Constants from './../../../util/constants';
import { useHistory } from 'react-router';

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

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },  
  noDecoration: {
    textDecoration: "none !important",
  },
  logo : { width: 57, cursor:'pointer' },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 32,
    width: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }
  },
  address: {
    // position: 'relative',
    display: 'block',
    paddingBottom: theme.spacing(2.5),
    // whiteSpace: 'nowrap',
    // overOflow: 'hidden',
    // textOverflow: 'ellipsis',
    //width: '100px'
  },
  caja: {
    position: 'float',
    display: 'block',
  }
  
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
 
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorButtonServices, setAnchorButtonServices] = useState(null);
  const [userUrlIcon, setUserUrlIcon] = useState(Constants.profilePicture);
  const [menuItems, setMenuItems] = useState([
    {
      link: "/mediaciononline",
      name: "Mediación Online",
      isLogin: false,
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
      link: "/arbitrajevirtual",
      name: "Arbitraje Virtual",
      isLogin: false,
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
      link: "/abogadovirtual",
      name: "Abogado Virtual",
      isLogin: false,
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
        link: "/mesadepartesvirtual",
        name: "Mesa de Partes Virtual",
        isLogin: false,
        icon: <EmailIcon className="text-white" />
      }
  ]);
  const [servicesConciliation, setServicesConciliation] = useState([
    {
        img: ConciliacionMYPE,
        title: "Conciliación para MYPE",
        descriptionPrimary: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
        descriptionSecondary: "",
        price: "",
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
                price: "S/. 350"
            },  
            
        ]
    },
    {
        img: ConciliacionEmpresa,
        title: "Conciliación Empresarial",
        descriptionPrimary: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
        descriptionSecondary: "",
        price: "",
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
                price: "S/. 350"
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
        price: "",
        list:  [],
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
                img: ConciliacionExoneracionPersionAlimentos,
                title: "Conciliación de Exoneracion de persión de alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionGastosEmbarazo,
                title: "Conciliación por Gastos de Embarazo",
                price: "S/.250"
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
                img: ConciliacionDivorcio,
                title: "Conciliación para divorcio",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            }
        ]
    },
    {
        img: ConciliacionDivorcio,
        title: "Conciliación para Divorcio",
        descriptionPrimary: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
        descriptionSecondary: "",
        price: "S/.300",
        list:  [],
        more: [
            {
                img: ConciliacionTenenciaHijos,
                title: "Conciliación por Régimen de Visitas con externamiento",
                price: "S/.300"
            },
            {
                img: RedaccionCartasNotariales,
                title: "Redaccion de cartas notariales",
                price: "S/.100"
            },
            {
                img:   ConciliacionRegimenVisitasSinExternamiento,
                title: "Conciliación por Régimen de Visitas sin externamiento",
                price: "S/.300"
            },
            {
                img:  AbogadoVirtual,
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
    {
        img: ConciliacionSocial,
        title: "Conciliación Social",
        descriptionPrimary: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
        descriptionSecondary: "",
        price: "",
        list:  [],
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
                price: "S/.250"
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
        img: ConciliacionPersonaNarutal,
        title: "Conciliación para Personas Naturales",
        descriptionPrimary: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
        descriptionSecondary: "",
        price: "",
        list:  [],
        more: [
            {
                img: ConciliacionDivisionParticionBienes,
                title: "Conciliación de División y Partición de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDañosVehiculos,
                title: "Conciliación por Indenmización de daños a vehículos",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizaciónNegligenciaMedica,
                title: "Conciliación por Indenmización de Negligencia Médica",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionAccidenteTransito,
                title: "Conciliación por Indenmización de accidente de transito",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "Conciliación de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "Conciliación de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoVencimientoContrato,
                title: "Conciliación de Desalojo por Vencimiento de contrato",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionGastosEmbarazo,
                title: "Conciliación por Gastos de Embarazo",
                price: "S/.250"
            },
        ]
    },
    {
        img: ConciliacionContratacionesEstado,
        title: "Conciliación en Contrataciones del Estado",
        descriptionPrimary: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
        descriptionSecondary: "",
        price: "",
        list:  [],
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
                price: "S/.300"
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
                price: "S/.499"
            },
            {
                img: ConciliacionAmpliaciónPlazo,
                title: "Conciliación de Ampliación del Plazo",
                price: "S/.499"
            }
        ]
    },
    {
        img: ConciliacionFueraCentroConciliacion,
        title: "Conciliación fuera del Centro de Conciliación",
        descriptionPrimary: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
        descriptionSecondary: "",
        price: "",
        list:  [],
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "Conciliación por Pensión de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "Conciliación para Divorcio",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
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
        img: ConciliacionApoderado,
        title: "Conciliación con Apoderado",
        descriptionPrimary: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
        descriptionSecondary: "",
        price: "",
        list:  [],
        more: [
            {
                img: ConciliacionDivisionParticionBienes,
                title: "Conciliación de División y Partición de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDañosVehiculos,
                title: "Conciliación por Indenmización de daños a vehiculos",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizaciónNegligenciaMedica,
                title: "Conciliación de Indenmización de Negligencia Médica",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "Conciliación de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "Conciliación de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "Conciliación para Divorcio",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoVencimientoContrato,
                title: "Conciliación de Desalojo por Vencimiento de Contrato",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionPensionAlimentos,
                title: "Conciliación por Pensión de Alimentos",
                price: "S/.300"
            },

        ]
    },
    {
        img: ConciliacionHoyMismo,
        title: "Concilia hoy mismo",
        descriptionPrimary: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
        descriptionSecondary: "",
        price: "",
        list:  [],
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
                img: ConciliacionRegimenVisitasSinExternamiento,
                title: "Conciliación de Régimen de Visias sin externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDañosVehiculos,
                title: "Conciliación por Indenmización de daños a vehiculos",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "Conciliación de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "Conciliación de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionExoneracionPersionAlimentos,
                title: "Conciliación de Exoneración de pensión de alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionTenenciaHijos,
                title: "Conciliación por Tenencia de hijos",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "Conciliación para Divorcio",
                price: "S/.300"
            }
        ]
    },
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorButtonServices(null);
  }

  const handleOpenMenu = (event) => {
    setAnchorButtonServices(event.currentTarget);    
  }

  useEffect(() => {
    const getUserMenu = () => {
      if(isAuth()){
        let user= getUserInfo();
        let urlIcon = Constants.profilePicture;
        if(user.media && user.media[0]){
          urlIcon = user.media[0].thumb.replace(Constants.replacePath, Constants.extension);
        }
        setUserUrlIcon(urlIcon);
        let isLoginItem =
        {
          name: user.name,
          isLogin: true,
          link: '/c/profile',
          icon: <SupervisorAccountIcon className="text-white" />
        };
        let items= menuItems;       
        items.pop();
        items.push(isLoginItem);
        setMenuItems(items);
      }
    }
    getUserMenu();
  },[menuItems]);

  const onGoToHome = () =>{
    props.history.go('/');
  }

  const logOut = () => {
    sessionStorage.removeItem(Constants.userInfo);
    props.history.go('/');
  }

  const onProfile = () => {
    history.push('/c/profile')
  }

  const onHome = () => {
    history.push('/');
  }
  const onServicesInfo = (event) => {
    const { myValue } = event.currentTarget.dataset;
    servicesConciliation.map((element, index) => {
        if(element.title===myValue){
            const values = {
                title: element.title,
                subtitle: element.subtitle,
                descriptionPrimary: element.descriptionPrimary,
                descriptionSecondary: element.descriptionSecondary,
                price: element.price,
                list: element.list,
                img: element.img,
                more: element.more
            }
            history.push({
                pathname: '/servicesinfo',
                state: values,
            });
        }
    });
    setAnchorButtonServices(null);
  }

  const onInfo = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{display: "flex"}}>
              <Button onClick={onHome}>
                <img src='logo.png' alt="Logo" className={classes.logo}/> 
                <Typography variant="h5" color="primary" style={{fontWeight: "bold", marginLeft: "4px"}}>SCMC</Typography>
              </Button>
            
          </div>
          
       
          <div className={classes.caja}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
        
            <Hidden smDown>

              {/* ---- MenuButton servicesConciliacion ----*/}
              <Button
                aria-controls="menu"
                onClick={handleOpenMenu}
                disableRipple
                variant="contained"
                style={{color: "#111E47", backgroundColor:"#fff", boxShadow: "none"}}
                size="large"
                endIcon={<KeyboardArrowDownIcon/>}
              >
                Servicios de Conciliación
              </Button>
              <Menu style={{marginTop: "35px", width: "1000px"}} id="menu" onClose={handleMenuClose} anchorEl={anchorButtonServices} open={Boolean(anchorButtonServices)}>
                  {
                      servicesConciliation.map((element, index) => (
                          <div key={index}>
                             <MenuItem data-my-value={element.title} onClick={onServicesInfo} /* onClick={handleMenuClose} */ >{element.title}</MenuItem>
                          </div>
                      ))
                  }
              </Menu>
              {/* ---- ------------------------------- ----*/}

              {menuItems.map(element => {
                if (element.isLogin===false) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                        {
                            element.name==="Mesa de Partes Virtual" 
                            ?
                            <Button
                              color="primary"
                              size="large"
                              classes={{ text: classes.menuButtonText }}
                              style={{color: "#fff", backgroundColor: "#111E47", borderRadius: "20px", padding: "10px 20px"}}
                            >
                              {element.name}
                            </Button>
                            :
                            <Button
                              color="primary"
                              size="large"
                              classes={{ text: classes.menuButtonText }}
                              value={"example"}
                              //onClick={e => onInfo(e, "value")} 
                            >
                              {element.name}
                            </Button>
                        }
                    </Link>
                  );
                }               
                return (
                  <Fragment key={element.name}>
                    <Button
                        color="primary"
                        size="large"
                        onClick={handleClick}
                        classes={{ text: classes.menuButtonText }}
                    >
                        <Avatar
                            alt="profile picture"
                            src={userUrlIcon}
                            className={classNames(classes.accountAvatar)}
                        />
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem onClick={onProfile}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Mi perfil" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={logOut}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" />
                        </StyledMenuItem>
                    </StyledMenu>
                  </Fragment> 
                );
              })}
            </Hidden>
          
          </div>
        </Toolbar>
      </AppBar>
      
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
