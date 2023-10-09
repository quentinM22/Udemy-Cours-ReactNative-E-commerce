import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import globalstyle from '../Styles/globalstyle';

const CourseItem = (props) => {
    return (
        <View style={styles.coursesCard}>
            <View style={styles.coursesCardImageContainer}>
                <Image 
                style={styles.image}
                source={{uri: props.image}}
                />
            </View>
            <View style={styles.coursesCardDescContainer}>
                <Text  style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price.toFixed(2)}€</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    coursesCard:{
        backgroundColor: globalstyle.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: globalstyle.grey,
        borderWidth: 1
    },
    coursesCardImageContainer:{
        width: '100%',
        height: '60%'
    },
    coursesCardDescContainer:{
        alignItems: 'center',
        height: '20%',
        padding: 10
    },
    image:{
        width: '100%',
        height: '100%'  
    },
    title:{
        fontSize: 20,
        marginVertical: 4,
        color: globalstyle.green,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    price:{
        color: globalstyle.darkGrey,
        fontSize: 16
    }
})

export default CourseItem;
