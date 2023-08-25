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

//* 회원정보 조회
// GET 조회 방식일 때는 url을 query string(/url?id=3) 또는 parameter 방식(/url/:id)으로 지정
// query string 방식은 페이지 이동을 안하고, parameter는 페이지 이동을 함
router.get("/info/:id", controller.info);

//* 회원정보 수정
router.patch("/info/edit", controller.edit_info);

module.exports = router;
