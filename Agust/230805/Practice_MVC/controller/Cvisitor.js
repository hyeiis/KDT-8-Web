const Visitor = require("../model/Visitor");

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });

  // mysql 연결 후
  Visitor.getVisitors((result) => {
    console.log("Cvisitor : ", result);
    // [ {}, {}, {} ]
    res.render("visitor", { data: result });
  });
};
