import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counter";

export default function Counter() {
  const number = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const plus = () => {
    dispatch(counterAction.puls({ ten: 10, twenty: 20 }));
  };

  return (
    <>
      <h2>Counter: {number}</h2>
      <button onClick={add}>ADD</button>
      &nbsp;
      <button onClick={minus}>MINUS</button>
      &nbsp;
      <button onClick={plus}>+</button>
    </>
  );
}
