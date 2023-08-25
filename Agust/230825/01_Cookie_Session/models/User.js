const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  return sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  });
};

module.exports = User;
