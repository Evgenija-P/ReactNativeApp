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

import { styles } from '../../../Styled';
import { register } from '../../redux/auth/authOperations';

const registrationState = {
  login: '',
  email: '',
  password: '',
};
const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = ({ navigation }) => {
  const [registrationData, setRegistrationData] = useState(registrationState);
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
    setRegistrationData(state);
    dispatch(register(state));
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
            <Image
              style={styles.avatar}
              source={require('../../../assets/image/no_image.png')}
            />
            <TouchableOpacity style={styles.avatarButtom} activeOpacity={0.8}>
              <Image
                source={require('../../../assets/image/add.png')}
                style={styles.avatarImage}
              />
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <Text style={styles.title}>Registration</Text>
              <TextInput
                value={state.login}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, login: value }))
                }
                placeholder="Login"
                placeholderTextColor="#ff8c00"
                style={styles.input}
                onFocus={() => setKeyboardStatus(true)}
              />
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
                  style={styles.input}
                  onFocus={() => setKeyboardStatus(true)}
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
                <Text style={styles.buttonTitle}>Sign up</Text>
              </TouchableOpacity>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Do you have an account?</Text>
                <TouchableOpacity
                  style={styles.buttomSing}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.footerTitleSing}>Sing In</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;
