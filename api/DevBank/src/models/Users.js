const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("guest", "admin"),
      defaultValue: "guest",
    },
    docType: {
      type: DataTypes.ENUM("DNI","LE","LC","CI", "PASAPORTE"),
    },
    docNumber: {
      type: DataTypes.BIGINT,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    phone: {
      type: DataTypes.BIGINT,
      unique: true,
    },
    street: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  });
};
