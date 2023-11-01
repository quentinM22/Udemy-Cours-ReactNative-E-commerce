import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";


import globalstyle from "../Styles/globalstyle"

import CustomHeaderIcon from "../Components/CustomHeaderIcon";
import { useNavigation } from "@react-navigation/native";

import UserCourses from "../Screens/UserCourses";
import EditUserCourses from "../Screens/EditUserCourses";

const UserStackNav = createNativeStackNavigator();

export const UserNavigator = () => {
  const {navigate} = useNavigation()
  const {openDrawer} = useNavigation()
    return(
        <UserStackNav.Navigator
          screenOptions = {{
            headerStyle: {
              backgroundColor: globalstyle.green
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: globalstyle.white,
            }}
        >
            <UserStackNav.Screen 
            name="User Courses"
            component={UserCourses}
            options={{title: "Mes Cours",
            headerRight:() => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                  <Item 
                      title= "Editer"
                      iconName="plus-square"
                      onPress={()=> navigate("Edit",{
                        title: 'Créer un cours'
                      })}
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
              )}}/>
             <UserStackNav.Screen 
            name="Edit"
            component={EditUserCourses}
            options={({route}) => {
                {
                    title: route.params.title ? route.params.title : "Editer le cours"
                }
            }}/>
        </UserStackNav.Navigator>
    )
}
export default UserNavigator