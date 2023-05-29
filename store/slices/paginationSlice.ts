import { createSlice } from '@reduxjs/toolkit';

const paginationReducer = createSlice({
    name: 'client/paginationReducer',
    initialState: {
        pageNumber: 1,
        limit: 4,
    },
    reducers: {
        setPage: (state, action: { payload: number }) => {
            state.pageNumber = action.payload;
        },
        setLimit: (state, action: { payload: number }) => {
            state.limit = action.payload;
        }
    }
});

export default paginationReducer.reducer;
export const { setPage, setLimit } = paginationReducer.actions;