import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    index: 0,
};

export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        next: (state) => {
            state.index += 1;
        },
        previous: (state) => {
            state.index -= 1;
        },
        changeIndex: (state, action) => {
            state.index += action.payload;
        },
    },
});
//Action creators are generated for each case reducer function
export const { next, previous, changeIndex } = indexSlice.actions
export default indexSlice.reducer