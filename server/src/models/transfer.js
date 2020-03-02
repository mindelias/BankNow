"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define(
    'Transfer',
    {
      transferAccountNumber: { type: DataTypes.STRING, allowNull: false },
      transferToAccountNumber: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.DOUBLE, allowNull: false },
      transactionId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Transfer.associate = function(models) {
    // associations can be defined here
    Transfer.belongsTo(models.Account, {
      foreignKey: 'accountNumber',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    Transfer.belongsTo(models.Transaction, {
      foreignKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  };
  return Transfer;
};
