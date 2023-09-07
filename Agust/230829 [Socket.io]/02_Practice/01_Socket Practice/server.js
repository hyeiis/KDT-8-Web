const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8080;
// http server
const server = http.createServer(app);
// socket server
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// socket
io.on("connection", (socket) => {
  socket.on("hello", (arg, cb) => {
    console.log(`${arg.name} : ${arg.message}`);
    cb(arg);
  });
  socket.on("study", (arg, cb) => {
    console.log(`${arg.name} : ${arg.message}`);
    cb(arg);
  });
  socket.on("bye", (arg, cb) => {
    console.log(`${arg.name} : ${arg.message}`);
    cb(arg);
  });
});

// server open
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
