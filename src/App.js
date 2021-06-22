import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import ServiceLandingPage from "ServiceLandingPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>        
        <Route exact path="/">
          <ServiceLandingPage />
        </Route>

        {/* <Route exact path="/:title">

        </Route> */}
        
      </Switch>
    </Router>
  );
}