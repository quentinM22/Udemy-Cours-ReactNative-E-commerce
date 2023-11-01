import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const EditUserCourses = () => {
    const {route} = useRoute()
    const courseId = route.params.coursId
    console.log(courseId)
    return (
        <View>
            <Text>Edit courses</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default EditUserCourses;
