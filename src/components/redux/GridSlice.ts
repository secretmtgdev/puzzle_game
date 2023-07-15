import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GridState {
    value: number[][];
}

const initialState: GridState = {
    value: [[1,2,3],[4,5,6],[7,8,NaN]]
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        setGridState: (state, action: PayloadAction<number[][]>) => {
            state.value = action.payload;
        }
    }
});

export const { setGridState } = gridSlice.actions;
export default gridSlice.reducer;
