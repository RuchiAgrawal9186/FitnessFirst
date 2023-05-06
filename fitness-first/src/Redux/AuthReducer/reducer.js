import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"




const initialState={
        isLoading: false,
        isError: false,
        isAuth: false,
        token: "",
        user:"",
        email:"",
        password:''
      }
      export const reducer= (state=initialState, {type, payload})=>{
        switch(type){
            case LOGIN_REQUEST: return { ...state, isLoading:true}
            case LOGIN_SUCCESS: return {...state, isAuth:true}
            case "REGISTER": return {password: payload.password, isLoading:false, user:payload.user, email:payload.email, isAuth:false}
            case LOGIN_FAILURE: return {...state, isLoading: false, isError:true}
            default: return state
        }

      }

