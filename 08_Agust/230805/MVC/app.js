const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", "./views");

app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Router *//
// index는 생략가능
const indexRouter = require("./routes"); // index.js 생략
// localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한대로 동작
app.use("/", indexRouter);

// GET /
// app.get('/', (req, res) => {
//   res.render('index');
// });

//* 404 error 처리
//! 맨 마지막 라우트로 선언해야 함
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
