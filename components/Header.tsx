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
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  onPress?: () => void;
  title: string;
  btn: string;
}
const Header: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name={props.btn} size={25} color="#333" />
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
    paddingLeft: 24,
    paddingRight: 65,
  },

  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.4,
    flex: 1,
    textAlign: 'center',
  },
  back: {
    color: 'blue',
  },
});
