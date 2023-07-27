// const mod = require("./module.js"); // 외부 모듈 require 이용하여 가져옴 ... 옛날 방식임
// == import mod from "./module.js"; 최신 방식
// package.json에 "type":"module"을 추가해 사용

// console.log(mod); // a, b 다 출력
// console.log(mod.a); // 객체에 접근할 때는 .을 붙여야 함.

// 중괄호를 하면 구조분해되어 분해할당으로 하나씩 가져올 수 있게 된다.
// const { age } = require("./module.js");
// console.log(age);

// ---- http 모듈 사용 ----
// http 모듈로 서버 만들지 x

// const http = require("http");
import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  //   response.writeHead(200); // 보통 성공하면 200번대. 오류나면 404. 서버 다운되면 500번대
  //   response.write("<h1>Hello</h1>");
  //   response.end("<p>End</p>");

  // 파일 전송
  try {
    // 정상적 코드
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    // 오류났을 때
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("execute> localhost:8000 port");
});
// ctrl + c 로 서버 종료시켜주어야 한다.
