import { createStore } from "redux";

//* 순수 JS를 이용한 counter
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");
// let count = 0;
// number.textContent = count;

// add.addEventListener("click", () => {
//   count = count + 1;
//   number.textContent = count;
// });
// minus.addEventListener("click", () => {
//   count = count - 1;
//   number.textContent = count;
// });

//* Redux를 이용한 counter
// const ADD = "ADD";
// const MINUS = "MINUS";
// // reducer: 데이터 수정해주는 함수
// const reducer = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// // createStore: store 생성 (store: 데이터 넣는 곳), reducer 함수 필수
// const countStore = createStore(reducer);

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });
// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

// // getState()는 createStore로 생성된 저장소에서 사용되는 메소드
// // 최신 상태의 값 반환
// const onChange = () => {
//   number.textContent = countStore.getState();
// };
// // subscribe는 함수를 사용하며 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(onChange);

//** 실습  **//
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const delTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
const todoStore = createStore(todoReducer);

const paintTodos = () => {
  const todos = todoStore.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.appendChild(btn);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

todoStore.subscribe(paintTodos);

const dispatchAddToDo = (text) => {
  todoStore.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(delTodo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddToDo(todo);
};

form.addEventListener("submit", onSubmit);
