import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  initialState: [],
  name: "authSlice",
  reducers: {
    Login: (state, action) => {
      return action.payload;
    },
    Logout: (state, action) => {
      return null;
    },
  },
});
export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;
