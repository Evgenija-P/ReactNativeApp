// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PostsScreen from './PostsScreen';
// import ProfileScreen from './ProfileScreen';
// import CreatePostsScreen from './CreatePostsScreen';
// import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const Home = ({ navigation }) => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarItemStyle: { width: 100 },
//         tabBarStyle: { backgroundColor: '#ff8c00' },
//         tabBarShowLabel: false,
//       }}
//     >
//       <Tab.Screen
//         name="PostsScreen"
//         component={PostsScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => (
//             <MaterialCommunityIcons
//               name="post-outline"
//               size={30}
//               color="#f8f8ff"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="CreatePostsScreen"
//         component={CreatePostsScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => (
//             <Ionicons name="md-create-outline" size={30} color="#f8f8ff" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => (
//             <MaterialCommunityIcons
//               name="face-woman-shimmer-outline"
//               size={30}
//               color="#f8f8ff"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Home;
