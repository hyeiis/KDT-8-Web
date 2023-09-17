// const User = require("../model/User");
const models = require("../models");
const { Op } = require("sequelize");

exports.main = (req, res) => {
  res.render("index");
};

// 회원가입
exports.signup = (req, res) => {
  res.render("signup");
};

// 로그인
exports.signin = (req, res) => {
  res.render("signin");
};

// POST
exports.post_signup = (req, res) => {
  // User.post_signup(req.body, () => {
  //   res.send({ result: true });
  // });
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.post_signin = (req, res) => {
  // User.post_signin(req.body, (result) => {
  //   console.log("login", result);
  //   if (result.length > 0) res.send({ result: true, data: result[0] });
  //   else res.send({ result: false, data: null });
  // });
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true, data: result });
  });
};

// 프로필
exports.post_profile = (req, res) => {
  // User.post_profile(req.body, (result) => {
  //   if (result.length > 0) res.render("profile", { data: result[0] });
  //   else res.redirect("/user/signin");
  // });
  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

// 프로필 수정
exports.edit_profile = (req, res) => {
  const { id, userid, pw, name } = req.body;
  // User.edit_profile(req.body, () => {
  //   res.send("회원 정보 수정 성공!", { result: true });
  // });
  models.User.update({ name, pw }, { where: { id } }).then((result) => {
    console.log("result", result);
    res.send("회원 정보 수정 성공!", { result: true });
  });
};

// 프로필 삭제
exports.delete_profile = (req, res) => {
  // User.delete_profile(req.body.id, () => {
  //   res.send({ result: true });
  // });
  const { id } = req.body;
  models.User.destroy({
    where: { id },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.find_all = (req, res) => {
  models.User.findAll({
    // attributes: 원하는 컬럼 조회
    // attributes: ["name", "userid"],
    // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지 않은), Op.or(또는), Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다른)
    where: { id: { [Op.gte]: 4 } },
    order: [["id", "DESC"]],
    limit: 1,
    offset: 1,
  }).then((result) => {
    res.send(result);
  });
};
