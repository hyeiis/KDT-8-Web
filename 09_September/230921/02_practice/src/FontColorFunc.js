import { useState } from "react";

export default function FontColorFunc() {
  const [font, setFont] = useState(["검정색 글씨", "black"]);

  const handleRed = () => {
    setFont(["빨간색 글씨", "red"]);
  };

  const handleBlue = () => {
    setFont(["파란색 글씨", "blue"]);
  };

  return (
    <>
      <h2 style={{ color: font[1] }}>{font[0]}</h2>
      <button onClick={handleRed}>RED</button>
      <button onClick={handleBlue}>BLUE</button>
    </>
  );
}
