import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchWorkouts = createAsyncThunk(
  "workoutSlice/fetchWorkouts",
  async () => {
    const response = await fetch("/api/workouts");
    const data = await response.json();
    return data;
  }
);
export const workoutSlice = createSlice({
  initialState: [],
  name: "workoutSlice",
  reducers: {
    createWorkout: (state, action) => {
      return [...state, action.payload];
    },
    deleteWorkout: (state, action) => {

      return state.filter((x) => x.id !== action.payload._id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { createWorkout, deleteWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
