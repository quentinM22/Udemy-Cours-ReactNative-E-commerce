import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Cart from '../Screens/Cart'

import globalstyle from "../Styles/globalstyle"

import CustomHeaderIcon from "../Components/CustomHeaderIcon";
import { useNavigation } from "@react-navigation/native";

const CardStackNav = createNativeStackNavigator();

export const CartNavigator = () => {
  const {navigate} = useNavigation()
  const {openDrawer} = useNavigation()
    return(
        <CardStackNav.Navigator
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
            <CardStackNav.Screen 
            name="Cart"
            component={Cart}
            options={{title: "Panier"}}/>
             
        </CardStackNav.Navigator>
    )
}
export default CartNavigator