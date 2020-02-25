"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fullName: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      userType: { type: DataTypes.STRING, allowNull: true },
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
    },
    {}
  );
  User.prototype.toJSON = function() {
    const { password, createdAt, updatedAt, ...rest } = Object.assign(
      {},
      this.get()
    );
    return rest;
  };
  User.associate = function(models) {
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
