import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const URL =`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`

export const getCards = (payload) =>(dispatch) => {
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

