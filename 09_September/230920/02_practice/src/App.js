import "./App.css";
import ShowMessage from "./ShowMessage";
import FontColor from "./FontColor";
import DisplayNone from "./DisplayNone";
import Board from "./Board";

function App() {
  return (
    <>
      {/* 이벤트 핸들링 */}
      <ShowMessage message="안녕하세요" />
      {/* state와 setState */}
      <FontColor />
      <DisplayNone />
      <Board />
    </>
  );
}

export default App;
