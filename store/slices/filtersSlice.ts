import { createSlice } from '@reduxjs/toolkit';


const filtersReducer = createSlice({
    name: 'client/filtersReducer',
    initialState: {
        searchFilterValue: '',
        columnSort: 'none',
        mapFilters: {
            salary: 0,
            status: '',
            gender: ''
        }
    },
    reducers: {
        setSearchValue: (state, action: { payload: string }) => {
            state.searchFilterValue = action.payload;
        },
        setColumnSort: (state, action: { payload: string }) => {
            state.columnSort = action.payload;
        },
        addMapFilter: (state, action: {
            payload: {
                salary: number,
                status: string,
                gender: string
            }
        }) => {
            state.mapFilters = action.payload;
        }
    }
});

export default filtersReducer.reducer;
export const { setSearchValue, setColumnSort, addMapFilter } = filtersReducer.actions;