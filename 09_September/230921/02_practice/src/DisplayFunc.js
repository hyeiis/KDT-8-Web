import { useState } from "react";
export default function DisplayFunc() {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <h2>{display && "안녕하세요"}</h2>
      <button onClick={handleDisplay}>
        {display ? "사라지기" : "보여지기"}
      </button>
    </>
  );
}
