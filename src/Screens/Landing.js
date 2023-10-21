import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { useSelector } from "react-redux"
import CourseItem from "../Components/CourseItem"
import EmptyMsg from "../Components/EmptyMsg"

const Landing = () => {
	const {courses} = useSelector((state) => state.courses)
	return courses.length !== 0 ? (
            <FlatList
            data={courses}
            renderItem={({ item }) => (
                <CourseItem i
                mage={item.image} 
                price={item.price} 
                title={item.title}
                viewDetails={() => alert('details')}
                addToCart={()=> alert('panier')}
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
