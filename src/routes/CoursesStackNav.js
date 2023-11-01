import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Landing from "../Screens/Landing";
import CourseInfo from "../Screens/CourseInfo";
// import Cart from "../Screens/Cart";

import globalstyle from "../Styles/globalstyle"

import CustomHeaderIcon from "../Components/CustomHeaderIcon";
import { useNavigation } from "@react-navigation/native";

const CoursesStackNavigator = createNativeStackNavigator();

export const CoursesNavigator = () => {
  const {navigate} = useNavigation()
  const {openDrawer} = useNavigation()
    return(
        <CoursesStackNavigator.Navigator
          screenOptions = {{
            headerStyle: {
              backgroundColor: globalstyle.green
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: globalstyle.white,
            headerRight:() => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                <Item 
                    title= "Panier"
                    iconName="shopping-cart"
                    onPress={()=> navigate("Cart")}
                />
              </HeaderButtons>
              
            ),
            headerLeft:() => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                <Item 
                    title= "Menu"
                    iconName="home"
                    onPress={()=> openDrawer()}
                />
              </HeaderButtons>
            )
          }}

        >
            <CoursesStackNavigator.Screen 
            name="Landing"
            component={Landing}
            options={{title: "Catalogue"}}/>
              <CoursesStackNavigator.Screen 
            name="Details"
            component={CourseInfo}
            options={({route}) => (
              {title: route.params.title}
            )}/>
              {/* <CoursesStackNavigator.Screen 
            name="Cart"
            component={Cart}/> */}
        </CoursesStackNavigator.Navigator>
    )
}
export default CoursesNavigator