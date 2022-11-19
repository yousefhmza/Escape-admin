import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from '../../screens/Auth';
import HomeScreen from '../../screens/Home';
import SplashScreen from '../../screens/Splash';

export type TAppStack = {
  Splash: undefined;
  Auth: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<TAppStack>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
