const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv").config();

//* ejs
app.set("view engine", "ejs");
//* body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* router
app.get("/", (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.STATUS);
  console.log(process.env.NODE_ENV);
  res.render("index");
});

let hash = "";

app.post("/hash", (req, res) => {
  const { password } = req.body;
  //   const hash = createHashedPassword(password);
  //   hash = createPbkdf(password);
  hash = bcryptPassword(password);
  res.json({ hash });
});

app.post("/verify", (req, res) => {
  const { password } = req.body;
  //   const compare = verifyPassword(password, salt, hash);
  const compare = comparePassword(password, salt, hash);
  res.json({ compare });
});

app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  console.log(encrypt);
  const decrypt = decipher(encrypt);
  res.json({ decrypt });
});

//* server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//* functions
const crypto = require("crypto"); // 내장 모듈

//* ==== 단방향 암호화 ==== *//
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화 할 값).digest(인코딩 방식);
  return crypto.createHash("sha512").update(password).digest("base64");
};

const salt = crypto.randomBytes(16).toString("base64"); // salt 생성
const iterations = 100; // 반복 횟수
const keylen = 64; // 생성할 키의 길이
const digest = "sha512"; // 해시 알고리즘

const createPbkdf = (password) => {
  // pbkdf2(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)으로 생성되고, 반환 값은 buffer 값
  return crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
};

//* 검증
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
  if (compare === dbPassword) return true;
  return false;
};

//* ==== 양방향 암호화 ==== *//
const algorithm = "aes-256-cbc"; // 256bit 키 사용. 블록 크기: 128bit
const key = crypto.randomBytes(32); // 1byte = 8bit. 32byte = 256bit
const iv = crypto.randomBytes(16); // 초기화 벡터. 데이터 블록을 암호화할 때 보안성 높이기 위해 사용

//* 암호화
const cipherEncrypt = (word) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
  let encryptedData = cipher.update(word, "utf-8", "base64"); // 암호화할 데이터 처리
  encryptedData += cipher.final("base64"); // 최종 결과 생성
  return encryptedData;
};

//* 복호화
const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
  let decryptedData = decipher.update(encryptedData, "base64", "utf-8"); // 복호화할 데이터 처리
  decryptedData += decipher.final("utf-8"); // 최종 결과 생성
  return decryptedData;
};

//* ==== Bcrypt (단방향) ==== *//
const bcrypt = require("bcrypt");
const saltNum = 10;

//* 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNum);
};
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
