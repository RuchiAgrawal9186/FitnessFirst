import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as dataReducer } from "./DataReducer/reducer";

const rootReducer = combineReducers({
  authReducer,
  dataReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


