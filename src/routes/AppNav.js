import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CoursesNavigator from "./CoursesStackNav";

export const AppNav = () => 
{
    return ( 
        <NavigationContainer>
                <CoursesNavigator />
        </NavigationContainer>
    )
}
