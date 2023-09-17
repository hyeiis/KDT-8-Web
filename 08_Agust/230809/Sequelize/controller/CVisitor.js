const models = require("../models");

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
// 전체 방명록 조회
exports.getVisitors = (req, res) => {
  // select * from visitor;
  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

// (3) GET /visitor/get
// 방명록 하나 조회
exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.render("visitor", { data: [result] });
  });
};

// (4) GET /visitor/post
// 방명록 하나 추가
exports.postVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    res.send({
      result: true,
      id: result.dataValues.id,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

// (5) GET /visitor/edit
// 방명록 하나 수정
exports.patchVisitor = (req, res) => {
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
      // where문 뒤에는 항상 객체 형태로 받아야 한다.
    },
  ).then(() => {
    res.send({ result: true });
  });
};

// (6) GET /visitor/delete
// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send({ result: true });
  });
};
