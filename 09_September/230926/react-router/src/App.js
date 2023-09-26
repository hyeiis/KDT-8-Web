import { Outlet } from "react-router-dom";
import "./App.css";
// import Router from "./Router";
import Header from "./router/Header";

function App() {
  return (
    <>
      {/* ver 1 */}
      {/* <Router /> */}

      {/* ver 2 */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
