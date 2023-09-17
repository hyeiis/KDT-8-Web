const express = require("express");
// import express from "express";
const path = require("path");
// 하지만 경로 설정 시 pulbic/~~ 이런 식으로 써야 함

const app = express(); //express 자체를 쓸 수 없기 때문에 변수에 넣어줌
const PORT = 8000;

app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");
app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.render("app");
});
app.get("/worm", (req, res) => {
  res.render("worm");
});
app.get("/fruits", (req, res) => {
  res.render("fruits");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
