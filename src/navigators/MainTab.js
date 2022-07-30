import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabHomeScreen from '../screens/Home'
import TabFindScreen from '../screens/Find'

const Tab = createBottomTabNavigator();
export default () => (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={TabHomeScreen}/>
        <Tab.Screen name="Find" component={TabFindScreen}/>
    </Tab.Navigator>
)