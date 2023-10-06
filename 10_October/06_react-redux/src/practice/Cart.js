import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartList } = useContext(CartContext);
  // reduce: 배열의 모든 요소를 더할 때 사용. 하나의 결과 반환
  const totalPrice = cartList.reduce((acc, val) => acc + val.price, 0);

  return (
    <div>
      <h2>--- 장바구니 ---</h2>

      {/* map에서 return과 컴포넌트의 return이 헷갈리면 {}와 return 없애고 사용하면 된다 */}
      {cartList.map((value) => (
        <CartItem key={value.id} value={value} />
      ))}
      <br />
      <>-------------------------------</>
      <div>장바구니 총 합: {totalPrice}원</div>
    </div>
  );
}
