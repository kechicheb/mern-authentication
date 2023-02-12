import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./slices/workout-slice";
const store = configureStore({
  reducer: {
    workouts: workoutSlice,
  },
});
export default store;