//IMPORTS
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

const PORT = 5000;

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize();

//ENDPOINTS
