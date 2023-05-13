import React, {FC, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/app';
import {AppStack} from './appStack';
import {AuthStack} from './authStack';
const Tabs: FC = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
