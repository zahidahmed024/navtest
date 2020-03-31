import * as actions from './Types';
import AsyncStorage from '@react-native-community/async-storage';

export const login = () => {
  return async dispatch => {
    try {
      let act = await _saveItem();
      dispatch({
        type: actions.LOGGEDIN,
        islogin: act,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const logout = () => {
  return async dispatch => {
    try {
       await _clearAccessToken();
      
       dispatch({
          type: actions.LOGOUT,
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};

const _saveItem = async () => {
  try {
    let accessToken = await AsyncStorage.setItem(
      'accessToken',
      JSON.stringify(Math.random()),
    );
    console.log('set token', accessToken);
    return _getItem();
  } catch (error) {
    throw error;
  }
};
const _getItem = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('accessToken');
    console.log('get token', JSON.parse(accessToken));
    return accessToken;
  } catch (error) {
    throw error;
  }
};
const _clearAccessToken = async () => {
  try {
    if (await AsyncStorage.removeItem('accessToken')) {
    //   console.log(_getItem());
      return true;
    }
  } catch (error) {
    throw error;
  }
};
