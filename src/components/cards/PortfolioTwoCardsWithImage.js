import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


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
  subheading = "¿QUES ES EL CENTRO DE CONCILIACIÓN EX LEGE?",
  headingHtmlComponent = (
    <>
     ¿Que es el centro de conciliación <span tw="text-primary-500">EX LEGE?</span>
    </>
  ),
  description = "EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.",
  textOnLeft = false
}) => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Tesla Inc.",
      type: "Ad Campaign",
      title: "Personalized Ad Campaign using Google AdWords",
      durationText: "90 Days Campaign",
      locationText: "New York"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Nestle",
      type: "SEO Marketing",
      title: "Ranking #1 for keywords like Chocolate, Snack",
      durationText: "180 Day Campaign",
      locationText: "Palo Alto"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>

          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              {/* <Subheading>{subheading}</Subheading> */}
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              {/* <PrimaryLink>
                {linkText} <ArrowRightIcon />
              </PrimaryLink> */}
            </HeadingInfoContainer>
          </HeadingColumn>

          <img src={nosotros} alt=""/>


         {/*  {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>{cardLinkText}</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))} */}


        </ThreeColumn>
      </Content>
    </Container>
  );
};
