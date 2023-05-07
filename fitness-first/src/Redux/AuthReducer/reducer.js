import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"




const initialState={
        isLoading: false,
        isError: false,
        isAuth: false,
        token: "",
        user:"",
        email:"",
        password:'',
        first_name:'',
        last_name: '',
        charge:'',
        category:'',
        id:""
      }
      export const reducer= (state=initialState, {type, payload})=>{
        switch(type){
            case LOGIN_REQUEST: return { ...state, isLoading:true}
            case LOGIN_SUCCESS: return {...state, password: payload.password, isLoading:false, email:payload.email, first_name:payload.first_name,
              last_name: payload.first_name,
              charge:payload.charge,category:payload.category,id:payload.email, isAuth:true}
            case "REGISTER": return {...state, password: payload.password, isLoading:false, email:payload.email, first_name:payload.first_name,
            last_name: payload.first_name,
            id:payload.email,
            isAuth:false,
            charge:payload.charge,category:payload.category}
            case LOGIN_FAILURE: return {...state, isLoading: false, isError:true}
            default: return state
        }

      }

