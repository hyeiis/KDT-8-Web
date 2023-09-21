import { useState } from "react";

export default function TodoFunc() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, todo]);
    setTodo("");
  };

  const handleDeleteChecked = () => {
    if (list.checked) {
    }
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
        {list.map((value, index) => {
          if (list.length > 10) {
            // alert("할 일이 너무 많아요!");
          }
          return (
            <li>
              <input type="checkbox" name="todoList" />
              <label htmlFor={value}>
                <b>{value}</b>
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
