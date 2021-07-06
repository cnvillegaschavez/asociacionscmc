import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, withWidth, withStyles, isWidthUp, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import VisibilityIcon from '@material-ui/icons/Visibility';

import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const styles = theme => ({
    root: {
        maxWidth: 900,
        margin: 'auto'
      },
      media: {
        height: 500,
        width: '100%'
      },
      rootGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: 20,
        
      },
      gridList: {
        width: '100%',
        height: 200,
        transform: 'translateZ(0)',
        [theme.breakpoints.up("xs")]: {
          height: 500,
        },
        [theme.breakpoints.up("sm")]: {
          height: 500,
        },
        [theme.breakpoints.up("md")]: {
          height: 650,
        },
        [theme.breakpoints.up("lg")]: {
          height: 200,
        }
      },
      rootCard: {
        maxWidth: '100%',
        marginLeft: 15,
         [theme.breakpoints.up("xs")]: {
            marginLeft: 0,
          },
          [theme.breakpoints.up("sm")]: {
            marginLeft: 0,
          },
          [theme.breakpoints.up("md")]: {
            marginLeft: 15,
          },
          [theme.breakpoints.up("lg")]: {
            marginLeft: 15,
          }
      }
});


const tileData = [
    {
      title: 'Misión',
      description: 'Brindar soluciones tecnológicas a nuestros clientes con el fin de contribuir en su crecimiento, haciendo uso adecuado de la tecnología de acuerdo a su necesidad.',
      cols: 2,
      featured: true,
      icon: <HomeWorkIcon/>
    },
    {
        title: 'Visión',
        description: 'Ser el mejor referente tecnológico en Perú, con aplicaciones tecnológicas de último avance, apoyados en la calidad de nuestros productos, servicios y nuestros valores empresariales.',
        icon: <VisibilityIcon/>
    }
  ];

const Company = (props) => {
  
  
  
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

    
    useEffect(() => {
      smoothScrollTop();
    }, []);

    return (
      
      <div className="container-fluid lg-p-top">
          <Box display="flex" justifyContent="center" className="row">
            <Typography variant="h3" align="center" className="lg-mg-bottom">
            ¿Quiénes somos?
            </Typography>
            <div className="container-fluid">  

                 
            
                <div className={classes.rootGrid}>
                    <GridList cellHeight={180} cols={cols} spacing={1} className={classes.gridList}>
                        {tileData.map((tile) => (
                        <GridListTile key={tile.title}>                        
                        
                            <Card className={classes.rootCard}>
                                    <CardHeader
                                        avatar={tile.icon}
                                        title={tile.title}
                                        
                                    />
                                    <CardContent>
                                        {tile.description}
                                    </CardContent>
                            </Card>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </Box>
      
    </div> );
}

Company.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Company));
