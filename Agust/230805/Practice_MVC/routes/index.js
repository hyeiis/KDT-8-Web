const express = require("express");
const controller = require("../controller/CVisitor");
const route = require("../../MVC/routes");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // 전체 조회

module.exports = router;
