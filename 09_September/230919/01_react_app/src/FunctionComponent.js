import PropTypes from "prop-types";

/* 함수형 컴포넌트
[형식]
1) function 컴포넌트명() {} 
2) const 컴포넌트명 = () => {} */

// function FunctionComponent() {
const FunctionComponent = (props) => {
  const myClass = "kdt8";

  const { name, age, children } = props;
  // 보통 return 위에 자바스크립트 코드를 작성한다
  return (
    <>
      <h2>Hi, {myClass}</h2>
      <div>여기는 함수형 컴포넌트입니다</div>

      {/* props */}
      <div>
        {name}의 나이는 {age} 세입니다
      </div>
      <div>{children}</div>
    </>
  );
};

FunctionComponent.defaultProps = {
  name: "길동이",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;
