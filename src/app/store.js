import { configureStore } from '@reduxjs/toolkit'
import logUserReducer from '../feature/user/logUser';

export const store = configureStore({
    reducer:{
        user: logUserReducer,
    }
})