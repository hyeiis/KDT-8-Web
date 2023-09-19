import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Test from "./Test";
import Test2 from "./Test2";
import Worm from "./Worm";

function App() {
  return (
    <>
      {/* component */}
      {/* 실습 1 */}
      {/* <Worm /> */}

      {/* 실습 2 */}
      <Test />
      <Test2 />

      {/* props */}
      {/* 실습 1 */}
      <ClassComponent food="마라샹궈" />
      <ClassComponent />
      {/* 실습 2 */}
      <FunctionComponent
        title="비가 오면 열리는 상점"
        author="유영광"
        price="15,120원"
        type="장편소설"
      />
    </>
  );
}

export default App;
