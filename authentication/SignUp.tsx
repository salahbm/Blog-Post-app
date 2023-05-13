import React, {FC, useState} from 'react';
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
import Input from '../components/Input';
import Button from '../components/Button';
import {width} from '../constants/theme';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const Signup: FC = props => {
  const [user, setUser] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });

  const signup = async () => {
    if (user.username && user.email && user.password) {
      try {
        const users = await firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password);
        if (users) {
          await firebase
            .firestore()
            .collection('users')
            .doc(users?.user?.uid)
            .set({
              username: user.username,
              email: user.email,
              password: user.password,
            });
          Alert.alert('Success');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert(`Error`, 'Missing Fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up </Text>
      <Input
        placeholder="Name"
        onChangeText={text =>
          setUser(prevUser => ({...prevUser, username: text}))
        }
      />
      <Input
        placeholder="Email"
        onChangeText={text => setUser(prevUser => ({...prevUser, email: text}))}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={text =>
          setUser(prevUser => ({...prevUser, password: text}))
        }
      />
      <View
        style={{
          flex: 0.4,
        }}
      />
      <Button btnName="Sign up" width={width * 0.9} onPress={signup} />
      <Text style={styles.text}>Already have account ?</Text>
      <Button
        btnName="Login"
        width={width * 0.5}
        onPress={() => props.navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#333',
    lineHeight: 30,
    marginVertical: 100,
    alignSelf: 'center',
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '800',
    color: '#AEB6BF',
    lineHeight: 24,

    alignSelf: 'center',
  },
});
export default Signup;
