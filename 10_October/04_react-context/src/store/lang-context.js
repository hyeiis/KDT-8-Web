import { createContext, useState } from "react";

// Context 생성
// Provider와 Consumer 두 개의 리액트 컴포넌트 반환
// 어떤 값을 쓸 것인지 알려주는 게 createContext (type 명시)
const MyContext = createContext({
  language: "", // string
  setLanguage: () => {}, // 함수 형태
});

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("ko");
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
