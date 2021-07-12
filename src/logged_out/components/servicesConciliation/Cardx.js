import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "100%",
        // width: "100%",
    },
}));

export default function Cardx(props) {
    const {img, title} = props;
    const classes = useStyles();

    return (
        <Fragment>
            <div id="cardAnimation" >
                <div className="ui-card">
                    <img src={img}/>
                    <div className="description">
                        <h2>{title}</h2>
                        <a href="#" className="title">Read More</a>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}