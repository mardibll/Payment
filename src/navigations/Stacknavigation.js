import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { stack } from './datanavigation';
const Stack = createStackNavigator();
export default function Stacknavigation() {
    return (
        <Stack.Navigator screenOptions={({ route, navigation }) => ({
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false, headerMode: 'none'
        })}>
            {stack.map((item, index) => {
                return (
                    <Stack.Screen key={index} name={item.name} component={item.component} />
                )
            })}
        </Stack.Navigator>
    )
}