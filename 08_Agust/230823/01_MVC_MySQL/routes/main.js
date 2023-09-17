const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

//* 회원가입
// 회원가입 페이지
router.get("/signUp", controller.sign_up);
// DB에 회원 정보 저장
router.post("/signUp", controller.post_sign_up);

//* 로그인
// 로그인 페이지
router.get("/signIn", controller.sign_in);
router.post("/signIn", controller.post_sign_in);

module.exports = router;
