const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//* cookie-parser
// 일반 쿠키
// app.use(cookieParser());
// 암호화 쿠키
app.use(cookieParser("abcdef"));

//* cookie 옵션 객체
const cookieConfig = {
  // httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능(js 사용 불가)
  // js에서 document.cookie를 이용하여 쿠키에 접속하는 것 차단
  // maxAge :쿠키의 수명을 밀리초로 나타냄
  // expires: 만료일 GMT 시간으로 설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화 되고, 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송. 쿠키가 전송될 URL 특정 가능 (기본값: '/')
  // domain: 쿠키가 전송될 도메인 특정 가능 (기본값: 현재 도메인)
  // secure: 웹 브라우저와 웹 서버가 https로 통산하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정 (req.signedCookies 객체에 들어있음)
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
  signed: true,
};

app.get("/", (req, res) => {
  res.render("index");
});

// 쿠키 설정
app.get("/setCookie", (req, res) => {
  // 쿠키 이름, 쿠키 값, 옵션 객체
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie");
});
// 쿠키 확인
app.get("/getCookie", (req, res) => {
  //   res.send(req.cookies);
  res.send(req.signedCookies);
});
// 쿠키 제거
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
