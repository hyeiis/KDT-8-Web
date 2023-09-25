import { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: blue;
  color: white;

  &:active {
    background-color: red;
    color: black;
  }
`;

export default function ColorChange() {
  return (
    <>
      <Btn>색상 변경!</Btn>
    </>
  );
}
