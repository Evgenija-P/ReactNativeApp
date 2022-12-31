import 'react-native-gesture-handler';
import firebase from '../firebase/config';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { getAuth } from 'firebase/auth';

const auth = getAuth();

import { store } from '../components/redux/store';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import Home from './Screens/mainScreen/Home';

const AuthStack = createStackNavigator();

const Main = () => {
  const [user, setUser] = useState(null);
  const state = useSelector(state => state);
  console.log(state);

  auth.onAuthStateChanged(user => setUser(user));
  useEffect(() => {}, []);

  // auth.onAuthStateChanged(user => {
  //   setUser(user);
  // });

  console.log(user);

  if (!user) {
    return (
      <NavigationContainer>
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
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
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
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

// return (
//   <Provider store={store}>
//     <NavigationContainer>
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Register"
//           component={RegistrationScreen}
//         />
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginScreen}
//         />
//         {user && (
//           <AuthStack.Screen
//             name="Home"
//             component={Home}
//             options={({ navigation }) => ({
//               headerStyle: {
//                 backgroundColor: '#ff8c00',
//               },
//               headerTintColor: '#f8f8ff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 20,
//               },
//               headerRight: () => (
//                 <View>
//                   <TouchableOpacity
//                     onPress={() => {
//                       navigation.navigate('Login');
//                     }}
//                   >
//                     <Entypo name="login" size={24} color="#f8f8ff" />
//                   </TouchableOpacity>
//                 </View>
//               ),
//             })}
//           />
//         )}
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   </Provider>
// );