import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: null,
  id: null,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload.room;
      state.id = action.payload.userId;
    }
  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;