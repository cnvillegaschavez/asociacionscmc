import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import ServiceLandingPage from "ServiceLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
import Prueba from './components/features/Prueba';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/thank-you">
          <ThankYouPage />
        </Route>
        <Route exact path="/">
          <ServiceLandingPage />
        </Route>
        <Route exact path="/prueba/:title">
          <Prueba />
        </Route>
      </Switch>
    </Router>
  );
}