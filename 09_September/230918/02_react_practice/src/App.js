import "./App.css";

function App() {
  // 실습 1 jsx
  const flag = true;
  let calc = "3 + 5 == 8";
  if (flag) calc = "정답입니다";
  else calc = "오답입니다";

  // 실습 2 jsx
  let name = "로이";
  let animal = "강아지";

  // 실습 3 jsx
  let title = "Hello Hi";

  // 실습. map, filter
  const user = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charile", age: 35, vip: true },
  ];

  const vipUsers = user.filter((user) => user.vip);
  vipUsers.map((user) => {
    if (user.id) {
      console.log(user.name);
    }
  });

  return (
    <>
      <h3>실습 1</h3>
      <div>
        이것은 div입니다<h3>이것은 div 안에 있는 h3 태그입니다</h3>
        {calc ? <p>정답입니다</p> : <p>오답입니다</p>}
      </div>
      <h3>실습 2</h3>
      <h2>
        제 반려동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <h2>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <h3>실습 3</h3>
      <div className="test">{title}</div>
      <div className="input">
        아이디 : &nbsp;
        <input type="text" />
      </div>
      <div className="input">
        비밀번호 : &nbsp; <input type="password" />
      </div>
      <h3>실습 4</h3>
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
      {/* 실습 map, filter */}
      {vipUsers.map((user) => (
        <div key={user.id}> {user.name}</div>
      ))}
    </>
  );
}

export default App;
