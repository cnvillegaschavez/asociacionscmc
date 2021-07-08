import React, { Fragment } from 'react';

export default function Cardx(props) {
    const {img, title} = props;

    return (
        <Fragment>
            <div id="cardAnimation">
                <div className="ui-card">
                    <img src={img} />
                    <div className="description">
                        <h2>{title}</h2>
                        <a href="#" className="title">Read More</a>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}