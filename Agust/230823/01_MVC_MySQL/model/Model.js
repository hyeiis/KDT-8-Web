const mysql = require("mysql");

// mysql연결

//* createConnection
// 단일 연결. 요청할 때마다 새로운 연결 생성. 적은 수의 동시 연결이나 단순한 DB 쿼리일 때 사용
//* createPool
// 연결 풀 생성. 풀은 미리 정의된 수의 연결 생성 및 관리. 요청이 들어오면 연결 풀에서 사용 가능한 연결 제공. 작업 완료 후 해당 연결 반환. 연결이 필요하지 않을 경우 자동으로 반환. 풀의 연결 수를 제한하고 관리를 최적화 함. 다중 연결 서비스에 적합

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234",
//   database: "db1",
//   port: 3306,
// });

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
  port: 3306,
  connectionLimit: 5, // 최대 연결 수 지정(기본 값: 10)
});

//? 문자열 보간법
// 단점)
// 1. sql injection 공격에 취약
// 2. 문자열에 특수 문자가 포함될 경우 오류 발생 가능성 있음
//? Prepared Statement
// INSERT INTO user (userid, pw, name) VALUES (?,?,?)

// 회원가입 정보 DB 저장
const db_sign_up = (data, cb) => {
  // 문자열 보간법
  //   const sql = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`;
  //   conn.query(sql, (error, rows) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     console.log("db_sign_up", rows);
  //     cb();
  //   });

  // Prepared Statement
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

const db_sign_in = (data, cb) => {
  //   const sql = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  //   conn.query(sql, (error, rows) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     console.log("db_sign_in", rows);
  //     cb(rows);
  //   });

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

module.exports = {
  db_sign_up,
  db_sign_in,
};
