import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        //position: "relative"
    },
    font: {
        //position: "absolute",
        top: "20%",
        textAlign: "center",
        fontFamily: "Comic Sans MS",
        color: "#ffffff",
        fontSize: "1rem",
        backgroundColor: theme.palette.primary.main,
        witdh: "100%",
        height: "100%",
    },

    image: {
        position: "relative",
        width: "400px"
    },
    image_img: {
        display: "block",
        width: "100%"
    },
    image_overlay: {
        position: "absolute",
        top: "0",
        left: "0",
        witdh: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        color: "#ffffff",
        fontFamily: "Comic Sans MS",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }

}));

const ServicesConciliation = (props) => {
    const { img, title } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="Cargando imagen"
                height="200"
                image={img}
                title={title}
            />
            <div tyle={{wordWrap: 'break-word'}}>
                <Typography
                    gutterBottom
                    variant="h1"
                    component="h1"
                    className={classes.font}
                >
                    {title}
                </Typography>
            </div>
        </Card>


        // <div className={classes.image}>
        //     <img className={classes.image_img} src={img} alt="no hay imagen"/>
        //     <div className={classes.image_overlay}>
        //         <div class={classes.image_title}>{title}</div>

        //     </div>
        // </div>
    );
}

export default ServicesConciliation;
