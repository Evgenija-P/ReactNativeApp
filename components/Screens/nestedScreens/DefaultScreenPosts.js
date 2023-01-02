import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { styles } from '../../../Styled';

const DefaultScreenPosts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(false);

  const getAllPosts = async () => {
    try {
      const data = await getDocs(collection(db, 'users'));
      const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPosts(posts);
      setStart(true);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <View style={styles.container}>
      {!posts && <Text style={styles.postTitleNoPhoto}>No Posts</Text>}
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItemContainer}>
            <Text style={styles.postTitle}>{item.photoCaption}</Text>
            <Image source={{ uri: item.photo }} style={styles.postImage} />
            <View style={styles.postButtomContainer}>
              <TouchableOpacity
                style={styles.postButtom}
                title="Comments"
                onPress={() => navigation.navigate('Comments', item)}
              >
                <FontAwesome name="comment-o" size={24} color="#ff8c00" />
              </TouchableOpacity>

              {item.photoLocation && (
                <TouchableOpacity
                  title="Map"
                  onPress={() => navigation.navigate('Map', item)}
                >
                  <Feather name="map-pin" size={24} color="#ff8c00" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultScreenPosts;
