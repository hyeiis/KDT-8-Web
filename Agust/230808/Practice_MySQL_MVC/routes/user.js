const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

// 로그인
router.get("/signin", controller.signin);
router.get("/signin", controller.post_signin);

// 회원가입
router.get("/signup", controller.signup);
router.get("/signup", controller.post_signup);

// 프로필
router.post("/profile", controller.profile);

// 프로필 수정
router.post("/profile/edit", controller.edit_profile);

// 프로필 삭제
router.post("/profile/delete", controller.delete_profile);

module.exports = router;
