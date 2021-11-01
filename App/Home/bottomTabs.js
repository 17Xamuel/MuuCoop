import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import Home from './Screens/Home';
import Mutual from './Screens/Mutual';
import Help from './Screens/Help';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      activeColor="#fff"
      shifting="true"
      initialRouteName="Home"
      screenOptions={{header: () => null}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0dd940',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Mutual"
        component={Mutual}
        options={{
          tabBarLabel: 'Mutual',
          tabBarColor: '#ce03fc',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-people-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: 'Help',
          tabBarColor: '#051E58',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
