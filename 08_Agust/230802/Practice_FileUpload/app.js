const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//! view engine, body-parser, 정적 파일 설정 코드 외우기 !//
//* view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//* body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//* multer 세부 설정 -> 파일 업로드 폴더를 미리 만들어야 함
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//* router
app.get("/", (req, res) => {
  // res.render("index");
  res.render("dynamic");
});

//* axios dynamic file upload
app.post("/register", uploadDetail.single("profile"), (req, res) => {
  console.log("backend", req.body);
  res.render("register", {
    userInfo: req.body,
    profile: req.file.path, //파일 경로 받아서 register의 img src에 들어감
  });
});

//* server open -> 항상 코드 마지막에 있어야 함
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
