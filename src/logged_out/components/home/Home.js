import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import CarouselContainer from "../carousel/CarouselContainer";
import ServicesConciliation from "./ServicesConciliation";
import We from "./We";
import OurProfessionals from "./OurProfessionals";
import Contact from "../contact/Contact";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

class Home extends PureComponent {

    // useEffect(() => {
    //     smoothScrollTop();
    // }, []);
    
    constructor(props){
        super(props)
        this.state = {
            titleContact: "Estamos aquí para ayudar",
            subtitleContact: "Contáctenos hoy para programar una consulta",
            descriptionContacPrimary: "Si tiene preguntas, necesita el consejo de un consejero de confianza o simplemente no sabe a quién acudir, nuestro equipo está aquí para ayudarlo. Contáctenos hoy para programar una consulta gratis.",
            descriptionContacSecondary: "Si no puede visitarnos en nuestra oficina en el centro durante la semana, estaremos más que felices de encontrarnos con usted en su casa o en nuestra oficina durante el fin de semana.",
        }
    }

    componentDidMount() {
        const { selectHome } = this.props;
        selectHome();
    }
    render() {
        return (
            <Fragment>
                {/* <CarouselContainer /> */}
                <HeadSection/>
                <ServicesConciliation />
                <br />
                <We />
                <br />
                <OurProfessionals />
                <br />
                <Contact
                    title={this.state.titleContact}
                    subtitle={this.state.subtitleContact}
                    descriptionPrimary={this.state.descriptionContacPrimary}
                    descriptionSecondary={this.state.descriptionContacSecondary}
                />
            </Fragment>
        );
    }
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired
};

export default Home;
