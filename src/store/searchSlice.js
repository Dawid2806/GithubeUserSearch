import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserFromGitHube = createAsyncThunk(
  "githube/user",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(payload);
      return data;
    } catch (error) {
      if (!error?.respone) {
        throw error;
      }
      return rejectWithValue(error?.respone?.data);
    }
  }
);
const searchUser = createSlice({
  name: "githube/user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserFromGitHube.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserFromGitHube.fulfilled, (state, action) => {
      state.user = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchUserFromGitHube.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action?.payload;
    });
  },
});
export default searchUser.reducer;
