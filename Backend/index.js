const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
