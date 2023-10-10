import { useDispatch } from "react-redux";
import { REMOVE_CART } from "../store/cart-store";

export default function CartItem({ value }) {
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch({ type: REMOVE_CART, id });
  };

  return (
    <div className="item" key={value.id}>
      <h3>{value.label}</h3>
      <div>
        가격: {value.price * value.quantity}원 ({value.quantity} 개)
      </div>
      <button onClick={() => removeCart(value.id)}>장바구니에서 제거</button>
    </div>
  );
}
