import { StyleSheet } from 'react-native';

const firstColor = `#ff8c00`;
const secondColor = `#f8f8ff`;
const inputColor = `#e6e6fa`;
const bgColor = '#ecf0f1';
const notActive = '#8F8F8F';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondColor,
  },
  title: {
    // fontFamily: 'Starndart-fonts',
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
  image: {
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
  photoContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  photo: { borderRadius: 10, height: 200, width: 200 },

  postItemContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: { width: 350, height: 200 },
  postTitle: {
    color: firstColor,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  postButtomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    color: firstColor,
  },
  postButtom: { marginRight: 250 },
});
