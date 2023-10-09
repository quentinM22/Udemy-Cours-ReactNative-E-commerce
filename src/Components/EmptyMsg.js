import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import globalstyle from '../Styles/globalstyle';


const EmptyMsg = ({children}) => {
    return (
        <View>
             <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontWeight: "700",
        color: globalstyle.red,
    }
})

export default EmptyMsg;
