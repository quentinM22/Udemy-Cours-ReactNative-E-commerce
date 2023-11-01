import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import globalstyle from '../Styles/globalstyle'
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { deleteCourse } from '../RTK/Slice/dataSlice';
import EmptyMsg from '../Components/EmptyMsg'
const UserCourses = () => {
    const {navigate} = useNavigation()
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses.userCourses)
    const handlerDelete = (item) => {
        Alert.alert('Attention','Voulez-vous supprimer ce cours?', [
            {text: 'Non'},
    { text: 'Oui',
       onPress:() => dispatch(deleteCourse(item)),
    }
    ])   
    }
    
    return (
        courses.length !== 0 ? ( 
            <FlatList
                data={courses} 
                renderItem={({ item }) => (
                   <View style={styles.coursesContainer}>
                        <View style={styles.coursesInfos}>
                            <Text numberOfLines={1} style={styles.coursesTitle}>{item.title}</Text>
                            <Text style={styles.coursesPrice}>{item.price} €</Text>
                        </View>
                        <View style={styles.btnContainer}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={()=> navigate('Edit', {
                                courseId: item.id
                            })}
                        >
                        <AntDesign name="edit" size={24} color={globalstyle.green} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>handlerDelete(item)}
                        >
                        <AntDesign name="delete" size={24} color={globalstyle.red} />
                        </TouchableOpacity>
                        </View>
                   </View>
                )}
                keyExtractor={(item) => item.id}
            />
        ) : (
            <EmptyMsg>
                Aucun cours à afficher
            </EmptyMsg>
        )
    );
}

const styles = StyleSheet.create({
    coursesContainer:{
        backgroundColor: globalstyle.white,
        borderRadius: 10,
        marginHorizontal: 17,
        marginVertical: 10,
        padding: 10
    },
    coursesInfos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    coursesTitle:{
        color: globalstyle.green,
    },
    coursesPrice: {
        color: globalstyle.red
    },
    btn:{
        marginVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 5
    }
})

export default UserCourses;
