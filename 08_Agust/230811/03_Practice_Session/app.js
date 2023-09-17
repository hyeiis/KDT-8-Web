const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "myKey",
    resave: false,
    saveUninitialized: true,
  }),
);
// 사용자가 있다고 가정
const userInfo = { id: "test", pw: "1111" };

app.get("/", (req, res) => {
  const user = req.session.user;
  console.log(user);
  if (user === undefined) res.render("index", { isLogin: false });
  else res.render("index", { isLogin: true, user });
});
app.get("/login", (req, res) => {
  res.render("login");
});

// data를 전송할 때는(특히 숨겨야 할 때는) post 전송으로 많이 함
app.post("/login", (req, res) => {
  // 로그인 되는 경우
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send(
      "<script>alert('로그인 실패'); document.location.href='/';</script>",
    );
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user === undefined) {
    res.send(
      "<script>alert('잘못된 접근입니다'); document.location.href='/';</script>",
    );
  } else {
    req.session.destroy(() => {
      res.clearCookie("connect.sid").redirect("/");
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
