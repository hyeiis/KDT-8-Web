"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

//* model
db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

//* relationship
//* 1 : 다 (학생 : 강의)
db.Student.hasMany(db.Classes); // 외래키 자동 생성
db.Classes.belongsTo(db.Student);
// db.Student.hasMany(db.Classes, { foreignKey: "student_id" });
// db.Classes.belongsTo(db.Student, { foreignKey: "student_id" });

//* 1:1 (학생 : 프로필)
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
