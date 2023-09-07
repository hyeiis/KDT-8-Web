const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chat");
});

app.get("/:room", (req, res) => {
  const room = req.params.room;
});

function getUsersInRoom(room) {
  const users = [];
  const clients = io.sockets.adapter.rooms.get(room);
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId);
      //* 비밀 메시지 전송하기 위해 socketId 전송
      // 사용자에게 메시지를 보내기 위해 객체형태로 변경
      // key: 소켓아이디, value: 이름
      const info = { name: userSocket.user, key: socketId };
      users.push(info);
    });
  }
  return users;
}
const roomList = [];

io.on("connection", (socket) => {
  //* socket!//
  // socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
  // 웹 페이지가 접속이 되면 고유한 id값이 생성됨. socket.id로 확인가능
  // console.log(io.sockets);

  //채팅방 목록 보내기
  socket.emit("roomList", roomList);
  //채팅방 만들기 생성
  //* 내가 접속헀을 때 보는 것 (socket)
  socket.on("create", (roomName, userName, cb) => {
    //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
    //socket.rooms에 socket.id값과 방이름 확인가능
    socket.join(roomName);
    //socket은 객체이며 원하는 값을 할당할 수 있음
    socket.room = roomName;
    socket.user = userName;

    //채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      //* 갱신된 목록은 전체가 봐야함 (io) → io는 접속한 모든 사람이 보는 것
      io.emit("roomList", roomList);
    }
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    cb();

    console.log("Server Socket Connected", userName);
    socket.to(roomName).emit("notice", `${userName}님이 입장하셨습니다`);
  });

  socket.on("sendMessage", (message) => {
    if (message.user === "all") {
      io.to(socket.room).emit(
        "newMessage",
        message.message,
        message.nickname,
        false,
      );
    } else {
      //* 비밀 메시지
      io.to(message.user).emit(
        "newMessage",
        message.message,
        message.nickname,
        true,
      );
      socket.emit("newMessage", message.message, message.nickname, true);
    }
  });

  socket.on("disconnect", () => {
    if (socket.room) {
      socket.leave(socket.room);
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
