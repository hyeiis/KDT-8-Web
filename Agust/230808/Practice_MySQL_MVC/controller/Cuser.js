const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

// 회원가입
exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  User.post_signup(req.body, () => {
    res.send(true);
  });
};

// 로그인
exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = (req, res) => {
  User.login(req.body, (result) => {
    if (req.body.userid == result.id) res.send(true);
    else res.send(false);
  });
};

// 프로필
exports.profile = (req, res) => {
  User.profile(req.body, (result) => {
    if (req.body.userid == result.id)
      res.render("profile", { data: result[0] });
    else res.redirect("/user/signin");
  });
};

// 프로필 수정
exports.edit_profile = (req, res) => {
  User.edit_profile(req.body, () => {
    res.send("회원 정보 수정 성공!");
  });
};

// 프로필 삭제
exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.send(true);
  });
};
