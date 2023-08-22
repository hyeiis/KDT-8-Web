const info = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const members = (req, res) => {
  res.render("members", { lists: info });
};

const member = (req, res) => {
  res.render("member", { data: info[Number(req.params.index) - 1] });
};

const addMember = (req, res) => {
  res.send(info, {
    name: req.body.name,
    gender: req.body.gender,
    major: req.body.major,
  });
};

module.exports = {
  main: main,
  members,
  member,
  addMember,
};
