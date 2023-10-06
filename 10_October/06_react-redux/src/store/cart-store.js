import { createStore } from "redux";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

//reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CART:
      const carts = { id: action.id, label: action.label, price: action.price };
      return [...state, carts];
    case REMOVE_CART:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

export default store;
