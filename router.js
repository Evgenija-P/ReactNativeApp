import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import LoginScreen from './components/Screens/auth/LoginScreen';
import RegistrationScreen from './components/Screens/auth/RegistrationScreen';
import CreatePostsScreen from './components/Screens/mainScreen/CreatePostsScreen';
import PostsScreen from './components/Screens/mainScreen/PostsScreen';
import ProfileScreen from './components/Screens/mainScreen/ProfileScreen';

import { out } from './components/redux/auth/authOperations';
import { styles } from './Styled';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegistrationScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(out());
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: { width: 100 },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={signOut}
            >
              <Entypo name="login" size={24} color="#ff8c00" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="post-outline"
              size={30}
              color="#ff8c00"
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="md-create-outline" size={30} color="#ff8c00" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={signOut}
            >
              <Entypo name="login" size={24} color="#ff8c00" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="face-woman-shimmer-outline"
              size={30}
              color="#ff8c00"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const useRoute = isAuth => {
  if (!isAuth) {
    return <AuthScreen />;
  }
  return <HomeScreen />;
};
