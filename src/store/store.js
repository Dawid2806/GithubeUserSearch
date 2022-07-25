import { configureStore } from "@reduxjs/toolkit";
import searchUser from "./searchSlice";
export const store = configureStore({
  reducer: {
    searchUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
