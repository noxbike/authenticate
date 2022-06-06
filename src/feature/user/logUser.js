import { createSlice } from "@reduxjs/toolkit";


export const logUser = createSlice({
    name: 'user',
    initialState: {
        value: false
    },
    reducers:{
        login: (state, action) =>{
            state.value = action.payload
        },
        auth: (state, action) => {
                state.value = action.payload
        },
        logout: state => {
            state.value = false
        }
    }
})

export const { login, logout, auth } = logUser.actions

export default logUser.reducer