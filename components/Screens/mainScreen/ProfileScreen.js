import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import {
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
} from '@expo/vector-icons';

import { out } from '../../redux/auth/authOperations';
import { styles } from '../../../Styled';

const ProfileScreen = ({ navigation }) => {
  const { login, id } = useSelector(state => state.auth.user);
  const [profilePosts, setProfilePosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProfilePosts();
  }, [getAllProfilePosts]);

  const getAllProfilePosts = async () => {
    const data = await getDocs(
      query(collection(db, 'posts'), where('userId', '==', id))
    );
    const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setProfilePosts(posts);
  };

  const signOut = () => {
    dispatch(out());
  };
  return (
    <View style={styles.containerProfile}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/image/image_1.jpg')}
      >
        <View style={styles.containerViewProfile}>
          <TouchableOpacity
            style={styles.logOut}
            activeOpacity={0.8}
            onPress={signOut}
          >
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <View style={styles.titleProfile}>
            <Text style={styles.profileTitle}>{login}</Text>
          </View>
          {profilePosts && (
            <FlatList
              data={profilePosts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.postWrapper}>
                  <View style={styles.imageWrapper}>
                    <Image source={{ uri: item.photo }} style={styles.image} />
                  </View>
                  <View style={styles.potoWrapper}>
                    <Text>{item.photoCaption}</Text>
                  </View>
                  <View style={styles.btnWrapper}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('Comments', { postId: item.id })
                      }
                    >
                      <EvilIcons name="comment" size={25} color="#BDBDBD" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('Map', {
                          location: item.photoLocation,
                        })
                      }
                    >
                      <MaterialCommunityIcons
                        name="map-marker"
                        size={25}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
