import { createSlice } from "@reduxjs/toolkit"

import DATA from '../../Data/testData.json'
import moment from "moment"



const initialState = {
	courses: DATA,
  	cart: [],
	total: 0,
	payments: []
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const course = action.payload
			const newCourse = {"id": course.id, "price": course.price, "title": course.title};

			state.cart = [...state.cart, newCourse]
			state.total = state.total += course.price
			const indexCourse = state.courses.findIndex(e => e.id === course.id)
			state.courses = [... state.courses]
			state.courses[indexCourse].selected = true
		},
		removeCourseCart:(state, action) => {

			const course = action.payload
			// Recuperation index dans cart pour la suppression
			const indexCourse = state.cart.findIndex(e => e.id === course.id)
			// Recuperation index dans course pour le selected
			const indexCourseInCourses = state.courses.findIndex(e=> e.id === course.id)
			// Création Clone state.card
			let newCartCourses = [... state.cart]
			// Suppression course via index dans le tableau newCartCourses
			newCartCourses.splice(indexCourse, 1)
			// Initialisation state.cart  
			state.cart = newCartCourses
			// soustraire le prix du course supprimer au total
			state.total -= course.price
			// Changement Selected pour affichage Landing
			state.courses[indexCourseInCourses].selected = false

		},
		addPayement:(state, action) => {
			const cart = action.payload
			const newPayment = {
				"id": Date.now().toString(), 
				"course": cart.cart,
				"total": cart.total,
				"date": moment(new Date()).format('DD MM YYYY hh:mm')
			}
			state.payments = [... state.payments, newPayment]
			state.cart = []
			state.total = 0
		}
	},
})
export const { addToCart, removeCourseCart, addPayement } = dataSlice.actions

export default dataSlice.reducer
