import { actionType } from "../containts/actionType";
export const setProdact = (prodact) => {
  return {
    type: actionType.SET_PRODACT,
    payload: prodact,
  };
};
export const selectProdact = (prodact) => {
  return {
    type: actionType.SELECTED_PRODACT,
    payload: prodact,
  };
};
export const removeProdact = (prodact) => {
  return {
    type: actionType.REMOVE_PRODACT,
    payload: prodact,
  };
};
