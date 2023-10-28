import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import globalstyle from '../Styles/globalstyle'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { addToCart } from '../RTK/Slice/dataSlice'

const CourseInfo = () => {
    const {params} = useRoute()
    const navigation = useNavigation()
    const {courses} = useSelector((state) => state.courses)
    const dispatch = useDispatch()
    const course  = courses.find(e => e.id === params.courseId)
    useEffect(()=> {
        navigation.setOptions({
            title: course.title
        })
    }, [navigation])
    const handleAddToCart = () => {
        dispatch(addToCart(course))
        alert('Ajouté au panier')
        navigation.goBack()
    }
  return (
    <View>
    <ScrollView style={styles.scroll}>
        <Image 
        source={{uri: course.image}}
        style={styles.image}
        />
        <View style={styles.details}>
            <Text style={styles.description}>{course.description}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <Text style={styles.description}>{course.description}</Text>
        </View>
    </ScrollView>
    <View style={styles.footer}>
        <View style={styles.footerTop}>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{course.price.toFixed(2)} €</Text>
            </View>
        </View>
        <View style={styles.footerBottom}>
        <FontAwesome5 name="chevron-left" size={24} color={globalstyle.white} onPress={()=>navigation.goBack()}/>
        <TouchableOpacity
        onPress={handleAddToCart}
        >
            <View style={styles.btnAddToCart}>
                <FontAwesome5 name="shopping-basket" size={24} color={globalstyle.green} />
            </View>
        </TouchableOpacity>
       
        </View>
    </View>
    </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: globalstyle.white,
        height: '80%',
    },
    image: {
        width: '100%',
        height: 250
    },
    details:{
        padding: 20, 
        alignItems: 'center'
    },
    description:{
        color: globalstyle.darkGrey,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 15
    },
    footer:{
        height: "20%",
    },
    footerTop:{
        height: "40%",
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerBottom:{
        backgroundColor: globalstyle.green,
        height: "60%",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    priceWrapper:{
        paddingRight: 40
    },
    price:{
        fontSize: 24,
        color: globalstyle.red
    },
    btnAddToCart:{
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 9,
        backgroundColor: globalstyle.lightOrange
    }
})