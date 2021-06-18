import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './tabnavigator';
import CustomSideBar from './customSideBarMenu';
import Settings from '../screens/settingscreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:TabNavigator},
    Settings:{screen:Settings}
},
    {contentComponent:CustomSideBar},
    {initialRouteName:"Home"}
)

