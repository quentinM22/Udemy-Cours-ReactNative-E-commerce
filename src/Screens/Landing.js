import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CourseItem from "../Components/CourseItem"
import EmptyMsg from "../Components/EmptyMsg"
import { useNavigation } from "@react-navigation/native"
import { addToCart } from "../RTK/Slice/dataSlice"

const Landing = () => {
    const {navigate} = useNavigation()
    const dispatch = useDispatch()
	let {courses} = useSelector((state) => state.courses)
    courses = courses.filter((e)=> e.selected === false)
    const course = useSelector((state)=> state.courses)
    console.log(course.cart)
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        alert('Ajouté au panier')
    }
	return courses.length !== 0 ? (
            <FlatList
            data={courses}
            renderItem={({ item }) => (
               
                <CourseItem 
                image={item.image} 
                price={item.price} 
                title={item.title}
                viewDetails={() => navigate('Details', {
                    courseId: item.id,
                })}
                addToCart={()=>handleAddToCart(item)}
                />
            
            )}
            keyExtractor={(item) => item.id}
            />
	):(
        <EmptyMsg>
           Aucun cours disponible... 😥
        </EmptyMsg>
    )
}

const styles = StyleSheet.create({})

export default Landing
