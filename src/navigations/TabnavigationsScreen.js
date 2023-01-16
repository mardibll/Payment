import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabcatogori } from './datanavigation';
import { TransitionPresets } from '@react-navigation/stack';
import Icons from '../component/ImportIcon';
const Tab = createBottomTabNavigator();
export default function TabnavigationsScreen() {
    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false, headerMode: 'none',
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let iconType;
                if (route.name === 'HomeScreen') {
                    iconName = 'home-outline';
                    iconType = 'Ionicons'
                } else if (route.name === 'Wallet') {
                    iconType = 'Ionicons'
                    iconName = 'document-text-outline';
                } else if (route.name === 'Inbox') {
                    iconType = 'Ionicons'
                    iconName = 'newspaper-outline';
                } else if (route.name === 'Profile') {
                    iconType = 'FontAwesome'
                    iconName = 'user';
                }
                return (
                    <Icons
                        type={iconType}
                        name={iconName}
                        size={22}
                        color={focused ? '#278F02' : 'rgba(0,0,0,0.6)'}
                    />
                )
            },
        })}>
            {tabcatogori.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.component} />
                )
            })}
        </Tab.Navigator>
    )
}