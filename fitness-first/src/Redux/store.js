import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as DataReducer } from "./DataReducer/reducer";
import thunk from "redux-thunk"
const rootReducer = combineReducers({
  AuthReducer,
  DataReducer
});

export const store = legacy_createStore(rootReducer, 
  applyMiddleware(thunk)
  );


