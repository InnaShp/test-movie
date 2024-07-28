import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../rtk/api";

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
