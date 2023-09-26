import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    // 주소 이동 시 url을 계속 붙게 하려면 /를 안붙이면 되고, root에 대한 절대 경로에서의 url 이동은 / 붙여야 함
    navigate("/user");
  }, []);
  return (
    <>
      <div>Redirect</div>
    </>
  );
}
