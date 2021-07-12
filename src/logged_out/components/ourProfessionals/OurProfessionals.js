import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import TableChartIcon from '@material-ui/icons/TableChart';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import nuestrosProfesionales from '../../../images/nuestrosProfesionales.jpg';



const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "100%"
    },
    paper: {
        margin: theme.spacing(3, 4),
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontWeight: "bold"
    },
    subtitle: {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        // textAlign: "center"
    },
    paragraph: {
        color: "#7C99C1",
        marginTop: "20px",
        textAlign: "justify",
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        // marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
    item: {
        padding: "2%",
    },
    avatar: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    }
}));

export default function OurProfessionals() {
    const classes = useStyles();
    const infoValues = [
        {
            title: "Arbitraje",
            icon: <TableChartIcon />,
            description: "Contamos con los mejores profesionales del servicio Arbitraje para trabajar con usted."
        },
        {
            title: "Conciliación Extrajudicial",
            icon: <SwapVertIcon />,
            description: "Contamos con los mejores profesionales del servicio Conciliación Extrajudicial para trabajar con usted."
        }
    ];

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <div className={classes.paper}>
                    <Typography variant="h3" color="primary" className={classes.title}>Nuestros Profesionales</Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle1" color="initial" className={classes.paragraph}>Los miembros del centro de conciliación extrajudicial Ex Lege provienen del mundo empresarial, público y académico, con lo cual la unidad de arbitraje y conciliacion extrajudicial busca contar con enfoques que comprenden las necesidades y realidades de todos los usuarios.</Typography>

                    <List>
                        <Grid container>
                            {
                                infoValues.map((element, index) => (
                                    <Grid item xs={6} className={classes.item}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar className={classes.avatar}>
                                                    {element.icon}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Typography variant="body1" className={classes.subtitle}>{element.title}</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <Typography variant="body1" className={classes.paragraph}>{element.description}</Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </List>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <img src={nuestrosProfesionales} className={classes.image} />
            </Grid>
        </Grid>
    );
}
