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

import conciliacionMYPE from '../../images/conciliacionMYPE.jpg';
import conciliacionEmpresa from '../../images/conciliacionEmpresa.jpg';
import conciliacionFamiliar from '../../images/conciliacionFamiliar.jpg';
import conciliacionDivorcio from '../../images/conciliacionDivorcio.jpg';
import conciliacionSocial from '../../images/conciliacionSocial.jpg';
import conciliacionPersonaNarutal from '../../images/conciliacionPersonaNarutal.jpg';
import conciliacionContratacionEstado from '../../images/conciliacionContratacionEstado.jpg';
import conciliacionCentroConciliacion from '../../images/conciliacionCentroConciliacion.jpg';
import conciliacionApoderado from '../../images/conciliacionApoderado.jpg';
import conciliacionHoyMismo from '../../images/conciliacionHoyMismo.jpg';

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
  const phone = "+51962212903";
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
      imageSrc: conciliacionMYPE,
      title: "Conciliaci??n para MYPE",
      description: "Servicio enfocado en las micro y peque??as empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionFamiliar,
      title: "Conciliaci??n Familiar",
      description: "Servicio de conciliaci??n extrajudicial de conflictos familiares mediante di??logo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionEmpresa,
      title: "Conciliaci??n Empresarial",
      description: "Servicio orientado en el sector empresarial con el objeto de resolver conflictos por v??as no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
      locationText: "En Oficina",
      rating: "",
    },    
    {
      imageSrc: conciliacionDivorcio,
      title: "Conciliaci??n para Divorcio",
      description: "Servicio dirigido a c??nyuges que desean divorciarse por mutuo acuerdo en Notarias o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensi??n de alimentos, tenencia y r??gimen de visitas de hijos.",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionSocial,
      title: "Conciliaci??n Social",
      description: "Servicio destinado a personas de escasos recursos econ??micos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliaci??n extrajudicial a precios accesibles y de calidad.",
      locationText: "En Oficina",
      rating: "",
    },
    {
        imageSrc: conciliacionPersonaNarutal,
        title: "Conciliaci??n para Personas Naturales",
        description: "Servicio de conciliaci??n extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
        locationText: "En Oficina",
        rating: "",
    },
    {
        imageSrc: conciliacionContratacionEstado,
        title: "Conciliaci??n en Contrataciones del Estado",
        description: "Servicio de conciliaci??n que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionCentroConciliacion,
        title: "Conciliaci??n fuera del Centro de Conciliaci??n",
        description: "Servicio de conciliaci??n extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Adem??s, internamiento en centro de salud, etc.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionApoderado,
        title: "Conciliaci??n con Apoderado",
        description: "Servicio de conciliaci??n extrajudicial que permite participar de un procedimiento conciliatorio a trav??s de un apoderado. Del mismo modo, como lo har??a el poderdante.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionHoyMismo,
        title: "Concilia hoy mismo",
        description: "Servicio de conciliaci??n extrajudicial que posibilita conciliar el mismo d??a que presentas la solicitud de conciliaci??n. En conclusi??n, te liberas del conflicto el mismo d??a.",
        locationText: "En Oficina",
        rating: "",
      }
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Servicios de conciliaci??n para ti</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
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
              </TextInfo>
              <PrimaryButton>
              <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${card.title}`}>
                <IconWithTextButton>                    
                    <IconContainerButton style={ { marginRight: 15 } }>
                      <img src={WhatsappIcon} style={ {width: 25 } }/>
                    </IconContainerButton>
                    CONTACTAR
                </IconWithTextButton>                     
               </a>                
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
