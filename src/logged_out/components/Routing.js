import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Company from "./company/Company";
import Product from "./products/Product";

function Routing(props) {
  const { selectCompany, selectHome } = props;

  return (
    <Switch>
      <PropsRoute
        exact
        path="/company"
        component={Company}
        selectBlog={selectCompany}
      />
      <PropsRoute
        exact
        path="/products"
        component={Product}
      />
      <PropsRoute
        exact
        path="/googlemaps"
        component={Product}
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
