import { combineReducers } from "redux"
import itemReducer from "./itemReducer"
import auth from "./auth"

export default combineReducers({
  item: itemReducer,
  auth
})