import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  initialState: [],
  name: "workoutSlice",
  reducers: {
    setWorkouts: (state, action) => {
      return action.payload;
    },
    createWorkout: (state, action) => {
      return [...state, action.payload];
    },
    deleteWorkout: (state, action) => {
      return state.filter((x) => x.id !== action.payload._id);
    },
  },
});
export const { setWorkouts, createWorkout, deleteWorkout } =
  workoutSlice.actions;
export default workoutSlice.reducer;
