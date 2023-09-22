import { useState } from "react";

export default function TodoFunc() {
  const [todo, setTodo] = useState(""); // 입력 값
  const [list, setList] = useState([]); // 할 일 목록

  const handleAdd = () => {
    if (list.length >= 10) {
      alert("할 일이 너무 많아요!");
    }
    if (todo !== "") {
      const newTodo = {
        id: Date.now(),
        todo,
        checked: false,
      };
      setList([...list, newTodo]);
      setTodo("");
    }
  };

  const toggleTodo = (id) => {
    setList(
      list.map((todo) => {
        console.log(todo);
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      }),
    );
  };

  const handleDeleteChecked = () => {
    setList(list.filter((todo) => todo.checked === false));
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="할 일 입력..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        &nbsp;
        <button type="button" onClick={handleAdd}>
          추가
        </button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {list.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                name="todoList"
                checked={todo.checked}
                onChange={() => {
                  toggleTodo(todo.id);
                }}
              />
              <label htmlFor={todo}>
                <b>{todo.todo}</b>
              </label>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleDeleteChecked}>
        완료된 할 일 삭제
      </button>
    </>
  );
}
