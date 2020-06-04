require("dotenv").config();

module.exports = {
  development: {
    database: "banknow",
    username: "postgres",
    password: "rasululah01",
    host: "127.0.0.1",
    dialect: "postgres",
  },

  test: {
    database: "dsbtsiaa",
    username: "dsbtsiaa",
    password: "ybAL_MVz3zIjXhLhgC49B0Ioz9Ccghzm",
    host: "drona.db.elephantsql.com",
    dialect: "postgres",
  },
  //  production: {
  //     database: 'iamtoxuy',
  //     username: 'iamtoxuy',
  //     password: '4MORM7PLbFUZDx--ScyXfPttZ3GDcl_D',
  //     host: 'ruby.db.elephantsql.com',
  //     dialect: 'postgres'
  //   }
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
