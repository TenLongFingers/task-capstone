//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

const { PORT, CONNECTION_STRING } = process.env;

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

//ENDPOINTS
