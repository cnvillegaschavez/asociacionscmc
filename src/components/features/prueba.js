import React, { Fragment, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {dataInitial} from './ServiceCenterConciliation.js';
import ListCard2 from "./ListCard2";
import { makeStyles, Typography } from '@material-ui/core';
import Hero from "../hero/TwoColumnWithFeaturesAndTestimonialOnlyNavLinkst.js";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import Footer from "../footers/FiveColumnWithInputForm.js";


const useStyle = makeStyles({
    title: {    
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '50px',
        marginBottom: '20px'
    },
})

const Prueba = () => {
    const classes = useStyle();
    const {title} = useParams();
    const [more, setMore] = useState([]);

    useEffect(()=>{
        dataInitial.map(element => {
            if(element.title==title){
                setMore(element.more);
                console.log(element.more); 
            }
        });
    },[]);

    return (
        <Fragment>
            <AnimationRevealPage>
                <Hero/>
                <Typography className={classes.title} align="center">
                    {title}
                </Typography>
                <ListCard2 data={more}/>
                <Footer/>
            </AnimationRevealPage>
        </Fragment>
    )
}

export default Prueba;
