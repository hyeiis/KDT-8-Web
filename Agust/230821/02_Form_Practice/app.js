const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  const { username, gender, birthYear, birthMonth, birthDay, hobby } =
    req.query;
  res.render("result", {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color: {
      result: false,
      value: "",
    },
    number: {
      result: false,
      value: "",
    },
  });
});

//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  const {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color,
    number,
  } = req.body;
  res.render("result", {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color: {
      result: true,
      value: color,
    },
    number: {
      result: true,
      value: number,
    },
  });
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
