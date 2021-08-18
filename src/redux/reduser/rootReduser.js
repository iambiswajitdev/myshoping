import { actionType } from "../containts/actionType";

const initilState = {
  prodact: [],
};
export const rootReduser = (state = initilState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODACT:
      return { ...state, prodact: payload };
    default:
      return state;
  }
};

export const seletProdatReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case actionType.SELECTED_PRODACT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
