import React, { Fragment } from 'react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#fff",
        padding: "0",
    }
}));

export default function CardAnimation(props) {
    const { img, title, description, more } = props;
    const history = useHistory();
    const classes = useStyles();
    const values = {
        img: img,
        title: title,
        description: description,
        more: more,
        img: img
    }

    const onServicesInfo = (event) => {
        event.preventDefault();
        history.push({
            pathname: '/servicesinfo',
            state: values,
        });
    }

    return (
        <Fragment>
            <div id="cardAnimation" >
                <div className="ui-card">
                    <img src={img} />
                    <div className="description">
                        <h2>{title}</h2>
                        {/* <Link to='/servicesinfo' className="mi-link">
                            <Button className={classes.button} size="small">
                                Más información
                            </Button>
                        </Link> */}
                        <Button className="mi-link" style={{ color: "#fff" }} size="small" onClick={onServicesInfo}>
                            Más información
                        </Button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}