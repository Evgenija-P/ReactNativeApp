import firebase from '../../../firebase/config';
import { authSlice } from './authReduser';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth();

export const register =
  ({ email, password, login }) =>
  async (dispatch, getSatte) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.user.uid,
          displayName: login,
        })
      );
      return { user: user, login };
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch, getSatte) => {
    console.log('email', email, 'password', password);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

export const out = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSingOut());
    return true;
  } catch (error) {
    console.log('error.message', error.message);
  }
};

export const authStateCahngeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

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
