import { Outlet } from "react-router-dom";
import "./App.css";
// import Router from "./Router";
// import Header from "./router/Header";
import Router from "./practice/Router";

function App() {
  return (
    <>
      {/* ver 1 */}
      {/* <Router /> */}

      {/* ver 2 */}
      {/* <Header />
      <Outlet /> */}

      {/* --------실습-------- */}
      {/* ver 1 */}
      <Router />
    </>
  );
}

export default App;
