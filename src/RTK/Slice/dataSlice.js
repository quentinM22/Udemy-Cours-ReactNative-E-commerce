import { createSlice } from "@reduxjs/toolkit"

import DATA from '../../Data/testData.json'

const initialState = {
	courses: DATA,
   
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
        getReducer: (state, action) =>{

        }
	},
})
export const { getReducer } = dataSlice.actions

export default dataSlice.reducer
