import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
// import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
// import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
// import PostsScreen from './Screens/mainScreen/PostsScreen';
// import ProfileScreen from './Screens/mainScreen/ProfileScreen';
// import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './components/Screens/auth/LoginScreen';
import RegistrationScreen from './components/Screens/auth/RegistrationScreen';
import Home from './components/Screens/mainScreen/Home';

import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/auth/authOperations';
import { updateUserProfile } from './redux/auth/authSlice';
import { auth } from './firebase/config';

const AuthStack = createStackNavigator();
// const HomeTab = createBottomTabNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <AuthStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        headerTintColor: '#f8f8ff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerRight: () => (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
            >
              <Entypo name="login" size={24} color="#f8f8ff" />
            </TouchableOpacity>
          </View>
        ),
      })}
    />
  );
};

export const useRoute = isAuth => {
  if (!isAuth) {
    return <AuthScreen />;
  }
  return <HomeScreen />;
};
