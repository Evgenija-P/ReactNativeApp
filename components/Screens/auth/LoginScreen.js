import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

import { styles } from '../../../Styled';

const loginState = {
  email: '',
  password: '',
};
const initialState = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [loginData, setLoginData] = useState(loginState);
  const [state, setstate] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  });

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
    setLoginData(state);
    dispatch(login(loginData));
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../../assets/image/image_1.jpg')}
        >
          <View
            style={{
              ...styles.containerForm,
              marginBottom: keyboardStatus ? -130 : 20,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <Text style={styles.title}>Authorization</Text>
              <TextInput
                value={state.email}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, email: value }))
                }
                placeholder="Email"
                placeholderTextColor="#ff8c00"
                style={styles.input}
                onFocus={() => setKeyboardStatus(true)}
                keyboardType="email-address"
              />
              <View>
                <TextInput
                  value={state.password}
                  onChangeText={value =>
                    setstate(prevState => ({ ...prevState, password: value }))
                  }
                  placeholder="Password"
                  placeholderTextColor="#ff8c00"
                  secureTextEntry={show}
                  onFocus={() => setKeyboardStatus(true)}
                  style={styles.input}
                />
                <TouchableOpacity
                  style={styles.inputShow}
                  onPress={() => setShow(!show)}
                >
                  {show ? (
                    <Image
                      source={require('../../../assets/image/show.png')}
                      style={styles.avatarImage}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/image/not-show.png')}
                      style={styles.avatarImage}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttom}
                activeOpacity={0.8}
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('Home');
                }}
              >
                <Text style={styles.buttonTitle}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Don't have an account?</Text>
                <TouchableOpacity
                  style={styles.buttomSing}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.footerTitleSing}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
