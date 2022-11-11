//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnathorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  app.set("db", {
    sequelize,
  });
});

//ENDPOINTS

//SERVER LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});
