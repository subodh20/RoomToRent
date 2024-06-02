const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const sequelize = require("./db");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Successful database connection");
  } catch (e) {
    console.error("Unable to connect to the database", e);
  }
  console.log("Server is running on port " + port);
});

app.get("/", (request, response) => {
  response.json({
    info: "Hello world",
  });
});
