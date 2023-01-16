import React from "react";
import FoodCaregoriSreen from "../screen/FoodCaregoriSreen";
import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/ScreenHome/HomeScreen";
import SignUpScreen from "../screen/SignUpScreen";
import TabnavigationsScreen from "./TabnavigationsScreen";
export const stack = [
    {
        name: 'LoginScreen',
        component: LoginScreen

    },
    {
        name: 'SignUpScreen',
        component: SignUpScreen

    },
    {
        name: 'TabnavigationsScreen',
        component: TabnavigationsScreen

    },

]

export const tabcatogori = [
    // {
    //     name: 'HomeScreen',
    //     component: HomeScreen
    // },
    {
        name: 'FoodCaregoriSreen',
        component: FoodCaregoriSreen
    }

]