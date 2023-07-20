
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_USER_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PATCH_PRODUCT_SUCCESS
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  users: [],
  total: 0,
};
export const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isError: false, isLoading: false, products: payload };
    case PRODUCT_FAILURE:
      return { ...state, isError: false };
    case "TOTAL":
      return { ...state, total: payload };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, products: payload };
    case GET_USER_SUCCESS:
      return { ...state, isError: false, isLoading: false, users: payload };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case PATCH_PRODUCT_SUCCESS:
      return {...state, isLoading:false, isError: false, total: state.total+payload }  
    default:
      return state;
  }
};

