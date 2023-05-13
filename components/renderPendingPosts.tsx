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

  const seconds = Math.floor(calculatedTime / 1000) % 60;
  const minutes = Math.floor(calculatedTime / 1000 / 60) % 60;
  const hours = Math.floor(calculatedTime / 1000 / 60 / 60);

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const RenderPendingPosts: FC<Props> = props => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.msg}>{props.msg} </Text>
      <Text style={styles.time}>{formatTime(props.timeStamp)} </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          alignSelf: 'center',
        }}>
        <Button
          btnName="approve"
          width={width * 0.4}
          onPress={props.onApprove}
        />
        <Button btnName="reject" width={width * 0.4} onPress={props.onReject} />
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
    width: width * 0.9,
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
});
