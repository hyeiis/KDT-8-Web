import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const carts = useSelector((state) => state);
  const totalPrice = carts.reduce(
    (acc, val) => acc + val.quantity * val.price,
    0,
  );

  return (
    <div>
      <h2>--- 장바구니 ---</h2>

      {/* map에서 return과 컴포넌트의 return이 헷갈리면 {}와 return 없애고 사용하면 된다 */}
      {carts.map((value) => (
        <CartItem key={value.id} value={value} />
      ))}
      <br />
      <>-------------------------------</>
      <div>장바구니 총 합: {totalPrice}원</div>
    </div>
  );
}
