import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CoursesNavigator from "./CoursesStackNav";
import DrawerNavigator from "./DrawerNav";

export const AppNav = () => 
{
    return ( 
        <NavigationContainer>
                {/* <CoursesNavigator /> */}
                <DrawerNavigator />
        </NavigationContainer>
    )
}
