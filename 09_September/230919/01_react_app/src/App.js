import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

function App() {
  return (
    <>
      <h1>Component</h1>
      {/* <ClassComponent />
      <FunctionComponent /> */}

      {/* props */}
      <ClassComponent name="hi" />
      <ClassComponent />
      <hr />
      <FunctionComponent name="길순이" age={12}>
        H.E.L.L.O {/* 사이에 들어간 내용은 props.children */}
      </FunctionComponent>
      <FunctionComponent />
    </>
  );
}

export default App;
