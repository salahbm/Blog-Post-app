import React, {FC, useEffect, useState} from 'react';
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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {FlatList} from 'react-native-gesture-handler';
import RenderPendingPosts from '../../components/renderPendingPosts';
const Dashboard: FC = props => {
  const [post, setPost] = useState<any>(null);
  const fetchPendings = async () => {
    const fetchedPosts = await firebase
      .firestore()
      .collection('posts')
      .where('approved', '==', 'false')
      .get();
    setPost([...fetchedPosts.docs]);
  };
  useEffect(() => {
    fetchPendings();
  });
  const onApprove = (id: string) => {
    Alert.alert(`Item ${id} will be approved`);
  };

  const onReject = (id: string) => {
    Alert.alert(`Item ${id} will be rejected`);
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => props.navigation.goBack()} title="Dashboard" />
      <FlatList
        data={post}
        renderItem={({item}) => (
          <RenderPendingPosts
            msg={item.data().msg}
            timeStamp={item.data().timeStamp}
            onApprove={() => onApprove(item.id)}
            onReject={() => onReject(item.id)}
            approved={item.data().approved}
          />
        )}
      />
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
