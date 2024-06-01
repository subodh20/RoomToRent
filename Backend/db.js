const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "RoomToRent",
  password: "Sub1995",
  port: 5432,
});
