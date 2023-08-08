const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* [라우터 분리]
app.get("/", (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
