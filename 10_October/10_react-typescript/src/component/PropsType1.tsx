import { useState, useRef } from "react";

interface Props {
  name: string | number; // 필수
  age?: number; // 선택
}

const PropsType1: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number | string>("");
  const myInput = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    myInput.current?.focus(); //* typescript는 값이 존재하는지 확인하기 위해 ?를 넣어주어야 함
  };
  const onClick = (e: any) => {};

  return (
    <>
      <h2>Hello {name}</h2>
      <h3>age: {age}</h3>
      <input ref={myInput} />
      <button onClick={handleFocus}>Button</button>
      <form>
        <button onClick={(e) => onClick(e)}>Submit</button>
      </form>
    </>
  );
};

export default PropsType1;

// export default function PropsType1({ name }: Props) {
//   return (
//     <>
//       <h2>Hello {name}</h2>
//     </>
//   );
// }
