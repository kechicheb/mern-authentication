import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
let initial = null;
if (user) {
  initial = user;
}

export const authSlice = createSlice({
  initialState: initial,
  name: "authSlice",
  reducers: {
    authLogin: (state, action) => {
      return action.payload;
    },
    authLogout: (state, action) => {
      return null;
    },
  },
});
export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;
