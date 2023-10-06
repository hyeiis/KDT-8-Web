import { createSlice } from "@reduxjs/toolkit";

// createSlice(): 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    puls(state, action) {
      console.log(action);
      state.counter += action.payload.ten + action.payload.twenty;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
