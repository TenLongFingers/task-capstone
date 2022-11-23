//ACTIONS
const LOGIN_USER = "LOGIN_USER";

//INITIAL STATE
// const initialState = {
//   id: null,
//   username: "",
//   password: "",
//   profile_pic: "",
//   isLoggedIn: false,
// };

//SIGNIN ACTION CREATOR
export function loginUser({ userId, username }) {
  return {
    type: LOGIN_USER,
    payload: {
      id: userId,
      username,
    },
  };
}
