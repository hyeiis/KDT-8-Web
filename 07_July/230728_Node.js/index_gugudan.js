const express = require("express");
// import express from "express";

const app = express(); //express 자체를 쓸 수 없기 때문에 변수에 넣어줌
const PORT = 8000;

app.set("view engine", "ejs"); // ejs는 set으로 setting
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("gugudan", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
