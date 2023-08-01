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
//* get으로 정보 받고 다시 send로 보냄
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

//* server open
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
