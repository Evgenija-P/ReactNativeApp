import { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { styles } from '../../../Styled';

const CommentsScreen = ({ route }) => {
  const { login } = useSelector(state => state.auth.user);
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, [getAllComments]);

  const uploadCommentToServer = async () => {
    await addDoc(collection(db, `posts/${postId}/comments`), {
      comment,
      login,
    });
    setComment('');
  };

  const getAllComments = async () => {
    const data = await getDocs(collection(db, `posts/${postId}/comments`));
    const comments = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setAllComments(comments);
  };

  return (
    <View style={styles.containerComments}>
      {allComments && (
        <FlatList
          data={allComments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentView}>
              <Text>{item.login}</Text>
              <View style={styles.commentText}>
                <Text>{item.comment}</Text>
              </View>
            </View>
          )}
        />
      )}
      <View style={{ marginBottom: 16 }}>
        <TextInput
          placeholder="Комментарий"
          style={styles.commentInput}
          value={comment}
          onChangeText={value => setComment(value)}
        />
      </View>
      <TouchableOpacity
        style={styles.commentFormBtn}
        activeOpacity={0.8}
        onPress={uploadCommentToServer}
      >
        <Text style={styles.commentFormBtnTitle}>Отправить</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentsScreen;
