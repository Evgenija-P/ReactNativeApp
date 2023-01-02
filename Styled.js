import { StyleSheet } from 'react-native';

const firstColor = `#ff8c00`;
const secondColor = `#f8f8ff`;
const inputColor = `#e6e6fa`;
const bgColor = '#ecf0f1';
const notActive = '#8F8F8F';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerComment: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: firstColor,
  },
  buttomSing: {
    borderRadius: 8,
    backgroundColor: firstColor,
    paddingHorizontal: 12,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTitle: {
    paddingTop: 10,
    textAlign: 'center',
    color: secondColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputShow: {
    position: 'absolute',
    right: 0,
  },
  input: {
    height: 44,
    padding: 10,
    borderColor: firstColor,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: inputColor,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  containerForm: {
    height: 430,
    borderRadius: 10,
    padding: 10,
    backgroundColor: bgColor,
    marginHorizontal: 20,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: -50,
    transform: [{ translateX: -40 }],
  },
  avatarButtom: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: [{ translateX: 30 }],
  },
  avatarImage: { width: 40, height: 40 },
  buttom: {
    height: 44,
    backgroundColor: firstColor,
    borderRadius: 130,
    marginTop: 15,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  footerTitle: {
    fontWeight: 'bold',
    color: firstColor,
    fontSize: 16,
  },

  footerTitleSing: {
    color: secondColor,
    fontWeight: 'bold',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainerCreate: {
    flex: 1,
  },
  camera: {
    height: 400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cameraForm: {
    display: 'flex',
    marginTop: 25,
  },
  snap: { color: firstColor, fontWeight: 'bold', fontSize: 16 },
  snapButton: {
    marginTop: 250,
    borderWidth: 1,
    borderColor: firstColor,
    borderRadius: 50,
    width: 70,
    height: 70,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainerBig: {
    position: 'absolute',
    top: 20,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
    width: 150,
  },
  photoContainerSmal: {
    position: 'absolute',
    top: 20,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  photoBig: {
    borderRadius: 10,
    height: 150,
    width: 150,
  },
  photoSmal: {
    borderRadius: 10,
    height: 80,
    width: 80,
  },

  postItemContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: { width: 350, height: 200 },
  postTitle: {
    color: firstColor,
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50%',
  },
  postButtomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    color: firstColor,
  },
  postButtom: { marginRight: 250 },
  commentButton: {
    width: 34,
    height: 34,
    border: 1,
    borderRadius: 100,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoComments: {
    justifyContent: 'center',
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  containerComments: {
    flex: 1,
    backgroundColor: 'secondColor',
    padding: 12,
    paddingBottom: 0,
  },
  commentFormBtnTitle: {
    color: 'secondColor',
    fontSize: 16,
  },
  commentFormBtn: {
    alignItems: 'center',
    backgroundColor: 'secondColor',
    marginBottom: 16,
    paddingVertical: 16,
    borderRadius: 100,
  },
  comment: { height: 300 },
  commentInput: {
    height: 50,
    padding: 16,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'firstColor',
    fontSize: 16,
  },
  commentView: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentText: {
    backgroundColor: 'secondColor',
    padding: 16,
    borderRadius: 6,
    marginLeft: 5,
  },
  commentText: {
    fontSize: 13,
  },
  containerProfile: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  containerViewProfile: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 10,
    paddingTop: 85,
    paddingBottom: 10,
    maxHeight: '70%',
  },
  profileTitle: {
    fontSize: 30,
    alignItems: 'center',
  },
  titleProfile: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logOut: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  image: {
    height: 240,
    borderRadius: 8,
  },
  imageWrapper: {
    borderRadius: 8,
    marginBottom: 8,
  },
  postWrapper: {
    marginBottom: 20,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  potoWrapper: {
    marginBottom: 10,
  },
  commentWrapper: {
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: firstColor,
    marginTop: 5,
  },
  commentName: {
    fontSize: 20,
    color: firstColor,
    fontWeight: 'bold',
  },
  commentText: { paddingLeft: 10 },
});
