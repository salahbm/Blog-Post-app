import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AppStack} from './appStack';
import {AuthStack} from './authStack';

const MainNavigation: FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged((userData: any) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });
    subscribe();
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
