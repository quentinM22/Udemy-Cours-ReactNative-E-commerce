import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Payments from "../Screens/Payments";

import globalstyle from "../Styles/globalstyle"

import CustomHeaderIcon from "../Components/CustomHeaderIcon";
import { useNavigation } from "@react-navigation/native";

const PaymentStackNav = createNativeStackNavigator();

export const PaymentsNavigator = () => {
  const {navigate} = useNavigation()
  const {openDrawer} = useNavigation()
    return(
        <PaymentStackNav.Navigator
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
            <PaymentStackNav.Screen 
            name="Payments"
            component={Payments}
            options={{title: "Mes achats"}}/>
             
        </PaymentStackNav.Navigator>
    )
}
export default PaymentsNavigator