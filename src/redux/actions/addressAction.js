import axios from 'axios';
import { getAddressByUserId } from '../../api/addressApi';

// types
export const GET_LIST_ADDRESS = 'GET_LIST_ADDRESS';
export const ADD_CURRENT_ADDRESS = 'ADD_ADDRESS';

//actions
export const getListAddressActionRedux = (id, token) => async (dispatch, getState) =>{
    try{
        getAddressByUserId(id, token).then(r=>{
            dispatch({ 
                type: GET_LIST_ADDRESS,
                payload: r.data.data, 
            });
            console.log("OK GET_LIST_ADDRESS");
        }).catch(e=>{
            console.log("error: 1");
        });        
    }catch(error){
        console.log("erro: 2");
    }
}

export const addCurrentAddressActionRedux = (address) => async (dispatch, getState) =>{
    try{
        dispatch({ 
            type: ADD_CURRENT_ADDRESS,
            payload: address, 
        });
        console.log("OK ADD_CURRENT_ADDRESS")
    }catch(error){
        console.log("erro: 2");
    }
}


