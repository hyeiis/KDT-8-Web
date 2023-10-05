import { useContext } from "react";
import MyContext from "./store/lang-context";

export default function LanguageSelector() {
  // return (
  // 첫 번째 방법: Consumer 이용
  // <MyContext.Consumer>
  //   {(value) => {
  //     return (
  //       <div>
  //         {/* Consumer에서 value.language를 쓰려면 lang-context에서 createContext에 값을 넣어주어야 함 */}
  //         <h2>현재 선택된 언어: {value.language}</h2>
  //         <select
  //           value={value.language}
  //           onChange={(e) => value.setLanguage(e.target.value)}>
  //           <option value="ko">Korean</option>
  //           <option value="en">English</option>
  //           <option value="jp">Japanese</option>
  //         </select>
  //       </div>
  //     );
  //   }}
  // </MyContext.Consumer>
  // );

  //** 두 번째 방법: useContext 이용
  const value = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 언어: {value.language}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}>
        <option value="Korean">Korean</option>
        <option value="English">English</option>
      </select>
    </div>
  );
}
