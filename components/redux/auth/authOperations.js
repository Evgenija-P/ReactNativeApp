import { auth } from '../../../firebase/config';
import { authSlice } from './authReduser';
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const register =
  ({ email, password, login }) =>
  async (dispatch, getSatte) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
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
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserProfile({
          displayName: userLogin.user.displayName,
          userId: userLogin.user.uid,
        })
      );
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
    if (user) {
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(
        authSlice.actions.updateUserProfile({
          displayName: user.displayName,
        })
      );
    }
  });
};
