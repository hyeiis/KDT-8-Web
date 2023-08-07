const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
});
conn.connect((err) => {
  if (err) console.log("err");
});

// mysql 연결 후
exports.getVisitors = (callback) => {
  const query = `SELECT * FROM visitor;`;
  conn.query(query, (err, rows) => {
    console.log("visitor", rows);
    if (err) throw err;
    callback(rows);
  });
};

exports.getVisitor = (id, callback) => {
  const query = `SELECT * FROM visitor WHERE id = ${id};`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}');`;
  conn.query(query, (err, rows) => {
    console.log("write", rows);
    callback(rows);
  });
};

exports.patchVisitor = (data, callback) => {
  const query = `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id};`;
  conn.query(query, (err, rows) => {
    console.log("update", rows);
    callback(rows);
  });
};

exports.deleteVisitor = (data, callback) => {
  const query = `DELETE FROM visitor WHERE id = ${data.id};`;
  conn.query(query, (err, rows) => {
    callback(rows);
  });
};
