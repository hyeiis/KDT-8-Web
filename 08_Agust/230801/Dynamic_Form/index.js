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

//* ajax
//* get으로 정보 받고 다시 send로 보냄
app.get("/ajax", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
//* post로 정보 받고 다시 send로 보냄
app.post("/ajax", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

//* axios
//* get으로 정보 받고 다시 send로 보냄
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

//* post로 정보 받고 다시 send로 보냄
app.post("/axios", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

//*fetch
//* get으로 정보 받고 다시 send로 보냄
app.get("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

//* post로 정보 받고 다시 send로 보냄
app.post("/fetch", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

//* server open
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
