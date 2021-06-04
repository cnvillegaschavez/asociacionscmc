import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from 'react-router-dom';
import Prueba from './Prueba';

const useStyles = makeStyles((theme) => ({
    item: {
        width: "250px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media: {
        height: "200px",
    },
    paper: {
        padding: theme.spacing(4),
    },
    button: {   
          fontWeight: 'bold',
    //    color: "#ODC143"
    },
    title: {    
        fontWeight: 'bold',
        fontSize: '22px',
        marginBottom: '20px'
    },
    content: {
        fontSize: '15px',
    }
}));


const MyCard2 = (props) => {
    const {img, title, content} = props; 
    const classes = useStyles();
    const phone = "+51962212903";
    const message = "NOTEBOOK%20LENOVO%20THINKPAD%20L14%2014.0%22%20LCD%20HD%2C%20CORE%20I5-10310U%201.7%20%2F%204.4%20GHZ%20VPRO%2C%2016GB%20DDR4%2C%20con%20precio%20de%20S%2F.%205400";
    const message2 = `Hola, quisiera consultar acerca del servicio de ${title}`
    
    return (
        <Card className={classes.item}>
            <CardActionArea>
                
                <CardMedia image={img} className={classes.media} title="Contemplative Reptile"/>

                <CardContent>
                    <Typography className={classes.title} align="center">
                        {title}
                     </Typography>
                     <Typography className={classes.content} align="center">
                        Precio: {content}
                     </Typography>
                </CardContent>

            </CardActionArea>
            <Box border={0}>
                <CardActions className={classes.paper} >
                    <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message2}`}>
                        <Button color="primary" variant="contained" endIcon={<WhatsAppIcon/>} className={classes.button}>
                            Contactar
                        </Button>
                    </a>
                </CardActions>
            </Box>
        </Card>
    );
}


export default MyCard2;
