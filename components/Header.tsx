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
interface Props {
  onPress: () => void;
  title: string;
}
const Header: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.btn}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}> {props.title} </Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  btn: {
    alignSelf: 'flex-start',
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  back: {
    color: 'blue',
  },
});
