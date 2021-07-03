import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";

import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import WhatsappIcon from "../../images/whatsapp.png";
import CollapseCardGrid from "./CollapseCardGrid";
import Chevron from './Chevron';
import ConciliacionMYPE from '../../images/cconciliacionMYPE.jpg';
import ConciliacionResoluciónContrato from '../../images/cconciliacionResoluciónContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../images/cconciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../images/cconciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../images/cconciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../images/cconciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../images/cconciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../images/cconciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../images/cconciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../images/cconciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../images/cconciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../images/cconciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../images/cconciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../images/cconciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../images/cconciliacionDivorcio.jpg';
import RedaccionCartasNotariales from '../../images/RedaccionCartasNotariales.jpg';
import AbogadoVirtual from '../../images/abogadoVirtual.jpg';
import ConciliacionSocial from '../../images/cconciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../images/cconciliacionPersonaNarutal.jpg';
import ConciliacionDivisionParticionBienes from '../../images/cconciliacionDivisionParticionBienes.jpg';
import ConciliacionIndenmizacionDañosVehiculos from '../../images/cconciliacionIndenmizacionDañosVehiculos.jpg';
import ConciliacionIndenmizaciónNegligenciaMedica from '../../images/cconciliacionIndenmizaciónNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../images/cconciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../images/cconciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../images/cconciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionEstado from '../../images/cconciliacionContratacionEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../images/cconciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../images/cconciliacionViciosOcultosContratacionesEstado.jpg';

//import ConciliacionIndenmizacionContratacionesEstado from '../../images/a.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../images/cconciliacionIndenmizacionContratacionesEstado.jpg';

import ConciliacionPagoDeudasContratacionesEstado from '../../images/cconciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../images/cconciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciónConformidad from '../../images/cconciliacionRecepciónConformidad.jpg';
import ConciliacionResoluciónContratosSuministrosServiciosObras from '../../images/cconciliacionResoluciónContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciónPlazo from '../../images/cconciliacionAmpliaciónPlazo.jpg';
import ConciliacionCentroConciliacion from '../../images/cconciliacionCentroConciliacion.jpg';
import ConciliacionApoderado from '../../images/cconciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../images/cconciliacionHoyMismo.jpg';


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;

const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;

const IconWithTextButton = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainerButton = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-8 h-8`}
  }
`;

const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {

  const phone = "+51963559100";
  const message = `Hola, quisiera consultar acerca del servicio de `;
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: ConciliacionMYPE,
      title: "Conciliación para MYPE",
      description: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
      locationText: "En Oficina",
      rating: "",
      isActive: false,
      more: [
        {
            imageSrc: ConciliacionResoluciónContrato,
            title: "Conciliación de Resolución de Contrato",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasPrestacionServicios,
            title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasVentaBienes,
            title: "Conciliación para Cobrar Deudas por Venta de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarPrestamosDinero,
            title: "Conciliación para Cobrar Préstamos de Dinero",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoFaltaPago,
            title: "Conciliacion de Desalojo por Falta de Pago",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        }
      ]
    },
    {
      imageSrc: ConciliacionFamiliar,
      title: "Conciliación Familiar",
      description: "Servicio de conciliación extrajudicial de conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
      locationText: "En Oficina",
      rating: "",
      isActive: false,
      more: [
        {
            imageSrc: ConciliacionPensionAlimentos,
            title: "Conciliación por Pensión de Alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasConExternamiento,
            title: "Conciliación por Régimen de Visitas con externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionExoneracionPersionAlimentos,
            title: "Conciliación de Exoneracion de persión de alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionGastosEmbarazo,
            title: "Conciliación por Gastos de Embarazo",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasSinExternamiento,
            title: "Conciliación de Régimen de Visias sin externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionTenenciaHijos,
            title: "Conciliación por Tenencia de hijos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDivorcio,
            title: "Conciliación para divorcio",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        }
      ]
    },
    {
      imageSrc: ConciliacionEmpresa,
      title: "Conciliación Empresarial",
      description: "Servicio orientado en el sector empresarial con el objeto de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
      locationText: "En Oficina",
      rating: "",
      isActive: false,
      more: [
        {
            imageSrc: ConciliacionCobrarDeudasPrestacionServicios,
            title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasVentaBienes,
            title: "Conciliación para Cobrar Deudas por Venta de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarPrestamosDinero,
            title: "Conciliación para Cobrar Préstamos de Dinero",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        }
      ]
    },    
    {
      imageSrc: ConciliacionDivorcio,
      title: "Conciliación para Divorcio",
      description: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
      locationText: "En Oficina",
      rating: "",
      isActive: false,
      more: [
        {
            imageSrc: ConciliacionRegimenVisitasConExternamiento,
            title: "Conciliación por Régimen de Visitas con externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: RedaccionCartasNotariales,
            title: "Redaccion de cartas notariales",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasSinExternamiento,
            title: "Conciliación por Régimen de Visitas sin externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: AbogadoVirtual,
            title: "Abogado virtual",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionPensionAlimentos,
            title: "Conciliación por Pensión de Alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionTenenciaHijos,
            title: "Conciliación por Tenencia de hijos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        }
      ]
    },
    {
      imageSrc: ConciliacionSocial,
      title: "Conciliación Social",
      description: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
      locationText: "En Oficina",
      rating: "",
      isActive: false,
      more: [
        {
            imageSrc: ConciliacionPensionAlimentos,
            title: "Conciliación por Pensión de Alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasConExternamiento,
            title: "Conciliación por Régimen de Visitas con externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionGastosEmbarazo,
            title: "Conciliación por Gastos de Embarazo",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasSinExternamiento,
            title: "Conciliación de Régimen de Visias sin externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionTenenciaHijos,
            title: "Conciliación por Tenencia de hijos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        }
      ]
    },
    {
        imageSrc: ConciliacionPersonaNarutal,
        title: "Conciliación para Personas Naturales",
        description: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
        locationText: "En Oficina",
        rating: "",
        isActive: false,
        more: [
        {
            imageSrc: ConciliacionDivisionParticionBienes,
            title: "Conciliación de División y Partición de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizacionDañosVehiculos,
            title: "Conciliación por Indenmización de daños a vehículos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizaciónNegligenciaMedica,
            title: "Conciliación por Indenmización de Negligencia Médica",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizacionAccidenteTransito,
            title: "Conciliación por Indenmización de accidente de transito",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasPrestacionServicios,
            title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasVentaBienes,
            title: "Conciliación para Cobrar Deudas por Venta de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarPrestamosDinero,
            title: "Conciliación para Cobrar Préstamos de Dinero",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoFaltaPago,
            title: "Conciliación de Desalojo por Falta de Pago",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoOcupantePrecario,
            title: "Conciliación de Desalojo por Ocupante Precario",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoVencimientoContrato,
            title: "Conciliación de Desalojo por Vencimiento de contrato",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            }
        ]
    },
    {
        imageSrc: ConciliacionContratacionEstado,
        title: "Conciliación en Contrataciones del Estado",
        description: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
        locationText: "En Oficina",
        rating: "",
        isActive: false,
        more: [
        {
            imageSrc: ConciliacionLiquidacionesContratacionesEstado,
            title: "Conciliación de Liquidaciones en Contrataciones del Estado",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionViciosOcultosContratacionesEstado,
            title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizacionContratacionesEstado,
            title: "Conciliación de Indenmización en Contrataciones del Estado",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionPagoDeudasContratacionesEstado,
            title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionValorazionesMetrados,
            title: "Conciliación de Valoraziones y Metrados",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            },
        {
            imageSrc: ConciliacionRecepciónConformidad,
            title: "Conciliación de Recepción y Conformidad",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionResoluciónContratosSuministrosServiciosObras,
            title: "Conciliación de Resolución de Contratos de Suministros Servicios y Obras",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionAmpliaciónPlazo,
            title: "Conciliación de Ampliación del Plazo",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            }
        ]
      },
      {
        imageSrc: ConciliacionCentroConciliacion,
        title: "Conciliación fuera del Centro de Conciliación",
        description: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
        locationText: "En Oficina",
        rating: "",
        isActive: false,
        more: [
        {
            imageSrc: ConciliacionPensionAlimentos,
            title: "Conciliación por Pensión de Alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDivorcio,
            title: "Conciliación para Divorcio",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            }
        ]
      },
      {
        imageSrc: ConciliacionApoderado,
        title: "Conciliación con Apoderado",
        description: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
        locationText: "En Oficina",
        rating: "",
        isActive: false,
        more: [
        {
            imageSrc: ConciliacionDivisionParticionBienes,
            title: "Conciliación de División y Partición de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizacionDañosVehiculos,
            title: "Conciliación por Indenmización de daños a vehiculos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizaciónNegligenciaMedica,
            title: "Conciliación de Indenmización de Negligencia Médica",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasPrestacionServicios,
            title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasVentaBienes,
            title: "Conciliación para Cobrar Deudas por Venta de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarPrestamosDinero,
            title: "Conciliación para Cobrar Préstamos de Dinero",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoFaltaPago,
            title: "Conciliación de Desalojo por Falta de Pago",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoOcupantePrecario,
            title: "Conciliación de Desalojo por Ocupante Precario",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDivorcio,
            title: "Conciliación para Divorcio",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoVencimientoContrato,
            title: "Conciliación de Desalojo por Vencimiento de Contrato",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            }
        ]
      },
      {
        imageSrc: ConciliacionHoyMismo,
        title: "Concilia hoy mismo",
        description: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
        locationText: "En Oficina",
        rating: "",
        isActive: false,
        more: [
        {
            imageSrc: ConciliacionPensionAlimentos,
            title: "Conciliación por Pensión de Alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasConExternamiento,
            title: "Conciliación por Régimen de Visitas con externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionIndenmizacionDañosVehiculos,
            title: "Conciliación por Indenmización de daños a vehiculos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasPrestacionServicios,
            title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarDeudasVentaBienes,
            title: "Conciliación para Cobrar Deudas por Venta de Bienes",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionCobrarPrestamosDinero,
            title: "Conciliación para Cobrar Préstamos de Dinero",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoFaltaPago,
            title: "Conciliación de Desalojo por Falta de Pago",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoOcupantePrecario,
            title: "Conciliación de Desalojo por Ocupante Precario",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionExoneracionPersionAlimentos,
            title: "Conciliación de Exoneración de pensión de alimentos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionRegimenVisitasSinExternamiento,
            title: "Conciliación de Régimen de Visias sin externamiento",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionTenenciaHijos,
            title: "Conciliación por Tenencia de hijos",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDivorcio,
            title: "Conciliación para Divorcio",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
        },
        {
            imageSrc: ConciliacionDesalojoVencimientoContrato,
            title: "Conciliación de Desalojo por Vencimiento de Contrato",
            content: "",
            price: "",
            rating: "",
            reviews: "",
            url: "#"
            }
        ]
      }
  ]
   
  
  const [heading, setHeading] = useState("");
  const [allCards, setAllCards] = useState(cards);
  const [currentCard, setCurrentCard] = useState(null);
  const [tabs, setTabs]= useState({
      '+ Servicios': [],
  });

  const toogleAccordion = (card) => {
    setHeading(card.title);
    setTabs({'+ Servicios': card.more});

    allCards.map(item=>{
      item.isActive = false;
      if(item.title===card.title){
        item.isActive = true;
        setCurrentCard(item);
      }        
    });
    
    setAllCards(allCards);
  }
  
  return (
    <Container>
      <Content>
          
        <HeadingWithControl>
          <Heading>Servicios de conciliación para ti</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {allCards.map((card, index) => (
            <Card key={index}>

              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon/>
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                 
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
                  <IconWithText>
                    {card.isActive? <Chevron className="rotate" width={10} fill={"#777"} />: <Chevron width={10} fill={"#777"}  />}
                    
                     <Text style={ { cursor: 'pointer' } } onClick={() => toogleAccordion(card)}>Ver más</Text>
                  </IconWithText>
              </TextInfo>
              
              <PrimaryButton>
                    <IconWithTextButton>                    
                        <IconContainerButton style={ { marginRight: 15 } }>
                          <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${card.title}`}> 
                            <img src={WhatsappIcon} alt="cargando imagen..." style={ {width: 25 } }/>
                            </a>
                        </IconContainerButton>
                        CONTACTAR
                    </IconWithTextButton>
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
       {
         currentCard!=null&& currentCard.isActive &&
            <CollapseCardGrid heading={heading} tabs={tabs}/>
       }       
      </Content>      

    </Container>
  );
};
