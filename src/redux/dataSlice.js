import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "uniTable",
  initialState: {
    unis: [],
  },
  reducers: {
    load: (state, action) => {
      state.unis.push(action.payload);
    },
    addItem: (state, action) => {
      state.unis.push(state.unis[0]);
    },
    deleteItem: (state, action) => {
      state.unis.splice(state.unis.length - 1, 1);
    },
  },
});

export const { load, addItem, deleteItem } = dataSlice.actions;
export default dataSlice.reducer;
