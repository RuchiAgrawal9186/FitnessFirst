import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (payload)=> (dispatch) => {
  // Complete login logic here
  dispatch({type:LOGIN_REQUEST})

  return axios.post('http://reqres.in/api/login',payload).then((res)=>{
    dispatch({type:LOGIN_SUCCESS, payload:res.data.token})
  }).catch((err)=>{
    dispatch({type:LOGIN_FAILURE})
  })

};

