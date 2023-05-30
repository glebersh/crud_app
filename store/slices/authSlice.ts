import { createSlice } from '@reduxjs/toolkit';

type AuthResultPayload = {
    error: string | null | undefined,
    status: number | null,
    ok: boolean | null,
    url: string | null
};

const initialState: AuthResultPayload = {
    error: null,
    status: null,
    ok: null,
    url: null
};

const authReducer = createSlice({
    name: 'client/loginReducer',
    initialState,
    reducers: {
        setAuthResult: (state, action: { payload: AuthResultPayload }) => {
            return action.payload;
        }
    }
});

export default authReducer.reducer;
export const { setAuthResult } = authReducer.actions;