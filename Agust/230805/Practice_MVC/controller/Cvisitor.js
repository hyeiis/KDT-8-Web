const Visitor = require("../model/Visitor");

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
// 전체 방명록 조회
exports.getVisitors = (req, res) => {
  // [before]
  // res.render("visitor", { data: Visitor.getVisitors() });

  // mysql 연결 후
  Visitor.getVisitors((result) => {
    res.render("visitor", { data: result });
  });
};

// (3) GET /visitor/get
// 방명록 하나 조회
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.query.id, (result) => {
    res.render("visitor", { data: result }); // 반복문에 배열 하나만 있어서 하나만 출력됨
    // res.send(rows[0]);
  });
};

// (4) GET /visitor/post
// 방명록 하나 추가
exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (result) => {
    res.send({
      result: true,
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

// (5) GET /visitor/edit
// 방명록 하나 수정
exports.patchVisitor = (req, res) => {
  Visitor.patchVisitor(req.body, () => {
    res.send({ result: true });
  });
};

// (6) GET /visitor/delete
// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.deleteVisitor(req.body, () => {
    res.send({ result: true });
  });
};
