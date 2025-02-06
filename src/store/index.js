import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counter/index'
import usersReducer from '../slices/usersSlice/index';

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
})