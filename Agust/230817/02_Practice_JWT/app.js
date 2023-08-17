const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";

const userInfo = { id: "test", pw: "test", name: "홍길동", age: 23 };

//* view engine
app.set("view engine", "ejs");

//* body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;

    if (id === uId && pw === uPw) {
      // 토큰 생성
      const token = jwt.sign({ id }, SECRET);
      //   res.send({ result: true, token });
      res.json({ result: true, token });
    } else {
      //   res.send({ result: false, message: "로그인 실패" });
      res.json({ result: false, message: "로그인 실패" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    // Bearer 한 칸 띄고 token 값이 오기 때문에 split 해줌
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1], SECRET);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다" });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
