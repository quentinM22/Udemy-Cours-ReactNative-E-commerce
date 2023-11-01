import React from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import globalstyle from '../Styles/globalstyle';
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';

const PaidItems = ({paymentDetails}) => {
    const [toggle, setToggle] = useState(false)
    console.log(paymentDetails.course);
    return (
        <ScrollView style={styles.paidCoursesContainer}>
            <View style={styles.paidCourses}>
                <Text style={styles.totalPaid}>{paymentDetails.total.toFixed(2)} €</Text>
                <Text style={styles.date}>{paymentDetails.date}</Text>
            </View>
            <TouchableOpacity style={styles.iconBtn}>
            <FontAwesome name={toggle ?"minus" : "plus"} size={24} color="black" onPress={()=> setToggle(!toggle)}/>
            </TouchableOpacity>
            {
                toggle ? (
                    <View>
                       {
                       paymentDetails.course.map(e => (
                        <View style={styles.courseContainer} key={e.id}>
                            <Text numberOfLines={1} style={styles.title}>{e.title}</Text>
                            <Text  style={styles.price}>{e.price} €</Text>
                        </View>
                       )
                    )}
                    </View>
                ): null
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    paidCoursesContainer:{
    backgroundColor: globalstyle.white,
    borderRadius: 10,
    margin: 10,
    padding: 10
    },
    paidCourses:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100%',
      marginBottom: 15  
    },
    totalPaid:{
        fontSize: 18
    },
    date:{
        fontSize: 16
    },
    iconBtn:{
        alignSelf: 'flex-end'
    },
    courseContainer:{
        backgroundColor: globalstyle.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10 ,
        margin: 9
    },
    title:{
        color: globalstyle.green,
        fontWeight: 'bold',
        fontSize: 16
    },
    price:{
        color: globalstyle.red,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default PaidItems;
