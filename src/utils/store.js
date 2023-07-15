import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../pages/usersSlice";
import singleUserSlice from "../pages/singleUserSlice";

// Redux Store to maintain application state
const store = configureStore({
  reducer: {
    activeUser: singleUserSlice, // Maintains state of individual user
    users: usersSlice, // Maintains state of Users
  },
});

export default store;
