const model = require("../model/Model");

// res.render: 뷰 페이지 렌더링. render(뷰 페이지 이름, [데이터]). 뷰 → node.js가 제공하는 템플릿
// res.send: 모든 타입의 데이터 전송 (모든 타입: 문자열, 배열, 객체, 숫자)
// res.json: 객체 타입(json) 데이터만 전송
// res.redirect: 페이지 이동

//* GET
//* 페이지 렌더링
exports.main = (req, res) => {
  res.render("index");
};

exports.sign_up = (req, res) => {
  res.render("signUp");
};

exports.sign_in = (req, res) => {
  res.render("signIn");
};

exports.info = (req, res) => {
  // routes에서 parameter 방식으로 했기 때문에 req.params로 값 받아옴
  // query string 방식이면 req.query
  console.log(req.params);
  model.db_info(req.params, (result) => {
    res.render("info", { data: result[0] });
  });
};

//* POST
exports.post_sign_up = (req, res) => {
  model.db_sign_up(req.body, () => {
    res.json({ result: true });
  });
};

exports.post_sign_in = (req, res) => {
  // _result → Models의 db_sign_in 함수의 rows
  model.db_sign_in(req.body, (_result) => {
    if (_result.length > 0) res.json({ result: true, data: _result[0] });
    else res.json({ result: false });
  });
};

//* PATCH
exports.edit_info = (req, res) => {
  model.db_edit_info(req.body, () => {
    res.json({ result: true });
  });
};
