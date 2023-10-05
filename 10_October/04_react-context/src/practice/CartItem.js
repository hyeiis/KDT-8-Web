import { useContext } from "react";
import CartContext from "../store/cart-context";

export default function CartItem({ value }) {
  const { cartList, setCartList } = useContext(CartContext);

  // filter를 사용하여 새로운 배열 반환
  const removeCart = (id) => {
    setCartList(cartList.filter((element) => element.id !== id));
  };

  return (
    <div className="item" key={value.id}>
      <h3>{value.label}</h3>
      <div>가격: {value.price}원</div>
      <button onClick={() => removeCart(value.id)}>장바구니에서 제거</button>
    </div>
  );
}
