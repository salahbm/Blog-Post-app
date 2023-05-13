import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AppStack} from './navigation/appStack';
import {AuthStack} from './navigation/authStack';

function App(): JSX.Element {
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
  console.log(user);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
