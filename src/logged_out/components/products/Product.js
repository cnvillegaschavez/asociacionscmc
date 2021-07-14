import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, withWidth, withStyles, isWidthUp, Typography } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import PricingSection from './PricingSection';
import ShareButton from "../../../shared/components/ShareButton";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const styles = theme => ({
  productContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    maxWidth: 1280,
    width: "100%"
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 650,
    transform: 'translateZ(0)',
    [theme.breakpoints.up("xs")]: {
      height: 1300,
    },
    [theme.breakpoints.up("sm")]: {
      height: 1300,
    },
    [theme.breakpoints.up("md")]: {
      height: 650,
    },
    [theme.breakpoints.up("lg")]: {
      height: 650,
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image: {
    width: '100%'
  },
  shared: { marginTop: 20, marginLeft: '20%',
  [theme.breakpoints.up("xs")]: {
     marginLeft: '5%'
  },
  [theme.breakpoints.up("sm")]: {
     marginLeft: '5%'
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: '20%'
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: '20%'
  }
}
});

const tileData = [
    {
        img:"",
        title: "hello",
        author: "saksaa",
        url: "miurl",
    }
];

const Product = (props) => {
  
  useEffect(() => {
    smoothScrollTop();
  }, []);

  
    const { classes, width } = props;
    let cols = 2;
    
    if (isWidthUp("xs", width)) {
      cols = 1;
    }
    
    if (isWidthUp("sm", width)) {
      cols = 1;
    }

    if (isWidthUp("md", width)) {
      cols = 2;
    }
    
    if (isWidthUp("lg", width)) {
      cols = 2;
    }

    
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Adquiere uno de nuestros productos
        </Typography>
        <div className="container-fluid">
            <div className={classes.root}>
              <GridList cellHeight={300} cols={cols} spacing={1} className={classes.gridList}>
                {tileData.map((tile) => (
                   <GridListTile key={tile.img}>
                   <img src={tile.img} alt={tile.title} className={classes.image} />
                   <GridListTileBar
                     title={tile.title}
                     subtitle={<span>Por: {tile.author}</span>}
                     actionIcon={
                       <IconButton href={tile.url} aria-label={`info about ${tile.title}`} className={classes.icon}>
                         <InfoIcon />
                       </IconButton>
                     }
                   />
                 </GridListTile>
                ))}
              </GridList>
            </div>

          <PricingSection/>

          <Grid spacing={1}  container className={classes.shared}>
            {["Facebook", "Twitter", "Reddit", "Tumblr"].map(
              (type, index) => (
                <Grid item key={index}>
                  <ShareButton
                    type={type}
                    title="Productos de RUWAYTECH"
                    description="Productos de RUWAYTECH, puedes adquirir de acuerdo a las necesidades de tu negocio!"
                    disableElevation
                    variant="contained"
                    className="text-white"
                    classes={{
                      label: "text-white"
                    }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
    </div> );
  
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Product));
