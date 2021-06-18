import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/donatescreen';
import Exchange from '../screens/requestscreen';

const TabNavigator = createBottomTabNavigator({
    Home:{screen:Home,
    navigationOptions:{
        tabBarIcon:<Image 
                style={{width:20, height:20}}
               /*{ source={require('../assets/request-list.png')} }*//>,
        tabBarLabel:'Home Screen'
    }},
    Exchange:{screen:Exchange,
    navigationOptions:{
        tabBarIcon:<Image 
            style={{width:20, height:20}}
           /*{ source={require('../assets/request-book.png')} }*//>,
        tabBarLabel:'Exchange Screen'
    }}
})

export default TabNavigator;