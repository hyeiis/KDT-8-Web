import { useEffect, useState } from "react";

function MyComponent({ number }) {
  // typescript에서는 매개변수 안에서 객체구조분해할당 하는 게 많이 쓰임
  // 매개변수는 props의 number
  // const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("항상 실행");
  });

  useEffect(() => {
    console.log("생성될 때 실행");

    return () => {
      console.log("제거될 때 실행");
    };
  }, []);

  useEffect(() => {
    console.log("state가 변경될 때 실행");
  }, [text]);

  return (
    <>
      <div>My Component {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    // 화살표 함수 형태 -> 비동기
    setNumber(() => number + 1);
    // setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(() => !visible);
    // setVisible(!visible);
  };

  return (
    <>
      <h3>LifeCycle 함수형 컴포넌트</h3>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
