import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

export default function CardAnimation(props) {
    const { img, title, descriptionPrimary, descriptionSecondary, list, more } = props;
    const history = useHistory();
    const values = {
        title: title,
        descriptionPrimary: descriptionPrimary,
        descriptionSecondary: descriptionSecondary,
        list: list,
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
                    <img src={img} alt="no hay imagen"/>
                    <div className="description">
                        <h2>{title}</h2>
                        <Button className="mi-link" style={{ color: "#fff" }} size="small" onClick={onServicesInfo}>
                            Más información
                        </Button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}