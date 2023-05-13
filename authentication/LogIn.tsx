import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header';
const Login: FC = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
});
export default Login;
