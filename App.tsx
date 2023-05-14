import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AppStack} from './navigation/appStack';
import {AuthStack} from './navigation/authStack';
import {app} from './constants/firebase';
import {ContextData} from './constants/contexData';
function App(): JSX.Element {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged((userData: any) => {
      console.log(`userData: ${userData}`);

      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });
    subscribe();
  }, []);
  console.log(`app:  ${app}`);

  return (
    <ContextData.Provider value={{setUser}}>
      <NavigationContainer>
        {user !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </ContextData.Provider>
  );
}

export default App;
