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
  btnName: string;
  onPress: () => void;
  width: number;
  navigation?: any;
}
const Button: FC<Props> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btn, {width: props.width}]}>
      <Text style={styles.name}>{props.btnName} </Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    alignSelf: 'center',
  },
  name: {
    color: '#FFFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 18,
  },
});
