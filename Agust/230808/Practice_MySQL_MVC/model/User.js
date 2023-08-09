const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
});
conn.connect((err) => {
  if (err) {
    console.log("err");
    return;
  }
  console.log("connect");
});

// 회원가입
exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}');`;
  conn.query(query, (err, rows) => {
    if (err) throw err;
    console.log("post signup", rows);
    callback(rows);
  });
};

// 로그인
exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid = '${data.userid}' AND pw='${data.pw}';`;
  conn.query(query, (err, rows) => {
    if (err) throw err;
    console.log("post signin", rows);
    callback(rows);
  });
};

// 프로필
exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid = '${data.profile}';`;
  conn.query(query, (err, rows) => {
    if (err) throw err;
    console.log("profile", rows);
    callback(rows);
  });
};

// 프로필 수정
exports.edit_profile = (data, callback) => {
  const query = `UPDATE user SET userid = '${data.userid}' name = '${data.name}', pw = '${data.pw}' WHERE id = ${data.id};`;
  conn.query(query, () => {
    callback();
  });
};

// 프로필 삭제
exports.delete_profile = (id, callback) => {
  const query = `DELETE FROM user WHERE id = ${id};`;
  conn.query(query, () => {
    callback();
  });
};
