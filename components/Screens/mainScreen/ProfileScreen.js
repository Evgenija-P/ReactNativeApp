import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from '../../../Styled';

const ProfileScreen = ({ navigation }) => {
  const stateScreen = useSelector(state => state.auth);
  const [profilePosts, setProfilePosts] = useState([]);

  const id = stateScreen.userId;

  useEffect(() => {
    getAllProfilePosts();
  }, [getAllProfilePosts]);

  const getAllProfilePosts = async () => {
    console.log(stateScreen.userId);
    try {
      const data = await getDocs(
        query(collection(db, 'users'), where('userId', '==', `${id}`))
      );
      const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProfilePosts(posts);
    } catch (error) {
      Alert.alert('Oops! Problem with receiving posts. Try again', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.containerProfile}>
      <View style={styles.containerViewProfile}>
        <View style={styles.titleProfile}>
          <Text style={styles.profileTitle}>{stateScreen.login}</Text>
        </View>
        {profilePosts && (
          <FlatList
            data={profilePosts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.postWrapper}>
                <View style={styles.potoWrapper}>
                  <Text>{item.photoCaption}</Text>
                </View>
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: item.photo }} style={styles.image} />
                </View>

                <View style={styles.btnWrapper}>
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('Comments', { postId: item.id })
                      }
                    >
                      <FontAwesome name="comment-o" size={24} color="#ff8c00" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Map', item)}
                  >
                    <Feather name="map-pin" size={24} color="#ff8c00" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
