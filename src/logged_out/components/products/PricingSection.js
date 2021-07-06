import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import PriceCard from "./PriceCard";
import calculateSpacing from "../home/calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  },
  divButton: {
    textAlign: 'center'
  }
});

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
      Facturación Electrónica
      <span></span>
      </Typography>
      <Typography variant="h6" align="center">
        Planes del servicio de Facturación Electrónica 
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Economic"
              pricing={
                <span>
                  S/ 70
                  <Typography display="inline"> / Mensual</Typography>
                </span>
              }
              features={["Personalizable, colores y logotipo.", "Soporte para un local.", "Diseños adaptativos"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Profesional"
              pricing={
                <span>
                 S/ 80
                  <Typography display="inline"> / Mensual</Typography>
                </span>
              }
              features={["Incluye módulo Economic", "Soporte tres locales", "Soporte online"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Premium"
              pricing={
                <span>
                  S/ 100
                  <Typography display="inline"> / Mensual</Typography>
                </span>
              }
              features={["Incluye módulo Profesional", "Usuarios y locales múltiples.", "Soporte 24/7"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Gold"
              pricing={
                <span>   
                  S/
                  <Typography display="inline"> / Mensual</Typography>
                </span>
              }
              features={["Comunicate para mas información", "El costo es negociable, evaluando su necesidad."]}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.divButton}>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Información</Typography>
                <p><b>{'Usuario'}</b> <u>{'ventas@ruwaytech.com'}</u></p>
                <p><b>{'Password'}</b> <u>{'ventas123'}</u></p>
              </React.Fragment>
            }
          >

          <Button
              variant="contained"
              color="primary"
              href={`https://ruwaytech.pse.pe/`}
              startIcon={<VisibilityIcon/>}
            >
              Ver Demo
          </Button>
        </HtmlTooltip>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
