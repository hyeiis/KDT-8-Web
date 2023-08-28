const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("client");
});

// app.listen 밑에 event 관련 코드 작성 가능. 미들웨어 x
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// websocket 서버 연결
const wss = new ws.Server({ server });

// 브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];

// 서버에서 이벤트 불러올 때는 on 이용
// socket 변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다");
  // sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    // msg: {user: 'any', message: 'any'}
    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메시지: ${msg.message}`);
    // 클라이언트로 응답 메시지 전송
    sockets.forEach((elem) => {
      elem.send(`${msg.user}: ${msg.message}`);
    });
  });
  socket.on("error", (error) => {
    console.log("오류가 발생했습니다: ", error);
  });
  socket.on("close", () => {
    console.log("클라이언트와의 연결이 종료되었습니다");
  });
});
