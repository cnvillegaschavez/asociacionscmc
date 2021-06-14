import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { ServicesCenterConciliation } from "./components/ServicesCenterConciliation";
import { ServicesVirtual } from "./components/ServicesVirtual";
import { We } from "./components/We";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import MoreConciliation from "./components/MoreConciliation";
import DetailServiceVirtual from "./components/DetailServiceVirtual";
import JsonHeader from "./data/Header.json";
import JsonServicesConciliation from "./data/ServicesCenterConciliation.json";
import JsonServicesVirtual from "./data/ServicesVirtual.json";
import JsonWe from "./data/We.json";
import JsonBenefits from "./data/Benefits.json";
import JsonContact from "./data/Contact.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [dataHeader, setDataHeader] = useState({});
  const [dataServicesConsiliation, setDataServicesConsiliation] = useState({});
  const [dataServicesVirtual, setDataServicesVirtual] = useState({});
  const [dataWe, setDataWe] = useState({});
  const [daraBenefits, setDataBenefits] = useState({});
  const [dataContact, setDataContact] = useState({});
  
  useEffect(() => {
    setDataHeader(JsonHeader);
    setDataServicesConsiliation(JsonServicesConciliation);
    setDataServicesVirtual(JsonServicesVirtual);
    setDataWe(JsonWe);
    setDataBenefits(JsonBenefits);
    setDataContact(JsonContact);
  }, []);

  return (
    <Router>
        <Switch>

            <Route exact path="/">
                <Navigation />
                <Header data={dataHeader.Headerx} />
                <ServicesCenterConciliation data={dataServicesConsiliation.ServicesConciliation} />
                <ServicesVirtual data={dataServicesVirtual.ServicesVirtual} />
                <We data={dataWe.We} />
                <Benefits data={daraBenefits.Benefits} />
                <Contact data={dataContact.Contact} />
            </Route>

            <Route exact path="/:titlex">
                <Navigation />
                <MoreConciliation data={dataServicesConsiliation.ServicesConciliation} />
                <Contact data={dataContact.Contact} />
            </Route>
            
            <Route exact path="/servicevirtual/:title">
                <Navigation />
                <DetailServiceVirtual data={dataServicesVirtual.ServicesVirtual} />
                <Contact data={dataContact.Contact} />
            </Route>
            
        </Switch>
    </Router>
  );
};

export default App;
