import React from 'react';

//navigation
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Login from './Login';
import Register from './Register';

//BottomTabs
import BottomTabs from '../Home/bottomTabs';

const Stack = createStackNavigator();
function StartStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{member_number: ''}}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </>
  );
}

export default StartStack;
