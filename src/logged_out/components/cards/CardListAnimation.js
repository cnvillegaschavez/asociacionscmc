import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardAnimation from '../cards/CardAnimation';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary.main,
        marginTop: "30px"
    },
    title: {
        marginTop: "100px",
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textAlign: "center"
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
}));


const CardListAnimation = (props) => {
    const { data } = props;
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container>
                    {
                        data.map((element, index) => (
                            
                                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                    <CardAnimation
                                        title={element.title}
                                        img={element.img}
                                        descriptionPrimary={element.descriptionPrimary}
                                        descriptionSecondary={element.descriptionSecondary}
                                        price={element.price}
                                        list={element.list}
                                        more={element.more}
                                    />
                                </Grid>
                           

                        ))
                    }
                </Grid>
            </div>
        </Fragment>
    )
}

export default CardListAnimation
