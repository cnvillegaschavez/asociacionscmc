import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#fff",
        padding: "0",
    },
    styleIconWhatsApps: {
        color: "#fff",
        background: "#0DC143",
        borderRadius: "6px",
    }
}));

export default function CardCustom(props) {
    const { img, title } = props;
    const classes = useStyles();
    const phone = "+51962212903";
    const message = `Hola, quisiera consultar acerca del servicio de `;

    return (
        <Fragment>
            <div id="cardAnimation" >
                <div className="ui-card">
                    <img src={img} alt="no hay imagen"/>
                    <div className="description">
                        <h2>{title}</h2>
                        <Button
                            variant="contained"
                            className="mi-link"
                            style={{ color: "#fff" }} size="small"
                            startIcon={<WhatsAppIcon className={classes.styleIconWhatsApps} style={{ fontSize: "25px" }} />}
                        >
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} "${title}"`} style={{ textDecoration: "none", color: "#fff", fontSize: "15px" }}>
                                Contactar
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}