import { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) => (props.isClicked ? "red" : "blue")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  cursor: pointer;
`;

export default function ColorChange() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Btn onClick={() => setIsClicked(!isClicked)} isClicked={isClicked}>
        색상 변경!
      </Btn>
    </>
  );
}
