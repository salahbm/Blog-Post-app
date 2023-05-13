import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/client/Home';
import Dashboard from '../screens/admin/Dashboard';

const {Navigator, Screen} = createStackNavigator();
export const AppStack: FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
};
