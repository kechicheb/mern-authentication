import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./slices/workout-slice";
import authSlice from "./slices/auth-slice";
const store = configureStore({
  reducer: {
    workouts: workoutSlice,
    auth: authSlice,
  },
});
export default store;
