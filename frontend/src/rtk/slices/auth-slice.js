import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  initialState: [],
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
