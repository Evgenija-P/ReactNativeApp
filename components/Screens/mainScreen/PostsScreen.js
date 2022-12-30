import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, FlatList, Image, Text } from 'react-native';
// import { styles } from '../../../Styled';
import DefaultScreenPosts from '../nestedScreens/DefaultScreenPosts';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';
const PostStack = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PostStack.Screen name="DefaultScreen" component={DefaultScreenPosts} />
      <PostStack.Screen name="Comments" component={CommentsScreen} />
      <PostStack.Screen name="Map" component={MapScreen} />
    </PostStack.Navigator>
  );
};

export default PostsScreen;
