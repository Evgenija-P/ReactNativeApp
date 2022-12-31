import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getApp } from 'firebase/app';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import { styles } from '../../../Styled';
import db from '../../../firebase/config';

const storage = getStorage(db);
console.log('hello!1', storage);
// console.log('ref', ref());

const CreatePostsScreen = ({ navigation }) => {
  const initialState = {
    photo: null,
    name: '',
    place: '',
  };

  const [postData, setPostData] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasCamPermission, setHasCamPermission] = useState(false);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [state, setstate] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  });

  const keyboardHide = () => {
    setLoginData(state);
    setKeyboardStatus(false);
    Keyboard.dismiss();
    setstate(initialState);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(status === 'granted');

      const locationStatus = await Location.requestForegroundPermissionsAsync();
      if (locationStatus.status) {
        setHasLocationPermission(locationStatus.status === 'granted');
      }
    })();
  }, []);

  useEffect(() => {
    const onPress = Object.values(postData).every(value => value !== '');
    setIsDisableBtn(!onPress);
  }, [postData]);

  const makePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPostData(prevState => ({ ...prevState, photo: photo.uri }));
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  };

  const sendPhoto = () => {
    loadFoto();
    navigation.navigate('DefaultScreen', { postData, location });
    setPostData(prevState => ({
      ...prevState,
      name: '',
      place: '',
    }));
  };

  const loadFoto = async () => {
    const response = await fetch(postData.photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    const imageRef = ref(storage, `images/${uniquePostId}`);

    await uploadBytes(imageRef, file);
    const data = await getDownloadURL(ref(storage, `images/${uniquePostId}`));
    console.log('data-------->', data);
    return data;
  };

  if (hasCamPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.tabContainerCreate}>
      <Camera style={styles.camera} ref={setCamera}>
        {postData.photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: postData.photo }} style={styles.photo} />
          </View>
        )}

        <TouchableOpacity style={styles.snapButton} onPress={makePhoto}>
          <Feather name="camera" size={30} color="#ff8c00" />
        </TouchableOpacity>
      </Camera>
      <View style={styles.cameraForm}>
        <TextInput
          value={postData.name}
          onChangeText={value =>
            setPostData(prevState => ({ ...prevState, name: value }))
          }
          placeholder="Title"
          placeholderTextColor="#ff8c00"
          style={styles.input}
          onFocus={() => setKeyboardStatus(true)}
        />
        <TextInput
          value={postData.place}
          onChangeText={value =>
            setPostData(prevState => ({ ...prevState, place: value }))
          }
          placeholder="Place"
          placeholderTextColor="#ff8c00"
          style={styles.input}
          onFocus={() => setKeyboardStatus(true)}
        />
        <TouchableOpacity
          onPress={sendPhoto}
          style={styles.buttom}
          disabled={isDisableBtn}
        >
          <Text style={styles.buttonTitle}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;
