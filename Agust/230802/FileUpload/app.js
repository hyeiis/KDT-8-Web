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

//* multer setting
const upload = multer({
  // dest: 업로드할 파일 저장 경로
  dest: "uploads/",
});

//* multer 세부 설정 -> 파일 업로드 폴더를 미리 만들어야 함
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done의 첫 번째 인자(null): 에러 처리
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // file 확장자 가져옴
      const ext = path.extname(file.originalname);
      // basename(): 원래 이름
      // 원래 이름 + 현재 시간 + 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한
  limits: { fileSize: 5 * 1024 * 1024 }, // 5배
});

//* router
app.get("/", (req, res) => {
  res.render("index");
});

//* single file upload
app.post("/upload", uploadDetail.single("userFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!");
});

//* multi file upload (array)
app.post("/upload/array", uploadDetail.array("userFiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload!");
});

//* multi file upload (fields)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userFile1" }, { name: "userFile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload!");
  },
);

//* axios dynamic file upload
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userFile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  },
);

//* server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
