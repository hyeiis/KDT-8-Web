const express = require("express");
const app = express();
const PORT = 8060;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* [라우터 분리]
app.get("/", (req, res) => {
  res.render("index");
});
const indexRouter = require("./routes"); // index는 기본이기 때문에 생략 가능!
app.use("/visitor", indexRouter);

//* [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
// use로 하면 post patch 모든 페이지 다 오류처리 가능
app.use("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
