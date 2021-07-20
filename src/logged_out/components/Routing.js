import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import ServicesInfo from "./servicesConciliation/ServicesInfo";
import MediacionOnline from "./servicesConciliation/MediacionOnline";
import AbogadoVirtual from "./servicesConciliation/AbogadoVirtual";
import ArbitrajeVirtual from "./servicesConciliation/ArbitrajeVirtual";
import MesaPartesVirtual from "./servicesConciliation/MesaPartesVirtual";

function Routing(props) {
  const { selectCompany, selectHome, selectServicesInfo } = props;

  return (
    <Switch>
      <PropsRoute
        exact
        path="/servicesinfo"
        component={ServicesInfo}
        selectServicesInfo={selectServicesInfo}
      />
      <PropsRoute
        exact
        path="/mediaciononline"
        component={MediacionOnline}
      />
     <PropsRoute
        exact
        path="/abogadovirtual"
        component={AbogadoVirtual}
      />
      <PropsRoute
        exact
        path="/arbitrajevirtual"
        component={ArbitrajeVirtual}
      />
      <PropsRoute
        exact
        path="/mesadepartesvirtual"
        component={MesaPartesVirtual}
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
