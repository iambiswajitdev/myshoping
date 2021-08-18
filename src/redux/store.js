import { createStore } from "redux";
import reduser from "./reduser/index";

const store = createStore(
  reduser,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
