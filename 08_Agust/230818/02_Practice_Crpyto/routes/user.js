const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

router.get("/", controller.index);
router.get("/signup", controller.get_signup);
router.get("/signin", controller.get_signin);

//회원가입
router.post("/signup", controller.signup);
//로그인
router.post("/signin", controller.signin);

module.exports = router;
