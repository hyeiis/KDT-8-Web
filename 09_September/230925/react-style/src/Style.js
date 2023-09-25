import "./Style.css";
import styled from "./Style.module.css";

export default function Style() {
  return (
    // ↓ 일반 CSS 사용
    <div className="main">
      {/* ↓ module 이용한 css 사용 */}
      <div className={styled.section}>1</div>
      <div className="">2</div>
    </div>
  );
}
