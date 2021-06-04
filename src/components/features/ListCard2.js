import React, { Fragment } from 'react';
import MyCard2 from './MyCard2';
import { Grid } from '@material-ui/core';

const ListCard = (props) => {
    const {data, url} = props;

    return (
        <Fragment>
            <Grid container spacing={24} justify="center">
            {
                data.map((element, index) => {
                    return <MyCard2 img={element.img} title={element.title} content={element.content}/>
                })
            }
            </Grid>
            
        </Fragment>
    )
}

export default ListCard;
