import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Company from "./company/Company";
import Product from "./products/Product";
import ServicesInfo from "./servicesConciliation/ServicesInfo";

function Routing(props) {
  const { selectCompany, selectHome, selectServicesInfo } = props;

  return (
    <Switch>
      <PropsRoute
        exact
        path="/mediaciononline"
        component={ServicesInfo}
      />
      <PropsRoute
        exact
        path="/arbitrajevirtual"
        component={ServicesInfo}
      />
      <PropsRoute
        exact
        path="/abogadovirtual"
        component={ServicesInfo}
      />
      <PropsRoute
        exact
        path="/servicesinfo"
        component={ServicesInfo}
        selectServicesInfo={selectServicesInfo}
      />

      )
      <PropsRoute path="/" component={Home} selectHome={selectHome} />)

    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectCompany: PropTypes.func.isRequired
};

export default Routing;
