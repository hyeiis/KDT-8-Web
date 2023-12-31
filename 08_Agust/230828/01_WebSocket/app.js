const http = require("http");
const express = require("express");
const ws = require("ws");
const app = express();
const server = http.createServer(app);
const PORT = 8000;
// websocket 서버 연결
const wss = new ws.Server({ server });
// 브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 서버에서 이벤트 불러올 때는 on 이용
// socket 변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다");
  // sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    // 웹 소켓을 통해 클라이언트와 서버 간에 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼 형태로 전달된다.
    // 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 byte로 변환하는 직렬화 과정이 필요함 → 버퍼를 쓰는 이유
    // msg: {user: 'any', message: 'any'}
    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메시지: ${msg.message}`);
    // 클라이언트로 응답 메시지 전송
    // sockets를 wss.clients로 변경 가능
    wss.clients.forEach((elem) => {
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

app.get("/", (req, res) => {
  res.render("client");
});

// app.listen 밑에 event 관련 코드 작성 가능. 미들웨어 x
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
