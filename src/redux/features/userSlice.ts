import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { CONSTANT } from '../../constants/constant';

interface UserState {
  data: User | null;
  token: string;
}

const initialState: UserState = {
  data: null,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.data) {
        state.data = { ...state.data, ...action.payload };
      }
    },
    setToken: (state, action: PayloadAction<Partial<string>>) => {
      if (state.data) {
        state.token = action.payload;
      }
    },
    reset: (state) => {
      state.data = null;
      state.token = '';
    },
    loadUserFromLocalStorage: (state) => {
      const userData = localStorage.getItem(CONSTANT.USERLOGIN);
      if (userData) {
        state.data = JSON.parse(userData);
      }
    },
  },
});

export const { setUser, updateUser, setToken, reset, loadUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
