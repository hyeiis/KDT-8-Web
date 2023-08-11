const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/", controller.index);
// POST
router.post("/student", controller.post_student);
router.post("/class", controller.post_class);
// GET
router.get("/student", controller.get_student);
// router.get("/class", controller.get_class);

module.exports = router;
