const { Sequelize } = require("sequelize");
//either we can use pool or Sequelize, if we use Sequelize it creates the pool itself
// const { Pool } = require("pg");
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "RoomToRent",
//   password: "Sub1995",
//   port: 5432,
// });
// module.exports = pool;

const sequelize = new Sequelize("RoomToRent", "postgres", "Sub1995", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
module.exports = sequelize;
