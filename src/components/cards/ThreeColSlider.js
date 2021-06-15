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
import { ReactComponent as WhatsappIcon } from "feather-icons/dist/icons/whatsapp.svg";

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
      title: "Conciliación para MYPE",
      description: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionFamiliar,
      title: "Conciliación Familiar",
      description: "Servicio de conciliación extrajudicial de conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionEmpresa,
      title: "Conciliación Empresarial",
      description: "Servicio orientado en el sector empresarial con el objeto de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
      locationText: "En Oficina",
      rating: "",
    },    
    {
      imageSrc: conciliacionDivorcio,
      title: "Conciliación para Divorcio",
      description: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
      locationText: "En Oficina",
      rating: "",
    },
    {
      imageSrc: conciliacionSocial,
      title: "Conciliación Social",
      description: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
      locationText: "En Oficina",
      rating: "",
    },
    {
        imageSrc: conciliacionPersonaNarutal,
        title: "Conciliación para Personas Naturales",
        description: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
        locationText: "En Oficina",
        rating: "",
    },
    {
        imageSrc: conciliacionContratacionEstado,
        title: "Conciliación en Contrataciones del Estado",
        description: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionCentroConciliacion,
        title: "Conciliación fuera del Centro de Conciliación",
        description: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionApoderado,
        title: "Conciliación con Apoderado",
        description: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
        locationText: "En Oficina",
        rating: "",
      },
      {
        imageSrc: conciliacionHoyMismo,
        title: "Concilia hoy mismo",
        description: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
        locationText: "En Oficina",
        rating: "",
      }
  ]

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
                <IconWithTextButton>
                    CONTACTAR
                    <IconContainerButton>
                      <WhatsappIcon />
                    </IconContainerButton>
                </IconWithTextButton>
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
