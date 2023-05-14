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
import Button from './Button';
import {width} from '../constants/theme';
interface Props {
  msg: string;
  approved: string;
  timeStamp: number;
  onApprove: () => void;
  onReject: () => void;
}
const formatTime = (timeStamp: number): string => {
  const calculatedTime = Date.now() - timeStamp;

  const seconds = (Math.floor(calculatedTime / 1000) % 60) + `s`;
  const minutes = (Math.floor(calculatedTime / 1000 / 60) % 60) + `m`;
  const hours = Math.floor(calculatedTime / 1000 / 60 / 60) + `d`;

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const RenderPendingPosts: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{props.msg} </Text>
      <Text style={styles.time}>{formatTime(props.timeStamp)} ago</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={props.onApprove}
          style={[styles.btn, {width: width * 0.36}]}>
          <Text style={styles.name}>Accept </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onReject}
          style={[styles.btn, {width: width * 0.36, backgroundColor: 'red'}]}>
          <Text style={styles.name}>Reject </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderPendingPosts;
const styles = StyleSheet.create({
  msg: {
    fontSize: 18,
    fontWeight: '800',
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#AEB6BF',
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    paddingHorizontal: 24,
    textShadowRadius: 10,
    shadowColor: '#333',
  },
  container: {
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 12,
    padding: 5,
  },
  btn: {
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    alignSelf: 'center',
    margin: 5,
  },
  name: {
    color: '#FFFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 18,
  },
});
