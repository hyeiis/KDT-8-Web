import { useNavigate } from "react-router-dom";
import "./Student.scss";

export default function Student() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div>
        학생의 이름은 <span>kdt</span>입니다
      </div>
      <button onClick={() => navigate(-1)}>이전 페이지</button>
    </div>
  );
}
