import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import globalstyle from '../Styles/globalstyle';
import { MaterialIcons } from '@expo/vector-icons';

const CourseInCart = (props) => {
    return (
        <View style={styles.coursesContainer}>
            <Text numberOfLines={1} style={styles.coursesTitle}>{props.title}</Text>
            <Text style={styles.coursesPrice}>{props.price.toFixed(2)} €</Text>
            <TouchableOpacity
            onPress={props.onDelete}
            >
                <MaterialIcons name="delete" size={24} color={globalstyle.red} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    coursesContainer:{
        backgroundColor: globalstyle.white,
        borderRadius: 10, 
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10
    },
    coursesTitle:{
        width:'60%',
    },
    coursesPrice:{
       textAlign: 'right',
       paddingRight: 10,
       width: '20%' 
    }
})

export default CourseInCart;
