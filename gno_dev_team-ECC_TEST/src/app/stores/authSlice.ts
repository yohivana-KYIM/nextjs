import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  tokenUser: string | null;
}

const initialState: AuthState = {
  user: null,
  tokenUser: null,
};

const authSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setTokenUser: (state, action: PayloadAction<string | null>) => {
      state.tokenUser = action.payload;
    },
  },
});

export const { setUser, setTokenUser } = authSlice.actions;

export default authSlice.reducer;
