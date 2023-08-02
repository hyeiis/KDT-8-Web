const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//* view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//* 정적 파일 설정 (외부에서 파일 접근하기 위함)
app.use("/uploads", express.static(__dirname + "/uploads"));

//* multer 세부 설정 -> 파일 업로드 폴더를 미리 만들어야 함
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, `${req.body.id}` + ext);
      // done(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5배
});

//* router
app.get("/", (req, res) => {
  res.render("index");
});

//* axios dynamic file upload
app.post("/register", uploadDetail.single("profile"), (req, res) => {
  res.send(req.body.profile);
});

//* server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
