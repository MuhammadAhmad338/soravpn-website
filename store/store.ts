import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import supportReducer from '../reducers/supportSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    support: supportReducer,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
