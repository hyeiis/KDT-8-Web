const express = require("express");
// import express from "express";
const path = require("path");
// 하지만 경로 설정 시 pulbic/~~ 이런 식으로 써야 함

const app = express(); //express 자체를 쓸 수 없기 때문에 변수에 넣어줌
const PORT = 8000;

app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");

app.use("/public", express.static(path.join(__dirname, "./public")));
// join의 public이 ./public이어도 동일한 결과. 만약 폴더 main에 js가 없으면 그냥 public 쓰면 안됨
// app.use(express.static(path.join(__dirname, "public")));을 하면 ejs에서 /css/style.css 이런 식으로 해주어야 한다.

app.get("/", (req, res) => {
  res.render("fruits");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
