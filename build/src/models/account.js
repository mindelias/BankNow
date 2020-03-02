"use strict";

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accountType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accountBalance: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    accountStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  Account.associate = function (models) {
    // associations can be defined here
    Account.belongsTo(models.User, {
      foreignKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    Account.hasMany(models.Transaction, {
      foreignKey: 'accountNumber',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    Account.hasMany(models.Transfer, {
      foreignKey: 'transferAccountNumber',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    Account.hasMany(models.Transfer, {
      foreignKey: 'transferToAccountNumber',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  return Account;
};