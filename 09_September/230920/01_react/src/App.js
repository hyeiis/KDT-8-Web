import "./App.css";
import Event from "./Event";
import EventClass from "./EventClass";
import Counter from "./Counter";

function App() {
  return (
    <>
      <h3>이벤트 핸들링</h3>
      <Event />
      <EventClass />

      <h3>state와 setState</h3>
      <Counter />
    </>
  );
}

export default App;
