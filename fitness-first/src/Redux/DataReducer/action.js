import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const URL =`https://zara-vej9.onrender.com/gymproducts`

export const getData = (payload) =>(dispatch) => {
  // Write logic here
  console.log('getCard')
  dispatch({type: PRODUCT_REQUEST})
  console.log('getRww')
  axios.get(URL, {
    params:payload
  }).then((res)=>{
    console.log(res.data)
    dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
  }).catch(()=>{
    console.log("err")
    dispatch({type:PRODUCT_FAILURE})
  })

};


export const getSingleData =(payload)=> (dispatch) =>{
  dispatch({type: PRODUCT_REQUEST})

  axios.get(`https://zara-vej9.onrender.com/gymproducts/${payload}`).then((res)=>{
    // console.log(res.data)
    dispatch({ type: GET_PRODUCT_SUCCESS , payload: res.data })
  }).catch(err=>{
    dispatch({ type: PRODUCT_FAILURE })
  })
}

