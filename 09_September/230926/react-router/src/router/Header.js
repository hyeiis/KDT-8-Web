import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  // useNavigate() : Link 컴포넌트를 사용하지 않고, 사용자를 어딘가로 이동시키는 기능
  const navigate = useNavigate();

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <li>
          {/* Link: 유저가 클릭해야 함 */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={() => navigate("redirect")}>Redirect</button>
        </li>
      </ul>
    </>
  );
}
