import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import ServiceLandingPage from "ServiceLandingPage.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route>
        <Route path="/main">
          <ServiceLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}