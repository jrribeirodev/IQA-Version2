import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabHomeScreen from '../screens/RegisterLocation'
import TabSearchScreen from '../screens/Search'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();
export default () => (
    <Tab.Navigator
     
        screenOptions={({route})=>({
        tabBarIcon:()=>{
            let iconSource = null;
            switch(route.name){
                case 'Home':
                    iconSource=require('../assets/home.png');
                    break;
                    case 'Search':
                        iconSource=require('../assets/search.png');
                    break;                  
            }
            return <Image source={iconSource} style={{width:30,height:30}}/>
        }
    })
    
    }
    >
        <Tab.Screen name="Home" component={TabHomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={TabSearchScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
)