import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import loginSlice from "./login";

const store = configureStore({
  reducer: { counter: counterSlice, login: loginSlice },
});

export default store;
