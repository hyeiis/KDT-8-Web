// 하나의 모듈 파일에 여러 개 만들기

const a = "a 변수";
const b = "b 변수";
const c = 20;

// module.exports = { a, b };

// 하나의 모듈 파일에 하나 만들기
// function connect() {
//   return a + b;
// }

// module.exports = connect;
// == export default connect; 최신 방법

module.exports = { a: a, b: b, age: c };

// ->
// {
//     a: "a 변수",
//     b: "b 변수",
//     age: 20
// };
