import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { db } from '../../../firebase/config';
import { styles } from '../../../Styled';

export default function CommentsScreen({ route }) {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [comment, setComment] = useState('');
  const { login } = useSelector(state => state.auth);
  const [allComments, setAllComments] = useState([]);

  const id = route.params;

  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  });

  const loadComment = async () => {
    await addDoc(collection(db, `users/${id}/comments`), {
      comment,
      login,
    });
    setComment('');
  };

  const getComments = async () => {
    const data = await getDocs(collection(db, `users/${id}/comments`));
    const comments = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setAllComments(comments);
  };

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.containerComment}>
          <View styles={styles.postImage}>
            <Image
              source={{ uri: route.params.photo }}
              style={styles.photoComments}
            />
          </View>
          <View
            style={{ ...styles.comment, height: keyboardStatus ? 80 : 320 }}
          >
            {allComments && (
              <SafeAreaView>
                <FlatList
                  data={allComments}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.commentWrapper}>
                      <Text style={styles.commentName}>{item.login}</Text>
                      <View>
                        <Text style={styles.commentText}>{item.comment}</Text>
                      </View>
                    </View>
                  )}
                />
              </SafeAreaView>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Comment"
              style={styles.input}
              value={comment}
              onChangeText={value => setComment(value)}
              onFocus={() => setKeyboardStatus(true)}
              placeholderTextColor="#ff8c00"
            />
            <TouchableOpacity style={styles.inputShow} onPress={loadComment}>
              <MaterialCommunityIcons
                name="send-circle-outline"
                size={38}
                color="#ff8c00"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
