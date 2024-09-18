import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSlice } from '../../types/user';

const initialState: { data: UserSlice | null } = {
    data: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserSlice | null>) => {
            state.data = action.payload;
        },
        // loadUserFromLocalStorage: (state) => {
        //     const userData = localStorage.getItem(CONSTANT.USERLOGIN);
        //     if (userData) {
        //         state.data = JSON.parse(userData);
        //     }
        // },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
