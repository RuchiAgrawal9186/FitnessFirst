import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const URL =`http://localhost:8080/products`

export const getData = (payload) =>(dispatch) => {
  // Write logic here
  console.log('getCard')
  dispatch({type: PRODUCT_REQUEST})
  console.log('getRww')
  axios.get(URL, {
    params:""
  }).then((res)=>{
    console.log(res.data)
    dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
  }).catch(()=>{
    console.log("err")
    dispatch({type:PRODUCT_FAILURE})
  })

};

export const editCard =(data)=> (dispatch) => {
  // Write logic here
 
};

