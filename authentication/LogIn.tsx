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
import Header from '../components/Header';

const Login: FC = props => {
  const [user, setUser] = useState<{
    password: string;
    email: string;
  }>({
    password: '',
    email: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" onPress={() => props.navigation.goBack()} />
      <View style={{margin: 30}} />

      <Input
        placeholder="Email"
        onChangeText={text => setUser(prevUser => ({...prevUser, email: text}))}
      />
      <Input
        placeholder="Password"
        onChangeText={text =>
          setUser(prevUser => ({...prevUser, password: text}))
        }
        secureTextEntry
      />

      <View
        style={{
          position: 'absolute',
          bottom: 60,
          alignSelf: 'center',
        }}>
        <Button
          btnName="Login"
          width={width * 0.9}
          onPress={() => console.log('dgsokabhdfg')}
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

  text: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '800',
    color: '#e1e3e2',
    lineHeight: 24,

    alignSelf: 'center',
  },
});
export default Login;
