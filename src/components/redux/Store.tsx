import { configureStore } from "@reduxjs/toolkit";
import gridReducer from './GridSlice';

export const store = configureStore({
    reducer: gridReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;