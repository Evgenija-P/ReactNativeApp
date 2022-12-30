import 'react-native-gesture-handler';
import React, { useState } from 'react';
import firebase from './firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { useRoute } from './router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

import { store } from './components/redux/store';
import RegistrationScreen from './components/Screens/auth/RegistrationScreen';
import LoginScreen from './components/Screens/auth/LoginScreen';
import Home from './components/Screens/mainScreen/Home';

const AuthStack = createStackNavigator();
// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
//   });
// };

const App = () => {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  auth.onAuthStateChanged(user => {
    setUser(user);
  });

  console.log(user);

  const route = useRoute(user);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={error => console.log(error)}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
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
          {user && (
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
                      // style={styles.inputShow}
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
          )}
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );

  // const route = useRoute(user);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={error => console.log(error)}
  //     />
  //   );
  // }
  // return (
  //   <Provider store={store}>
  //     <NavigationContainer>{route}</NavigationContainer>
  //   </Provider>
  // );
};
export default App;
