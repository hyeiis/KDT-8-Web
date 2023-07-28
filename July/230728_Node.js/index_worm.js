const express = require("express");
// import express from "express";
const path = require("path");
// path를 사용하면 정적파일 가져올 수 있다.
// 하지만 경로 설정 시 pulbic/~~ 이런 식으로 써야 함

const app = express(); //express 자체를 쓸 수 없기 때문에 변수에 넣어줌
const PORT = 8000;

app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("worm");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
