import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await new Promise((r, j) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          r(111111111)
        } else {
          j(222222222)
        }
      })
    })
    return response
  }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserById.pending, (state, action) => {
        console.log('pending')
        console.log('action=====', action)
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        console.log('fulfilled')
        console.log('action=====', action)
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        console.log('rejected')
        console.log('action=====', action)
      })
    }
});
//Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer