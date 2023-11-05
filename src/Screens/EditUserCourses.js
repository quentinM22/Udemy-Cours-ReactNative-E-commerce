import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import globalStyle from '../Styles/globalstyle'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, updateCourse } from '../RTK/Slice/dataSlice';

const EditUserCourses = () => {
    const route = useRoute()
    const courseId = route.params.courseId
    const dispatch = useDispatch()
    const course = useSelector(state => state.courses.userCourses.find(e => e.id === courseId))
    const [title, setTitle] = useState(course ? course.title : "")
    const [img, setImg] = useState(course ? course.image : "")
    const [description, setDescription] = useState(course ? course.description : "")
    const [price, setPrice] = useState(course ? course.price : 0)
    
  const handlerSubmit = () => {
    if(courseId){
        // Mise a jour
        dispatch(updateCourse({courseId, title, description, img, price}))
        alert("Cour modifié")
    }else{
        // Création
        dispatch(addCourse({ title, description, img, price}))
        alert("Cour ajouté")
    }
  }

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Titre</Text>
                    <TextInput
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image (URL)</Text>
                    <TextInput
                        value={img}
                        onChangeText={(value) => setImg(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        value={description}
                        onChangeText={(value) => setDescription(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Prix</Text>
                    <View style={styles.formControlPrice}>
                   
                    <TextInput
                        value={price}
                        onChangeText={(value) => setPrice(parseInt(value))}
                        style={styles.inputPrice}
                    />
                    <Text>€</Text>
                         
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={() => handlerSubmit()}
                >
                    <View style={styles.submitBtn}> 
                        <Text style={styles.submitBtnText}>Valider</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor: globalStyle.white,
        borderRadius: 10,
        margin: 20,
        padding:20
    },
    formControl:{
        width: "100%",
    },
    label:{
        marginVertical: 15,
        color: globalStyle.green,
        fontWeight: 'bold'
    },
    input:{
        padding: 10,
        borderColor: globalStyle.green,
        borderWidth: 0.5,
        borderRadius: 6
    },
    inputPrice:{
        padding: 10,
        borderColor: globalStyle.green,
        borderWidth: 0.5,
        borderRadius: 6,
        width: '99%'
    },  
    submitBtn:{
        marginTop: 25,
        padding: 20,
        backgroundColor: globalStyle.lightOrange,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitBtnText:{
        color: globalStyle.red
    },
    formControlPrice:{
        flexDirection: 'row',
        alignItems:'center',
        width: '100%'
    }
})

export default EditUserCourses;
