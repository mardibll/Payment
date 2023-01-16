import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './src/navigations/Stacknavigation';
export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigation />
    </NavigationContainer>
  )
}