import React, {FC} from 'react';
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

const Home: FC = props => {
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <Button btnName="logout" width={width * 0.9} />
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
export default Home;
