import styled from "styled-components";

const BoxOne = styled.div`
  background-color: blanchedalmond;
  width: 100px;
  height: 100px;
`;
// props 이용
const BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;
// 상속받아 이용
const CircleOne = styled(BoxTwo)`
  border-radius: 50%;
`;
// 기존 태그 이름만 바꾸어 사용 » as 키워드 사용
const Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
`;
// 태그 옵션 넣는 방법
const Input = styled.input.attrs({ required: true })``;
// 중첩
const BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: cadetblue;
  line-height: 100px;
  text-align: center;

  p {
    color: white;
    font-weight: 700;

    // p:hover
    &:hover {
      font-size: 20px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <>
      {/* <BoxOne />
      <BoxTwo color="red" />
      <CircleOne color="green" />
      <Btn as="a" href="https://naver.com">
        button
      </Btn> 
      <Input />
      <Input />
      <Input /> */}
      <BoxThree>
        <p>Hello Style</p>
      </BoxThree>
    </>
  );
}
