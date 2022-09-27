import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Luna', email: 'meowsalot@gmail.com' },
  { id: 2, name: 'Rex', email: 'dino@gmail.com' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
