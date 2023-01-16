import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src2/home';
import Detailpruck from '../../src2/home/detailpruck';

const Stack = createStackNavigator();
export default function StackNavigations() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="detailpruck" component={Detailpruck} />  
    </Stack.Navigator>
  )
}