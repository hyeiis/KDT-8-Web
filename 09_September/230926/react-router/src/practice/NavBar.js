import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="header">
      <Link to="/">
        <h2>React Router 실습</h2>
      </Link>
      <nav>
        <u>
          <li style={{ margin: "4px" }}>
            <Link to="/student/kdt">학생 KDT</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/new?name=kdt3rd">searchParams</Link>
          </li>
        </u>
      </nav>
    </div>
  );
}
