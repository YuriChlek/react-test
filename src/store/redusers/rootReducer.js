import {combineReducers} from "redux";
import popupReducer from "./popupReduser";

export default combineReducers({
    popup: popupReducer
})
