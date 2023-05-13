import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Signup: FC = () => {
  return (
    <View style={styles.container}>
      <Text>sign up screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
});
export default Signup;
