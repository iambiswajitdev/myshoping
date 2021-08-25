import { combineReducers } from "redux";
import {
  rootReduser,
  seletProdatReduser,
  removeProdatReduser,
} from "./rootReduser";
const reduser = combineReducers({
  allProdact: rootReduser,
  prodact: seletProdatReduser,
  cart: removeProdatReduser,
});
export default reduser;
