import { combineReducers } from "redux";
import { rootReduser, seletProdatReduser } from "./rootReduser";
const reduser = combineReducers({
  allProdact: rootReduser,
  prodact: seletProdatReduser,
});
export default reduser;
