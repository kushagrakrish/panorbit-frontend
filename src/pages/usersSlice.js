import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://panorbit.in/api/users.json";

const initialState = {
  loading: true,
  users: [],
};

// Fetches user's from api
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.users;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      }),
});

export default usersSlice.reducer;
