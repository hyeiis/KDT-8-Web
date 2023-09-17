const mysql = require("mysql");

// mysql연결
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
  port: 3306,
  connectionLimit: 5, // 최대 연결 수 지정(기본 값: 10)
});

// 회원가입 정보 DB 저장
const db_sign_up = (data, cb) => {
  const sql = "INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)";
  conn.query(sql, [data.userid, data.pw, data.name], (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_sign_up", rows);
    cb();
  });
};
// 로그인
const db_sign_in = (data, cb) => {
  const sql = "SELECT * FROM user WHERE userid=? AND pw=?";
  conn.query(sql, [data.userid, data.pw], (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_sign_in", rows);
    cb(rows);
  });
};
// 회원 정보 조회
const db_info = (data, cb) => {
  const sql = "SELECT * FROM user WHERE id=?";
  conn.query(sql, [data.id], (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_info", rows);
    // select 문은 배열을 반환
    cb(rows);
  });
};
// 회원 정보 수정
const db_edit_info = (data, cb) => {
  const sql = "UPDATE user SET userid=?, name=?, pw=? WHERE id=?";
  conn.query(sql, [data.userid, data.name, data.pw, data.id], (error, rows) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("db_info", rows);
    cb();
  });
};

module.exports = {
  db_sign_up,
  db_sign_in,
  db_info,
  db_edit_info,
};
