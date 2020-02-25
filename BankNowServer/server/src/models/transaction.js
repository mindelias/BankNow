"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      transactionType: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.DOUBLE, allowNull: false },
      accountNumber: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {
      foreignKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    Transaction.belongsTo(models.Account, {
      foreignKey: 'accountNumber',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    Transaction.hasMany(models.Transfer, {
      foreignKey: 'transactionId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  };
  return Transaction;
};
