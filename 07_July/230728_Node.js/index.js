// import ... from '...' 사용하기 위해서는 package.json에 "type":"module" 필수 넣어야 함. -> 안넣으면 const ... = require('...');
// import express from "express";
const express = require("express");

const app = express(); //express 자체를 쓸 수 없기 때문에 변수에 넣어줌
const PORT = 8000; // 상수는 대문자로 선언

//* 뷰 엔진 세팅
app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");

//* 정적인 파일 불러오기
app.use("public", express.static("./public"));
app.use("/public", express.static(join(__dirname, "public")));
// app.use("views", express.static(__dirname + "/views"));
// 앞의 views는 서버를 말함. 뒤의 /views는 폴더

app.get("/", (req, res) => {
  // get 첫 번째 매개변수는 도메인. get방식으로 접근하겠다.
  // post로 하고 싶으면 get대신 post넣으면 된다.
  // "/app"을 넣으면 localhost:8000/app으로
  // ()안에 항상 request와 response 순서로 들어가고, 필수.
  // 요청은 프론트엔드에서 응답은 백엔드(node.js)에서 하는 것

  //* send(): 클라이언트에 응답 데이터를 보낼 때
  //   res.send("Hello express"); // 값을 보내줌
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다.",
  //     data: { name: "hyeiis" },
  //   });
  //! 객체는 중괄호{}로

  //* render(): 뷰 엔진 렌더링
  res.render("test", { data: "hyeiis" });
});

app.listen(PORT, () => {
  // listen: 서버를 열어주는 역할
  // 백엔드에서의 console.log는 브라우저에 뜨지 않고 터미널에만 띄움
  console.log(`https://localhost:${PORT}`);
});

// console.log(express);
