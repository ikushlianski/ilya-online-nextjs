import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [],
  reducers: {
    addSkill(state, action) {
      return state;
    },
    removeSkill(state, action) {
      return state;
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export const skillsReducer = skillsSlice.reducer;
