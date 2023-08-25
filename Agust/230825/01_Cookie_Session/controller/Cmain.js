const bcrypt = require("bcrypt");
const { User } = require("../models");

// 쿠키 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
};

//GET
const main = (req, res) => {
  // 쿠키 사용
  console.log("cookie", req.cookies);
  //TODO 메인 페이지 접속 시, 쿠키 값 활용하여 로그인 해주세요 alert 창 띄우기
  if (!req.cookies.isLogin) {
    res.render("index", { cookie: false });
  } else res.render("index", { cookie: true });
};
//회원가입 페이지
const signup = (req, res) => {
  // 쿠키 셍성
  // res.cookie(쿠키 이름, 쿠키 값, 옵션 객체);
  res.cookie("testCookie", "test", cookieConfig);
  res.render("signup");
};
//로그인 페이지
//TODO 로그인 시 회원 전체 리스트 페이지 접속 - 세션 활용 (회원 리스트 표시. 상단에 접속자 이름 표시)
const signin = (req, res) => {
  // console.log(req.session.userInfo);
  // if (req.session.Info) res.redirect(`/profile/${req.session.userInfo.id}`);
  // else res.render("signin");
  if (req.session.Info) res.redirect("/all_profile");
  else res.render("signin");
};
// 회원정보 조회 페이지
// findOne: DB에서 하나의 정보를 찾을 때 사용. 객체 하나 반환
// where: 객체 형태로 찾을 정보 입력
const profile = (req, res) => {
  console.log(req.session.userInfo);
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    // findOne이 객체 하나만 반환하기 때문에 result[0]이라고 하지 않고, result라고만 해도 됨
    res.render("profile", { data: result });
  });
};

// 회원 전체 조회
const all_profile = (req, res) => {
  if (req.session.userInfo) {
    User.findAll().then((result) => {
      res.render("members", { name: req.session.userInfo.name, result });
    });
  } else res.redirect("/signin");
};

//POST
// 회원가입
const post_signup = async (req, res) => {
  const { userid, name, pw } = req.body;
  const hash = await bcryptPassword(pw);
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true });
  });
};
// 로그인
// 1. 아이디를 찾아 사용자 유무 확인
// 2. 입력된 비밀번호와 기존 데이터와 비교
const post_signin = async (req, res) => {
  const { userid, pw } = req.body;
  const user = await User.findOne({
    where: { userid },
  });
  /* 현재 user의 상태는 아래와 같음
  const user = {
    id: 1,
    userid: "",
    name: "",
    pw: ""
  };
  */
  // 사용자가 존재하면
  if (user) {
    const _result = await compareFunc(pw, user.pw); // true 또는 false 반환
    // _result: true → 비밀번호 일치
    if (_result) {
      // req.session.name = user.name;
      res.cookie("isLogin", true, cookieConfig);
      req.session.userInfo = { name: user.name, id: user.id };
      res.json({ result: true, data: user });
    } else res.json({ result: false, message: "비밀번호가 틀렸습니다" });
  }
  // 사용자가 존재하지 않으면 (undefined, null)
  else res.json({ result: false, message: "사용자가 존재하지 않습니다" });
};

//PATCH
// 회원정보 수정
const edit_profile = (req, res) => {
  const { id, name, pw } = req.body;
  User.update({ name, pw }, { where: { id } }).then(() => {
    res.json({ result: true });
  });
};

//DELETE
// 회원 탈퇴
const delete_profile = (req, res) => {
  const { id } = req.body;
  User.destroy({ where: { id } }).then(() => {
    res.clearCookie("testCookie");
    req.session.destroy();
    res.json({ result: true });
  });
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
  all_profile,
};

// function (내부에서만 쓸 거라서 module.exports 밑에 적음)
//* 암호화
// 화살표 함수일 때 명령어가 한 줄 코드이면 아래 처럼 줄일 수 있다. (return과 중괄호 없애기)
const bcryptPassword = (password) => bcrypt.hash(password, 10);
const compareFunc = (password, dbpassword) =>
  bcrypt.compare(password, dbpassword);
