"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      accountType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accountBalance: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      accountStatus: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "active"
      },
      accountNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Accounts");
  }
};