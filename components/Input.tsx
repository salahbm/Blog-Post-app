import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {width} from '../constants/theme';
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}
const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    marginVertical: 5,
  },
  input: {
    padding: 15,
  },
});

export default Input;
