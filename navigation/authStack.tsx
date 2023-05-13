import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../authentication/SignUp';
import Login from '../authentication/LogIn';

const {Navigator, Screen} = createStackNavigator();
export const AuthStack: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Signup" component={Signup} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
