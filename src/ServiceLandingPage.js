import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "./components/features/ThreeColWithSideImage.js";
import MainFeature from "./components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import ServiceCenterConciliation from "./components/features/ServiceCenterConciliation.js";
import FeatureStats from "./components/features/ThreeColCenteredStatsPrimaryBackground.js";
import MapContainer from "./components/maps/MapContainer";
import Testimonial from "./components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "./components/faqs/SingleCol.js";
import SimpleContactUs from "./components/forms/SimpleContactUs.js";
import Footer from "./components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
    return (
        <AnimationRevealPage>
            <Hero />
            <ServiceCenterConciliation />
            <div id='services'>
                <Features
                    heading={<> Servicios<HighlightedText> bajo los rubros</HighlightedText></>}
                />
            </div>
            <div id='we-team'>
                <MainFeature
                    heading={<>Nuestros <HighlightedText>Profesionales</HighlightedText></>}
                />
            </div>
            <div id='testimonials'>
                <Testimonial
                    heading={<>Nuestros <HighlightedText> Clientes</HighlightedText></>}
                />
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
