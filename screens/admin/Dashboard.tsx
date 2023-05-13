import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Dashboard: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard screen</Text>
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
export default Dashboard;
