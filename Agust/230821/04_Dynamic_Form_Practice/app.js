const express = require("express");
const app = express();
const PORT = 8000;

const userInfo = { id: "kdt8", pw: "1234" };

//body-parser
app.use(express.json());
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//post
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  // req.body.username, req.body.password의 객체 구조 분해 할당
  const { username, password } = req.body;
  // userInfo의 사용자 값 비교
  if (userInfo.id === username && userInfo.pw === password) {
    // res.json(): application/json 형태로 응답할 때 사용
    // json() 함수 안에는 객체가 반드시 와야 함
    res.json({ result: true, userInfo: { id: username, pw: password } });
  } else res.json({ result: false });
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
