// //sequelize can be here

// //IMPORTS
// const bcrypt = require("bcrypt");

// module.exports = {
//   //SIGN IN
//   login: async (req, res) => {
//     const { username, password } = req.body;

//     const user = await db.check_user_for_login(username);
//     if (!user[0]) {
//       return res.status("User doesn't exist");
//     } else {
//       const authSuccess = bcrypt.compareSync(password, user[0].password);
//       if (authSuccess) {
//         req.session.user = {
//           userID: user[0].id,
//           username: user[0].username,
//         };
//         res.status(200).send(req.session.user);
//       } else {
//         res.status(403).send("Incorrect username and/or password");
//       }
//     }

//     console.log("login"); //to get the whole database, use sequelize.query and then use SQL to select all
//     //Also, Stuart's video at 30:50 talks about inserting using async and await, so you can use that for when you start registering users maybe?
//     res.send("res string");
//   },
// };
