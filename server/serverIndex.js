//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
// const authControl = require("./authController");
const { Sequelize, AsyncQueueError } = require("sequelize");
const { default: axios } = require("axios");

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
  AbortController,
    set("db", {
      sequelize,
    });
});

//ENDPOINTS

//GET USER LIST
app.get("/users", async (req, res) => {
  const [user_table] = await sequelize.query(`SELECT * FROM user_table;`);
  console.log(user_table);
  res.status(200).send(user_table);
});

//USER AUTH LOGIN
//we may have to change the name of the row in the database
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const [[username]] = await sequelize.query(
    `SELECT * FROM user_table WHERE username = '${username}';`
  );
  if (username.password === password) {
    res.status(200).send(username);
  } else {
    res.status(400).send(null);
  }
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

//SERVER LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});
