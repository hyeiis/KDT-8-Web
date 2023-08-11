const { Student, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

// postman 사용 시 비동기로 만든다고 생각해야 함
exports.post_student = async (req, res) => {
  const { userid, password, email, name, major, enroll } = req.body;
  const user = await user;
};
exports.post_class = (req, res) => {};
