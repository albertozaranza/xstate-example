import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import Details from '../../screens/Details';
import {Navigation} from '../../constants/navigation';

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={{title: 'Home'}}
          name={Navigation.MainRoutes.HOME}
          component={Home}
        />
        <Stack.Screen
          options={{title: 'Details'}}
          name={Navigation.MainRoutes.DETAILS}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
