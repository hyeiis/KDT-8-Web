const express = require("express");
const controller = require("../controller/CVisitor");
const route = require("../../MVC/routes");
const router = express.Router();

// GET / => localhost:PORT/
// router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
// 방명록 전체 조회
router.get("/", controller.getVisitors);

// 방명록 하나 조회
router.get("/get", controller.getVisitor);

// 방명록 하나 추가
router.post("/write", controller.postVisitor);

// 방명록 하나 수정
router.patch("/edit", controller.patchVisitor);

// 방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);

module.exports = router;
