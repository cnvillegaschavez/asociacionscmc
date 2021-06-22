import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";

import nosotros from '../../images/nosotros.jpg';


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8 text-justify`;


export default ({
  headingHtmlComponent = (
    <>
     ¿Que es el centro de conciliación <span tw="text-primary-500">EX LEGE?</span>
    </>
  ),
  description = "EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.",
  textOnLeft = false
}) => {
  
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>

          <img src={nosotros} alt=""/>

        </ThreeColumn>
      </Content>
    </Container>
  );
};
