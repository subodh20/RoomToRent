const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const authRoute = require("./routes/AuthenticationRoute");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/status", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send("Database connection successful");
  } catch (e) {
    res.status(500).send("Database connection failed" + e.message);
  }
});

app.use("/auth", authRoute);
sequelize
  .sync()
  .then(() => {
    app.listen(port, async () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((e) => {
    console.error("Unable to connect to the database", e);
  });
