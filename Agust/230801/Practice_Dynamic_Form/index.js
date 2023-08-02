const express = require("express");
const app = express();
const PORT = 8000;

//* body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//* router
app.get("/", (req, res) => {
  res.render("index");
});

//* axios
//* get
app.get("/axiosGet", (req, res) => {
  res.render("get");
});
app.get("/axiosGetResult", (req, res) => {
  res.send({ result: true, data: req.query });
});

//* post
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/axiosPostResult", (req, res) => {
  const id = "kdt8";
  const password = "1234";
  if (id === req.body.userId && password === req.body.userPassword) {
    res.send({ result: true, userInfo: req.body });
  } else {
    res.send({ result: false });
  }
});

//* server open
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
