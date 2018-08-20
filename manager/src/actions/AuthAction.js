import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(() => onLoginFail(dispatch));
      });
  };
};

const onLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const onLoginFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: 'Authentication Failed.'
  });
};
