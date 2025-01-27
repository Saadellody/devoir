// src/actions/authActions.js
export const login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};
