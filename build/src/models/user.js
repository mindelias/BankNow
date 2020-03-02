"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    adminType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});

  User.prototype.toJSON = function () {
    var _Object$assign = Object.assign({}, this.get()),
        password = _Object$assign.password,
        createdAt = _Object$assign.createdAt,
        updatedAt = _Object$assign.updatedAt,
        rest = _objectWithoutProperties(_Object$assign, ["password", "createdAt", "updatedAt"]);

    return rest;
  };

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Account, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    User.hasMany(models.Transaction, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  return User;
};