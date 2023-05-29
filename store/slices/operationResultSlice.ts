import { OperationResultType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';


const operationResultSlice = createSlice({
    name: 'client/operationResultSlice',
    initialState: {
        operationStatus: '',
        alertVisible: false,
        alertMessage: '',
    },
    reducers: {
        setOperationResult: (state, action: { payload: OperationResultType }) => {
            return action.payload;
        },
        hideAlert: (state, action: { payload: boolean }) => {
            state.alertVisible = action.payload;
        }
    }
});

export default operationResultSlice.reducer;
export const { setOperationResult, hideAlert } = operationResultSlice.actions;