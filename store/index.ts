import { configureStore } from "@reduxjs/toolkit";

import clientReducer from './slices/clientSlice';

const store = configureStore({
  reducer: {
    clientReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;