import React, { Fragment } from 'react';
import MyCard from './MyCard';
import { Grid } from '@material-ui/core';

const ListCard = (props) => {
    const {data, url} = props;

    return (
        <Fragment>
            <Grid container spacing={24} justify="center">
            {
                data.map((element, index) => {
                    return <MyCard img={element.img} title={element.title} description={element.description} url={url}/>
                })
            }
            </Grid>
            
        </Fragment>
    )
}

export default ListCard;
