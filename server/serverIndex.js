//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const authControl = require("./authController");
const { Sequelize } = require("sequelize");

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

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

//BEGIN USER SESSION
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 60 * 7 },
    secret: SESSION_SECRET,
  })
);

//ENDPOINTS
//User Auth
app.post("/auth/login", authControl.login);

//SERVER LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});
