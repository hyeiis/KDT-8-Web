import mysql from "mysql2/promise";

// createConnection: 단일 연결. 매번 연결이 필요할 때마다 새로운 연결 생성. -> 연결 수 많아지면 성능에 영향이 생김
// createPool: 여러 개를 연결하면서, 여러 개의 연결을 미리 생성하고 관리 -> 요청이 들어올 때마다 생성한 연결을 할당. 동시 처리 가능

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "db1",
});

export const post_signup = async (data) => {
  try {
    // conn.query는 배열 안의 배열형태라서 배열 안의 첫 번째 배열만 사용할 것이라 배열 구조분해할당
    const query = `INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)`;
    const [rows] = await conn.query(query, [data.userid, data.pw, data.name]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_signin = async (data) => {
  try {
    const query = `SELECT * FROM user WHERE userid = ? AND pw = ? `;
    const [rows] = await conn.query(query, [data.userid, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_profile = async (data) => {
  try {
    const query = `SELECT * FROM user WHERE userid = ?`;
    const [rows] = await conn.query(query, [data.userid]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (data) => {
  try {
    const query = `UPDATE user SET userid = ?, name = ?, pw = ? WHERE id = ?`;
    const [rows] = await conn.query(query, [
      data.userid,
      data.name,
      data.pw,
      data.id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const delete_profile = async (id) => {
  try {
    const query = `DELETE FROM user WHERE id = ?`;
    const [rows] = await conn.query(query, [id]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
