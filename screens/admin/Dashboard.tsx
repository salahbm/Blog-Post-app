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
import Button from '../../components/Button';
import {width} from '../../constants/theme';
const Dashboard: FC = props => {
  const [posts, setPosts] = useState<any>(null);
  useEffect(() => {
    const fetchPendings = async () => {
      const fetchedPosts = await firebase
        .firestore()
        .collection('posts')
        .where('approved', '==', false)
        .get();
      setPosts([...fetchedPosts.docs]);
    };
    fetchPendings();
  }, []);

  const onApprove = async (id: string) => {
    Alert.alert(`Item ${id} will be approved`);
    const post = await firebase.firestore().collection('posts').doc(id).get();
    post.ref.set({approved: true}, {merge: true});
  };

  const onReject = async (id: string) => {
    Alert.alert(`Item ${id} will be rejected`);
    const post = await firebase
      .firestore()
      .collection('posts')
      .doc(id)
      .delete();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => props.navigation.goBack()}
        title="Dashboard"
        btn="md-chevron-back"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
});
export default Dashboard;
