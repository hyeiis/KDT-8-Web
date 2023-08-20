const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.index = (req, res) => {
  res.render("index");
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.get_signin = (req, res) => {
  res.render("signin");
};

// 회원가입
exports.register = async (req, res) => {
  try {
    const { userid, password, name } = req.body;
    const hashPw = bcryptPassword(password);
    const result = await User.create({
      userid,
      name,
      password: hashPw,
    });
    if (result) {
      res.json({ result: true });
    }
  } catch (err) {
    console.log(err);
  }
};

// 로그인
exports.login = async (req, res) => {
  try {
    const { userid, password } = req.body;
    // 사용자 조회
    const result = await User.findOne({
      where: { userid },
    });
    console.log("user: ", result);
    if (!result) {
      res.json({ result: false, message: "사용자가 존재하지 않습니다" });
    }
    // 비밀번호 확인
    const compare = comparePassword(password, result.password);
    if (compare) {
      res.json({ result: true });
    } else {
      res.json({ result: false, message: "비밀번호가 일치하지 않습니다" });
    }
  } catch (err) {
    console.log(err);
  }
};

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, dbPw) => {
  return bcrypt.compareSync(password, dbPw);
};
