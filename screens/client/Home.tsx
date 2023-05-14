import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {width} from '../../constants/theme';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Home: FC = props => {
  const [msg, setMsg] = useState<string | null>(null);
  const [currentUserData, setCurrentUserData] = useState<any>(null);
  const signout = () => {
    firebase.auth().signOut();
  };
  const post = async () => {
    if (msg) {
      const data = {
        msg,
        timeStamp: Date.now(),
        approved: false,
      };
      try {
        await firebase.firestore().collection('posts').add(data);
      } catch (error) {
        Alert.alert(`Error to post the message`);
      }
      Alert.alert(`Sent to admin to approve`);
    } else {
      Alert.alert(`Missing`);
    }
  };
  const currentUser = async () => {
    const fetchUser = await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser?.uid)
      .get();
    setCurrentUserData({id: fetchUser.id, ...fetchUser.data()});
  };
  useEffect(() => {
    currentUser();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home Screen" btn="home-outline" />
      <TextInput
        style={styles.input}
        multiline={true}
        placeholder="enter the msg"
        onChangeText={text => setMsg(text)}
      />
      {currentUserData ? (
        currentUserData.isAdmin ? (
          <Button
            btnName="Dashboard"
            width={width * 0.9}
            onPress={() => props.navigation.navigate('Dashboard')}
          />
        ) : null
      ) : null}
      <Button btnName="Post" width={width * 0.9} onPress={post} />
      <Button btnName="logout" width={width * 0.9} onPress={signout} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
  input: {
    height: 100,
    width: width * 0.9,
    backgroundColor: '#e3e3e3',
    borderRadius: 12,
    marginVertical: 10,
    padding: 15,
  },
});
export default Home;
