import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: { name: '유비', age: 20 },

    reducers: {
        changeName(state) {
            state.name = '관우';
        },

        increase(state, action) {
            state.age += action.payload;
        },

        decrease(state) {
            state.age -= 1;
        }
    }
})

export const { changeName, increase, decrease } = user.actions;

export default user.reducer;