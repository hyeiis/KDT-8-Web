import { useContext } from "react";
import "./scss/productList.scss";
import CartContext from "../store/cart-context";

export default function ProductList() {
  const products = [
    {
      id: 1,
      label: "상품 1",
      price: 10000,
    },
    {
      id: 2,
      label: "상품 2",
      price: 20000,
    },
    {
      id: 3,
      label: "상품 3",
      price: 30000,
    },
    {
      id: 4,
      label: "상품 4",
      price: 40000,
    },
  ];

  // const item = useContext(CartContext);
  const { cartList, setCartList } = useContext(CartContext); // 구조 분해 할당

  const addCart = (product) => {
    setCartList([...cartList, product]);
  };

  return (
    <>
      <h2>--- 상품 목록 ---</h2>
      {products.map((value) => {
        return (
          <div className="item" key={value.id}>
            <h3>{value.label}</h3>
            <div>가격: {value.price}원</div>
            <button onClick={() => addCart(value)}>장바구니에 추가</button>
          </div>
        );
      })}
    </>
  );
}
