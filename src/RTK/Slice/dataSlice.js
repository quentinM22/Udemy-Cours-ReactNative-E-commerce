import { createSlice } from "@reduxjs/toolkit"

import DATA from '../../Data/testData.json'
import moment from "moment"



const initialState = {
	courses: DATA,
	userCourses:DATA.filter(e => e.instructorId === '1'),
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
		},
		deleteCourse:(state, action) => {
			const course = action.payload // === item.id
			const indexCourse = state.userCourses.findIndex(e => e.id === course.id)
			const newUserCourses = [... state.userCourses]
			newUserCourses.splice(indexCourse, 1)
			state.userCourses = newUserCourses
			// Liste Catalogue
			const newCourse = state.courses.filter(e => e.id != course.id)
			state.courses = newCourse
			// Panier
			const newCartCourses = [... state.cart]
			const indexCart = state.cart.findIndex(e => e.id === course.id)
			newCartCourses.splice(indexCart, 1)
			state.cart = newCartCourses
			state.total -= course.price
		},
		updateCourse:(state, action)=>{
			const course = action.payload
			const indexCourse = state.userCourses.findIndex(e => e.id === course.courseId)
			const courseUpdate = {
				"id": course.courseId,
				"title": course.title,
				"description": course.description,
				"image": course.img,
				"price": course.price,
				"selected": state.userCourses[indexCourse].selected,
				"instructorId": state.userCourses[indexCourse].instructorId,
			}
			const newUserCourses = [...state.userCourses ]
			newUserCourses[indexCourse] = courseUpdate
			state.userCourses =  newUserCourses

			

			const indexDataCourse = state.courses.findIndex(e => e.id === course.courseId)
			// console.log(indexDataCourse)
			const newDataCourse = [...state.courses]
			newDataCourse[indexDataCourse] = courseUpdate
			state.courses = newDataCourse
		},
		addCourse:(state, action) => {
			const course = action.payload
			const newCourse = {
				"id": Date.now().toString(),
				"title": course.title,
				"description": course.description,
				"image": course.img,
				"price": course.price,
				"selected": false,
				"instructorId": '1',
			}
			const newUserCourses = [...state.userCourses]
			state.userCourses = newUserCourses.concat(newCourse)

			const newDataCourse = [...state.courses]
			state.courses = newDataCourse.concat(newCourse)
		}
	},
})
export const { addToCart, removeCourseCart, addPayement, deleteCourse, updateCourse, addCourse } = dataSlice.actions

export default dataSlice.reducer
