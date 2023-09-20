import "./App.css";
import ShowMessage from "./ShowMessage";
import FontColor from "./FontColor";
import DisplayNone from "./DisplayNone";
import StateClass from "./StateClass";

function App() {
  return (
    <>
      {/* 이벤트 핸들링 */}
      <ShowMessage message="안녕하세요" />
      {/* state와 setState */}
      <FontColor />
      <DisplayNone />
      <StateClass />
    </>
  );
}

export default App;
