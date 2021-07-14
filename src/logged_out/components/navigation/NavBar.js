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
  Avatar, Typography,
  TextField
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import classNames from "classnames";
import { isAuth, getUserInfo } from '../../../api/userApi';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Constants from './../../../util/constants';
import { useHistory } from 'react-router';
import AddressDialog from '../address/AddressDialog';

import AbogadoVirtual from '../../../images/xabogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/arbitrajeVirtual.jpg';
import CharlasVirtuales from '../../../images/charlasVirtuales.jpg';
import MediacionOnline from '../../../images/xmediacionOnline.jpg';
import RedaccionCartasNotariales from '../../../images/redaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/xconciliacionMype.jpg';
import ConciliacionResoluciónContrato from '../../../images/conciliacionResoluciónContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../../images/conciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../../images/conciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../../images/conciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../../images/conciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../../images/xconciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../../images/xconciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../../images/conciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../../images/conciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../../images/conciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../../images/conciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../../images/conciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../../images/conciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../../images/xconciliacionDivorcio.jpg';
import ConciliacionSocial from '../../../images/xconciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../../images/xconciliacionPersonaNarutal.jpg';
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
      link: "/",
      name: "Mediación Online",
      isLogin: false,
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/products",
      name: "Arbitraje Virtual",
      isLogin: false,
      icon: <ShoppingCartIcon className="text-white" />
    },
    {
      link: "/company",
      name: "Abogado Virtual",
      isLogin: false,
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
        link: "/login",
        name: "Mesa de Partes Virtual",
        isLogin: false,
        icon: <AccountBalanceIcon className="text-white" />
      }
  ]);
  const [values, setValues] = useState({
      title: '',
      img: '',
      title: '',
      description: '',
      more: '',
      img: ''
  })
  const [servicesConciliation, setServicesConciliation] = useState([
    {
        img: ConciliacionMYPE,
        title: "Conciliación para MYPE",
        description: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
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
        description: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
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
        description: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
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
        description: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
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
        description: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
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
        description: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
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
        description: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
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
        description: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
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
        description: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
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
        description: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
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
        img: AbogadoVirtual,
        title: 'AbogadoVirtual',
        description: "Abogado virtual es un servicio de asesoría y defensa legal virtual ante los tribunales de justicia del Perú eficiente, eficaz  y dedicación a sus clientes.",
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "Conciliación por Pensión de Alimentos",
            },
           
        ]
    },
    {
        img: MediacionOnline,
        title: "Mediacion online",
        description: "AEs un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "Conciliación por Pensión de Alimentos",
            },
           
        ]
    }
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

  const onGoToHome = ()=>{
    props.history.go('/');
  }

  const logOut = () => {
    sessionStorage.removeItem(Constants.userInfo);
    props.history.go('/');
  }

  const onProfile = () => {
    history.push('/c/profile')
  }

  const onServicesInfo = (event) => {
      event.preventDefault();
    // history.push({
         //pathname: '/servicesinfo',
         //state: values,
    // });
    console.log(values.title);
}

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{display: "flex"}}>
            <img src='logo.png' alt="Logo" className={classes.logo} onClick={onGoToHome}/> 
            <Typography variant="h5" color="primary" style={{fontWeight: "bold", marginLeft: "4px"}}>SCMC</Typography>
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

              {/* MenuButton servicesConciliacion */}
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
                            <MenuItem /* onClick={handleMenuClose} */ onClick={onServicesInfo}>{element.title}</MenuItem>        
                        </div>
                      ))
                  }
              </Menu>
              {/*  */}

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
                              style={{color: "#fff", backgroundColor: "#111E47", borderRadius: "20px", padding: "13px"}}
                            >
                              {element.name}
                            </Button>
                            :
                            <Button
                              color="primary"
                              size="large"
                              classes={{ text: classes.menuButtonText }}
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
