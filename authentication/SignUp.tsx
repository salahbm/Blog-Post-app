import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {width} from '../constants/theme';

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
          position: 'absolute',
          bottom: 60,
          alignSelf: 'center',
        }}>
        <Button
          btnName="Sign up"
          width={width * 0.9}
          onPress={() => console.log('dgsokabhdfg')}
        />
        <Text style={styles.text}>Already have account ?</Text>
        <Button
          btnName="Login"
          width={width * 0.5}
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
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
    color: '#e1e3e2',
    lineHeight: 24,

    alignSelf: 'center',
  },
});
export default Signup;
