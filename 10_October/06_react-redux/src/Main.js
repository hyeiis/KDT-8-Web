import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/todoStore";

export default function Main() {
  const [text, setText] = useState("");
  // useSelector(): redux store의 state 조회
  // 인자로 콜백 함수를 받고, 콜백함수의 매개변수로 state를 받을 수 있음
  // 자동으로 subscribe() 기능을 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행 됨
  const todos = useSelector((state) => state);

  // dispatch는 우리가 호출할 수 있는 함수
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText("");
  };

  const delTodo = (id) => {
    dispatch({ type: DELETE_TODO, id });
  };

  return (
    <>
      <h1>TODOs</h1>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder={"Write to do"}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={() => delTodo(todo.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </>
  );
}
