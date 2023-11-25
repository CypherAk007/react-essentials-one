import { configureStore } from "@reduxjs/toolkit";
import switchReducer from './switch'
// import 
const store = configureStore({
    reducer:{
        switch:switchReducer
    }
})

export default store;