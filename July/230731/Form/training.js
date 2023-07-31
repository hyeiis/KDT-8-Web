const express = require("express");
const app = express();
const PORT = 8000;

//* view engine
app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");

//* body-parser -> post 정보 전송 시 req.body로 받을 수 있게 해줌
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* router
app.get("/", (req, res) => {
  res.render("training");
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("training_result_get", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("training_result_post", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
