import firebase from '../../../firebase/config';
import { authSlice } from './authReduser';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth();

export const register =
  ({ email, password, login }) =>
  async (dispatch, getSatte) => {
    console.log('email', email, 'password', password, 'login', login);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          displayName: login,
        })
      );
      // updateProfile(auth.user, {
      //   displayName: login,
      //   photoURL: '',
      // }).catch(e => console.error(e));
      console.log('login', login, 'userId', user.user.uid);
      return { user: user, login };
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch, getSatte) => {
    console.log('email', email, 'password', password);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log('userLogin', userLogin);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const out = () => async (dispatch, getState) => {};

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from 'firebase/auth';
// import { auth, user } from '../../../firebase/config';

// export const register = createAsyncThunk(
//   'auth/register',
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const createdUser = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       updateProfile(auth.currentUser, {
//         displayName: name,
//         photoURL: '',
//       }).catch(e => console.error(e));
//       return { user: createdUser, name };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const loggedUser = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       return loggedUser;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await signOut(auth).catch(e => console.error(e.message));
//     return true;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
