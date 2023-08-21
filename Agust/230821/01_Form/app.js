const express = require("express");
const app = express();
const PORT = 8000;

//* view engine
app.set("view engine", "ejs");
// views라는 설정을 다른 폴더로 바꿀 때 쓰는 옵션
// views라는 폴더를 기본으로 사용할 때는 입력 안해도 됨
// app.set("views", "/views");

//* body-parser → req.body 즉, POST 전송일 때 사용
// extended: 중첩된 객체표현을 허용할지 결정
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// application/json
app.use(express.json());

//* router
// 페이지를 지정할 때는 미들웨어 use를 사용
// "/"를 use를 하게 되면 /로 시작하는 페이지가 다 걸리기 때문에 get을 사용해주어야 함
app.get("/", (req, res) => {
  // render: 페이지 렌더링.
  // render("페이지 이름", 데이터)
  res.render("index");
});

app.get("/getForm", (req, res) => {
  // get 방식은 request(req)에 query 형태로 접근
  // req.query 구조 분해 할당 → req.query.id, req.query.pw
  const { id, password } = req.query;
  // result 페이지에 데이터 전송
  // key:value 형태에서 key 값과 value의 변수가 동일할 때는 value 생략 가능
  res.render("result", {
    title: "GET 요청 결과 확인",
    userInfo: { id, password },
  });
});

app.post("/postForm", (req, res) => {
  // post 방식은 requesr(req)에 body 형태로 접근
  // req.body 구조 분해 할당 → req.body.id, req.body.pw
  const { id, password } = req.body;
  // result 페이지에 데이터 전송
  res.render("result", {
    title: "POST 요청 결과 확인",
    userInfo: { id, password },
  });
});

// use는 http 전송방식을 이해하지 못함
// 같은 url로 get, post를 만들 수 있지만 use는 접근 불가
// e.g. get 방식의 '/login'과 post 방식의 '/login'은 다른 페이지. || use는 동일한 페이지로 인식
//* 404 페이지일 때 use 사용
app.use("*", (req, res) => {
  res.render("404");
});

//* server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
