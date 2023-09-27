import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Student.scss";

// export default function Student() {
//   const navigate = useNavigate();

//   return (
//     <div className="main">
//       <div>
//         학생의 이름은 <span>kdt</span>입니다
//       </div>
//       <button onClick={() => navigate(-1)}>이전 페이지</button>
//     </div>
//   );
// }

export default function Student() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("name");
  const navigate = useNavigate();

  return (
    <div className="main">
      <div>
        학생의 이름은 <span>{name}</span>입니다
        {keyword !== null && (
          <div>
            실제 이름은 <span className="name">{keyword}</span>입니다
          </div>
        )}
      </div>
      <button onClick={() => navigate(-1)}>이전 페이지</button>
    </div>
  );
}
