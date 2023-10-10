import { useDispatch } from "react-redux";
import { ADD_CART } from "../store/cart-store";
import { useState } from "react";

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

  const [cart, setCart] = useState([]);

  // dispatch는 우리가 호출할 수 있는 함수
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch({
      type: ADD_CART,
      product, //위의 products 배열의 객체 하나(product: product)
      // id: product.id,
      // label: product.label,
      // price: product.price,
    });
    setCart([...cart, product]);
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
