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


const MyCard = (props) => {
    const {img, title, description, url} = props; 
    const classes = useStyles();

    return (
        <Card className={classes.item}>
            <CardActionArea>
                
                <CardMedia image={img} className={classes.media} title="Contemplative Reptile"/>

                <CardContent>
                    <Typography className={classes.title} align="center">
                        {title}
                     </Typography>
                     <Typography className={classes.content} align="justify">
                        {description}
                     </Typography>
                </CardContent>

            </CardActionArea>
            <Box border={0} align="center">
                <CardActions className={classes.paper} >
                    {/* <Link to={`${url}/${title}`}> */}
                        <Button color="primary" variant="contained" endIcon={<WhatsAppIcon/>} className={classes.button}>
                            Contactar
                        </Button>
                    {/* </Link> */}
                </CardActions>
            </Box>
        </Card>
    );
}


export default MyCard;
