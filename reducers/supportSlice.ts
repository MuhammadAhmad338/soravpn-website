/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import type { RootState } from '../store/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://api.datascape.site/api'; // Replace with your API

interface SupportData {
    name: string;
    email: string;
    message?: string;
}

interface ContactSupportResponse {
    message: string;
}

interface SupportState {
    support: SupportData | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    success?: string | null;
}

export const submitSupport = createAsyncThunk<
    ContactSupportResponse,
    SupportData,
    { rejectValue: string }
>('auth/resetpassword', async ({ name, email, message }, { rejectWithValue }) => {
    try {
        const res = await axios.post<{ message: string }>(`${API_URL}/support/create`, { name, email, message });
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Failed to reset password');
    }
});

const initialState: SupportState = {
    support: null,
    token: null,
    loading: false,
    error: null,
    success: null
};

const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        clearSupportState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitSupport.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(submitSupport.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload.message;
            })
            .addCase(submitSupport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
            });
    },
});

export const { clearSupportState } = supportSlice.actions;
export const selectSupport = (state: RootState) => state.support;
export default supportSlice.reducer;