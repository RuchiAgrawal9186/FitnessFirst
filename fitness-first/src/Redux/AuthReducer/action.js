import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from "./actionTypes";

const USER = `http://localhost:8080/users`;
export const userRegister = (payload) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: REGISTER_SUCCESS });

  return axios
    .post(USER, payload)
    .then((res) => {
      console.log("postscc");
      dispatch({ type: LOGIN_SUCCESS, payload: payload });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const login = (payload) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(USER)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
