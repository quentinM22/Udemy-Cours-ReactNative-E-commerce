import { StyleSheet} from 'react-native'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome5 } from '@expo/vector-icons';
import globalstyle from '../Styles/globalstyle'


const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton 
     {...props}
     IconComponent={FontAwesome5}
     iconSize={24}
     color={globalstyle.white}
    />
  )
}

export default CustomHeaderIcon

const styles = StyleSheet.create({})