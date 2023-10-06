import { createContext, useState } from "react";

// context
const CartContext = createContext({
  cartList: [],
  setCartList: () => {},
});

// provider component
export function CartContextProvider(props) {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
