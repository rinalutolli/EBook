import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/Book";
export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});
