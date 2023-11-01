import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

import CoursesNavigator from './CoursesStackNav';
import  CartNavigator  from './CartStackNav'
import PaymentsNavigator from './PaymentsStackNav';
import UserNavigator from './UserStackNav';

const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false}}>
        <Drawer.Screen
            name='Home'
            component={CoursesNavigator}
            options={{
                title: "Catalogue",
                drawerIcon: () => <MaterialIcons name="menu" size={24} color="black" />
            }}
        />
          <Drawer.Screen
            name='Cart'
            component={CartNavigator}
            options={{
                title: "Panier",
                drawerIcon: () => <FontAwesome5 name="shopping-basket" size={24} color="black" />
            }}
        />
        <Drawer.Screen
            name='Payment'
            component={PaymentsNavigator}
            options={{
                title: "Achats",
                drawerIcon: () => <FontAwesome5 name="credit-card" size={24} color="black" />
            }}
        />
          <Drawer.Screen
            name='User'
            component={UserNavigator}
            options={{
                title: "Mes cours",
                drawerIcon: () => <FontAwesome5 name="user" size={24} color="black" />
            }}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator