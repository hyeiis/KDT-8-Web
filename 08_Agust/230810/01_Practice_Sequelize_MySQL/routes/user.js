const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//* GET localhost:8000/user/
router.get("/", controller.main);

//* 회원가입
// GET localhost:8000/user/signup
router.get("/signup", controller.signup);
// POST localhost:8000/user/signup
router.post("/signup", controller.post_signup);

//* 로그인
// GET localhost:8000/user/signin
router.get("/signin", controller.signin);
// POST localhost:8000/user/signin
router.post("/signin", controller.post_signin);

//* 프로필
router.post("/profile", controller.post_profile);
//* 프로필 수정
router.patch("/profile/edit", controller.edit_profile);
//* 프로필 삭제
router.delete("/profile/delete", controller.delete_profile);

// findAll
router.get("/findall", controller.find_all);

module.exports = router;
