import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";
import deviceTypesReducer from "./deviceTypeReducer";

export default combineReducers({
  deviceReducer,
  deviceTypesReducer,
});
