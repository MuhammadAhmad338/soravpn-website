import axios from 'axios';
import type { RootState } from '../store/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://192.168.18.78:5000/api/auth'; // Replace with your API

// Types
interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface SignUpData {
  name?: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

// --- Async Thunks ---
export const signupUser = createAsyncThunk<
  AuthResponse,
  SignUpData,
  { rejectValue: string }
>('auth/signupUser', async (userData, { rejectWithValue }) => {
  try {
    const res = await axios.post<AuthResponse>(`${API_URL}/signup`, userData);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Signup failed');
  }
});

export const signinUser = createAsyncThunk<
  AuthResponse,
  SignInData,
  { rejectValue: string }
>('auth/signinUser', async (credentials, { rejectWithValue }) => {
  try {
    const res = await axios.post<AuthResponse>(`${API_URL}/login`, credentials);

    // Store the token immediately after successful login
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
    }

    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Signin failed');
  }
});


// --- Slice ---
const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
      // Sign In
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
