import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import MainFeature from "./components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import ThreeColSlider from 'components/cards/ThreeColSlider';
import TabCardGrid from 'components/cards/TabCardGrid';
import MapContainer from "./components/maps/MapContainer";
import PortfolioTwoCardsWithImage from "./components/cards/PortfolioTwoCardsWithImage";
import FAQ from "./components/faqs/SingleCol.js";
import SimpleContactUs from "./components/forms/SimpleContactUs.js";
import Footer from "./components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
    return (
        <AnimationRevealPage>
            <Hero />            
            <div id='services'>
                <ThreeColSlider />
            </div>
            <div id='virtual'>
                <TabCardGrid />
            </div>
            <div id='we-team'>
                <MainFeature
                    heading={<>Nuestros <HighlightedText>Profesionales</HighlightedText></>}
                />
            </div>
            <div id='testimonials'>
                <PortfolioTwoCardsWithImage/>
            </div>
            <FAQ
                heading={<>Algunas <HighlightedText>preguntas comunes</HighlightedText></>}
            />
            <div id='location'>
                <MapContainer />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div id='contact-us'>
                <SimpleContactUs />
            </div>
            <Footer />
        </AnimationRevealPage>
    );
}
