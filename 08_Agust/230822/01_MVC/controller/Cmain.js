const model_comments = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const comments = (req, res) => {
  res.render("comments", { lists: model_comments });
};

const comment = (req, res) => {
  console.log(req.params);
  // {index: '1'} → : 뒤에 붙은 변수가 key, 그 값이 value
  res.render("comment", { data: model_comments[Number(req.params.index) - 1] });
};

module.exports = {
  main: main,
  comments,
  comment,
};
