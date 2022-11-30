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

// sequelize.authenticate().then(() => {
//   AbortController,
//     set("db", {
//       sequelize,
//     });
// });

//ENDPOINTS

//GET USER LIST
app.get("/users", async (req, res) => {
  const [user_table] = await sequelize.query(`SELECT * FROM user_table;`);
  console.log(user_table);
  res.status(200).send(user_table);
});

//USER AUTH LOGIN
app.post("/auth/login", async (req, res) => {
  const { pwd, user } = req.body;
  console.log(user);
  const dbRes = await sequelize.query(
    `SELECT * FROM user_table WHERE username = '${user}';`
  );
  console.log(dbRes[0][0].password);
  if (dbRes[0][0].password === pwd) {
    res.status(200).send(dbRes[0][0]);
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
