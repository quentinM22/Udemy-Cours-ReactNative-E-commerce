import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './Slice/dataSlice'


const store = configureStore({
   reducer: {
    courses: dataReducer
   }
})

export default store;