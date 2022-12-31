import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { styles } from '../../../Styled';

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const data = await getDocs(collection(db, 'posts'));
    const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setPosts(posts);
  };

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <View style={styles.container}>
      {!route.params && <Text style={styles.postTitle}>No Posts</Text>}
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItemContainer}>
            <Text style={styles.postTitle}>{item.postData.name}</Text>
            <Image
              source={{ uri: item.postData.photo }}
              style={styles.postImage}
            />
            <View style={styles.postButtomContainer}>
              <TouchableOpacity
                style={styles.postButtom}
                title="Comments"
                onPress={() => navigation.navigate('Comments')}
              >
                <FontAwesome name="comment-o" size={24} color="#ff8c00" />
              </TouchableOpacity>
              {item.location && (
                <TouchableOpacity
                  title="Map"
                  onPress={() =>
                    navigation.navigate('Map', item, console.log(item))
                  }
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
