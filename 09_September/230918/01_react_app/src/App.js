import "./App.css";

function App() {
  // jsx 최상위 요소에 반드시 부모 요소 필요
  const flag = true;
  let txt = "";

  if (flag) txt = "true입니다";
  else txt = "false 입니다";

  const style = {
    backgroundColor: "red",
  };

  return (
    <>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React</h1>
      <div style={style}>리액트 시작</div>
      <input type="text" />
      {/* <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div> */}
      <div>{txt}</div>
    </>
  );
}

export default App;
