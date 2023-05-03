import axios from "axios";
// const axios = require('axios');


const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
 
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY
  },
  // params:payload
};
export const getdata = async ()=> {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
  } catch (error) {
    console.error(error);
    dispatch({type:PRODUCT_FAILURE})
  }
}



import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const URL =`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`

export const getCards = (payload) => async(dispatch) => {
  // Write logic here

  dispatch({type: PRODUCT_REQUEST})

  axios.get(URL, {
    params:payload
  }).then((res)=>{
    console.log(res.data)
    dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
  }).catch(()=>{
    dispatch({type:PRODUCT_FAILURE})
  })

};

export const editCard =(data)=> (dispatch) => {
  // Write logic here
 
};




