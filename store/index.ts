import { configureStore } from "@reduxjs/toolkit";

import formReducer from './slices/formSlice';
import operationResultReducer from './slices/operationResultSlice';
import filtersReducer from './slices/filtersSlice';
import paginationReducer from './slices/paginationSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    formReducer,
    filtersReducer,
    paginationReducer,
    operationResultReducer,
    authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;