import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_USER_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const URL = `https://zara-vej9.onrender.com/gymproducts`;

export const getData = (payload) => (dispatch) => {
  // Write logic here
  console.log("getCard");
  dispatch({ type: PRODUCT_REQUEST });
  console.log("getRww");
  axios
    .get(URL, {
      params: payload,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      console.log("err");
      dispatch({ type: PRODUCT_FAILURE });
    });
};

const USER = `http://localhost:8080/users`;

export const getUsers = (payload) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  console.log(payload);
  return axios
    .get(USER, {
      params: payload,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(() => {
      console.log("err");
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:8080/users/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ tpye: DELETE_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getSingleData = (payload) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get(`https://zara-vej9.onrender.com/gymproducts/${payload}`)
    .then((res) => {
      // console.log(res.data)
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
