//ACTIONS
const LOGIN_USER = "LOGIN_USER";

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
