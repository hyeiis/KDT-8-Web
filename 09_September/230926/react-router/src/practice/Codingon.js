import { useNavigate } from "react-router-dom";
import "./Student.scss";

export default function CodingOn() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div>
        학생의 이름은 <span>codingon</span>입니다
      </div>
      <button onClick={() => navigate(-1)}>이전 페이지</button>
    </div>
  );
}
