import { useNavigate, useSearchParams } from "react-router-dom";
import "./Student.scss";

export default function SearchParams() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div className="main">
      <div>
        학생의 이름은 <span>new</span>입니다
        <br />
        실제 이름은 <span className="name">{name}</span>입니다
      </div>
      <button onClick={() => navigate(-1)}>이전 페이지</button>
    </div>
  );
}
