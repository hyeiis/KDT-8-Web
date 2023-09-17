const mysql = require("mysql");

//mysql연결
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
  port: 3306,
  connectionLimit: 10, //최대 연결 수(기본값은 10)
});
//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
  const query = "INSERT INTO user (userid, pw, name) VALUES (?,?,?)";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signup", rows);
    cb();
  });
};

const db_signin = (data, cb) => {
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};
//사용자 정보 조회
const db_profile = (data, cb) => {
  const query = "SELECT * FROM user WHERE id = ?";
  conn.query(query, [data.init], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_profile", rows);
    cb(rows);
  });
};
//프로필 수정
const db_profile_edit = (data, cb) => {
  const query = "UPDATE user SET userid=?,name=?,pw=? WHERE id=? ";
  conn.query(query, [data.userid, data.name, data.pw, data.id], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_profile_edit", rows);
    cb();
  });
};
// 회원 정보 삭제
const db_profile_delete = (data, cb) => {
  const query = "DELETE FROM user WHERE id=?";
  conn.query(query, [data.id], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_profile_delete", rows);
    cb();
  });
};

module.exports = {
  db_signup,
  db_signin,
  db_profile,
  db_profile_edit,
  db_profile_delete,
};
