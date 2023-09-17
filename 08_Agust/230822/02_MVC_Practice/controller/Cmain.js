const Info = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const members = (req, res) => {
  res.render("members", { lists: Info });
};

const member = (req, res) => {
  res.render("member", { data: Info[Number(req.params.index) - 1] });
};

const page_addMember = (req, res) => {
  res.render("addMember");
};

const addMember = (req, res) => {
  const { name, gender, major } = req.body;
  Info.push({
    id: Info.length + 1,
    name,
    gender,
    major,
  });
  console.log(Info);
  res.send(Info);
};

module.exports = {
  main: main,
  members,
  member,
  page_addMember,
  addMember,
};
