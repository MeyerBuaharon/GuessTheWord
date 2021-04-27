import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.menu.name}
      screenOptions={{
        headerStyle: {backgroundColor: '#2F2F2F'},
        headerTitleStyle: {
          fontFamily: 'PressStart2P-Regular',
          fontWeight: '200',
          color: '#aaaaaa',
        },
        headerTintColor: '#aaaaaa',
      }}>
      {Object.keys(routes).map((key: string, index) => (
        <Stack.Screen
          key={index}
          name={routes[key as keyof typeof routes].name}
          component={routes[key as keyof typeof routes].component}
        />
      ))}
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default StackNavigation;
