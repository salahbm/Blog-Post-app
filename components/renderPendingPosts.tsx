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
  if (calculatedTime > 1000) return `${calculatedTime / 1000} s`;
  if (calculatedTime / 1000 > 60) return `${calculatedTime / 1000 / 60} m`;
  if (calculatedTime / 1000 > 60)
    return `${calculatedTime / 1000 / 60 / 60} hr`;
  else `${calculatedTime / 1000 / 60 / 60 / 24} d`;
};
const RenderPendingPosts: FC<Props> = props => {
  return (
    <View style={{flex: 1}}>
      <Text>{props.msg} </Text>
      <Text>{formatTime(props.timeStamp)} </Text>
      <Button
        btnName="approve"
        width={width * 0.45}
        onPress={props.onApprove}
      />
      <Button btnName="reject" width={width * 0.45} onPress={props.onReject} />
    </View>
  );
};

export default RenderPendingPosts;
