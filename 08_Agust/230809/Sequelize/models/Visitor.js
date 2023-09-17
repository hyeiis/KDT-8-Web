// visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
  // sequelize: models/index.js에 있는 sequelize
  // DataTypes: models/index.js에 있는 Sequelize
  const model = sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    // {
    //   tableName: "visitor",
    //   freezeTableName: true,
    //   timestamps: false,
    // },
  );
  return model;
};

module.exports = Visitor;

// export function getVisitors(callback) {
//   const query = `SELECT * FROM visitor;`;
//   conn.query(query, (err, rows) => {
//     console.log("visitor", rows);
//     if (err) throw err;
//     callback(rows);
//   });
// }

// export function getVisitor(id, callback) {
//   const query = `SELECT * FROM visitor WHERE id = ${id};`;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     callback(rows);
//   });
// }

// export function postVisitor(data, callback) {
//   const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}');`;
//   conn.query(query, (err, rows) => {
//     console.log("write", rows);
//     callback(rows);
//   });
// }

// export function patchVisitor(data, callback) {
//   const query = `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id};`;
//   conn.query(query, (err, rows) => {
//     console.log("update", rows);
//     callback(rows);
//   });
// }

// export function deleteVisitor(data, callback) {
//   const query = `DELETE FROM visitor WHERE id = ${data.id};`;
//   conn.query(query, (err, rows) => {
//     callback(rows);
//   });
// }
