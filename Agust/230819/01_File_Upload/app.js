const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

const upload = multer({
  dest: "uploads/",
});

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // destination: 경로 설정
      // done: callback 함수
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // 가정) apple.png 파일을 업로드
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자" 추출 => png
      console.log("ext: ", ext);
      // path.basename(file.originalname, ext) => apple (확장자 제거한 파일이름만!!)
      // Date.now() => 현재 시간 (1680309346279)
      // => 1970년 1월 1일 0시 0분 0초를 기준으로 현재까지 경과된 밀리초
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB로 파일 크기 제한
  // 5 * 2^10 = 5KB
  // 5 * 2^10 * 2^10 = 5MB
});

// view engine
app.set("view engine", "ejs");
app.use("/uploads", express.static(__dirname + "/uploads"));

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// signle file upload
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 파일 업로드 성공 결과 (파일 정보)
  console.log(req.body); // title 데이터 정보 확인 가능
  res.send("Upload!");
});

// mulitple - each file upload
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // 업로드한 파일 정보 [{}, {}]
  console.log(req.body);
  res.send("Upload!");
});

// mulitple - each file upload
app.post(
  "/upload/fields",
  uploadDetail.array([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files); // 업로드한 파일 정보 { userfile1: [{}], userfile2: [{}] }
    console.log(req.body);
    res.send("Upload!");
  },
);

// 동적 파일 전송
app.post("/dynamic", uploadDetail.single("dynamic-file"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.file);
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
