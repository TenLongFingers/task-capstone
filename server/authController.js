//sequelize can be here

//IMPORTS
const bcrypt = require("bcrypt");

module.exports = {
  //SIGN IN
  login: async (req, res) => {
    const db = req.app.get("db");
    const { user, pwd } = req.body;

    const userLogin = await db.check_user_for_login(user);
    if (!userLogin[0]) {
      return res.status("User doesn't exist");
    } else {
      const authSuccess = bcrypt.compareSync(pwd, userLogin[0].pwd);
      if (authSuccess) {
      }
    }

    console.log("login"); //to get the whole database, use sequelize.query and then use SQL to select all
    //Also, Stuart's video at 30:50 talks about inserting using async and await, so you can use that for when you start registering users maybe?
    res.send("res string");
  },
};
