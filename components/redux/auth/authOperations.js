import { auth } from '../../../firebase/config';
import { authSlice } from './authReduser';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// const auth = getAuth();

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
