const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
// http server
const server = http.createServer(app);
// socket server
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
