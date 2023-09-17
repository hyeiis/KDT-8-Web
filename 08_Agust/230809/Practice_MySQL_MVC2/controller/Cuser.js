import * as User from "../model/User.js";

//* GET 방식
export const main = (req, res) => {
  res.render("index");
};

export const signup = (req, res) => {
  res.render("signup");
};

export const signin = (req, res) => {
  res.render("signin");
};

//* POST 방식
// 회원가입
export const post_signup = async (req, res) => {
  try {
    await User.post_signup(req.body);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
    res.send({ result: false });
  }
};

// 로그인
export const post_signin = async (req, res) => {
  try {
    const result = await User.post_signin(req.body);
    if (result.length > 0) res.send({ result: true, data: result[0] });
    else res.send({ result: false, data: null });
  } catch (error) {
    console.log(error);
  }
};

// 프로필
export const post_profile = async (req, res) => {
  try {
    const result = await User.post_profile(req.body);
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/user/signin");
  } catch (error) {
    console.log(error);
  }
};

// 프로필 수정
export const edit_profile = async (req, res) => {
  try {
    await User.edit_profile(req.body);
    res.status(200).send({ result: true });
  } catch (error) {
    console.log(error);
  }
};

// 프로필 삭제
export const delete_profile = async (req, res) => {
  try {
    await User.delete_profile(req.body.id);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
  }
};
