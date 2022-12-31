import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
import { storage, db } from '../../../firebase/config';

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
  const stateScreen = useSelector(state => state.auth);

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

  const loadFoto = async () => {
    const response = await fetch(postData.photo);
    const file = await response.blob();
    const photoId = Date.now().toString();
    const imageRef = ref(storage, `images/${photoId}`);
    await uploadBytes(imageRef, file);
    const data = await getDownloadURL(ref(storage, `images/${photoId}`));
    console.log('data-------->', data);
    return data;
  };

  const loadPost = async () => {
    const photo = await loadFoto();
    const currentLocation = await Location.getCurrentPositionAsync({});
    const docRef = await addDoc(collection(db, 'posts'), {
      photo,
      photoLocation: currentLocation.coords,
      photoPlase: postData.place,
      photoName: postData.name,
      userId: stateScreen.userId,
      login: stateScreen.login,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  const sendPhoto = () => {
    loadFoto();
    addPost();
    navigation.navigate('DefaultScreen');
    setPostData(prevState => ({
      ...prevState,
      name: '',
      place: '',
    }));
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
