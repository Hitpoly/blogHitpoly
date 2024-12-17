// src/reducers/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authServices';

const initialState = {
  email: "",
  name: "",
  rol: "",
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const signin = createAsyncThunk(
  'user/signin',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.signin(email, password);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.rol = action.payload.rol;
      state.isAuthenticated = true;
    },
    unsetUser: (state) => {
      state.email = "";
      state.name = "";
      state.rol = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.rol = action.payload.rol;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
