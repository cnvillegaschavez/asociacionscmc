import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import DnsIcon from '@material-ui/icons/Dns';
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import CloudIcon from "@material-ui/icons/Cloud";
import TimelineIcon from '@material-ui/icons/Timeline';
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Desarrollo de Software",
    text:
      "Desarrollo de aplicaciones webs, móvil, aplicaciones relacionado con inteligencia artificial, chatbots.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#304FFE",
    headline: "Capacitación en tecnologías de Información",
    text:
      "Capacitación en diferentes tecnologías de información a orientadas personas y empresas que quieren reforzar su skill profesional.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "Automatización",
    text:
    "Elaboración de estrategias de automatización de procesos.",
    icon: <SettingsEthernetIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },   
  {
    color: "#DD2C00",
    headline: "Domótica",
    text:
      "Elaboración de proyecto de casas inteligentes.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "IA",
    text:
      "Implementación de proyectos relacionado con inteligencia artificial.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Asesoría en tecnologías de información",
    text:
      "Brindar asesoramiento en construcción e implementación de tecnologías de información a empresas privadas y públicas.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#6200EA",
    headline: "Gestión de proyectos de sistemas de información",
    text:
      "Elaboración de planes y documentación de proyectos de sistemas de información",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Marketing digital y publicidad",
    text:
      "Gestionar marketing digital, elaboración de publicidad y branding posicionar sitios webs, creación de estrategias para que los negocios impacten en las redes sociales.",
    icon: <TimelineIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Venta de Dominio y Hosting",
    text:
      "Venta de servicios de dominio y hosting para alojamiento de sitios webs.",
    icon: <DnsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Servicios
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
