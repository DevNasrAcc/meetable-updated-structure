import {authMiddleware} from '../../Middleware/authMiddleware';

// export const getSurahList = data => ({
//   type: 'GET_SURAHLIST_SUCESS',
//   data,
// });

// export const getSurahListError = error => ({
//   type: 'GET_SURAHLIST_FAIL',
//   error,
// });

export function RegisterUser(data, navigation) {
  return function (dispatch) {
    dispatch({type: 'REGISTER_USER'});
    return authMiddleware.registerUser(data, navigation)
      .then(result => {
        dispatch({
          type: 'REGISTER_USER_SUCESS',
          payload: result,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'REGISTER_USER_FAIL',
          payload: error.message,
          message: 'Failed to fetch data',
        });
      });
  };
}

export function LoginUser(data, navigation) {
  return function (dispatch) {
    dispatch({type: 'LOGIN_USER'});
    return authMiddleware.loginUser(data, navigation)
      .then(result => {
        console.log("result ", result)
        dispatch({
          type: 'LOGIN_USER_SUCESS',
          payload: result.data,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'LOGIN_USER_FAIL',
          payload: error.message,
          message: 'Failed to fetch data',
        });
      });
  };
}

export function FacebookUser(data, navigation) {
  console.log("data==>", data);
  return function (dispatch) {
    dispatch({type: 'FACEBOOK_LOGIN'});
    return authMiddleware.facebookUser(data, navigation)
      .then(result => {
        console.log("result ", result)
        dispatch({
          type: 'FACEBOOK_LOGIN_SUCESS',
          payload: result.data,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'FACEBOOK_LOGIN_FAIL',
          payload: error.message,
          message: 'Failed to fetch data',
        });
      });
  };
}

export function GoogleLogin(data, navigation) {
  console.log("data==>", data);
  return function (dispatch) {
    dispatch({type: 'GOOGLE_LOGIN'});
    return authMiddleware.googleLogin(data, navigation)
      .then(result => {
        console.log("result ", result)
        dispatch({
          type: 'GOOGLE_LOGIN_SUCESS',
          payload: result.data,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'GOOGLE_LOGIN_FAIL',
          payload: error.message,
          message: 'Failed to fetch data',
        });
      });
  };
}


export function UpdateSignup(user_id, data, navigation) {
  console.log("data==>", data);
  return function (dispatch) {
    dispatch({type: 'UPDATE_SIGNUP'});
    return authMiddleware.updateSignup(user_id, data, navigation)
      .then(result => {
        console.log("result ", result)
        dispatch({
          type: 'UPDATE_SIGNUP_SUCESS',
          payload: result.data,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'UPDATE_SIGNUP_FAIL',
          payload: error.message,
          message: 'Failed to fetch data',
        });
      });
  };
}

// export const getSurahData = data => ({
//   type: 'GET_SURAH_DATA_SUCESS',
//   data,
// });

// export const getSurahDataError = error => ({
//   type: 'GET_SURAH_DATA_FAIL',
//   error,
// });

// export function GetSurahData(surahNumber, lang_id) {
//   return function (dispatch) {
//     dispatch({type: 'GET_SURAH_DATA'});
//     return GetDataMiddleware.getSurahData(surahNumber, lang_id)
//       .then(result => {
//         dispatch({
//           type: 'GET_SURAH_DATA_SUCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_SURAH_DATA_FAIL',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export function GetJuzData(para_id, type, lang_id) {
//   console.log('get ====> ', para_id, type, lang_id);
//   return function (dispatch) {
//     dispatch({type: 'GET_JUZ_DATA'});
//     return GetDataMiddleware.getJuzData(para_id, type, lang_id)
//       .then(result => {
//         dispatch({
//           type: 'GET_JUZ_DATA_SUCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_JUZ_DATA_FAIL',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export const getTranslationData = data => ({
//   type: 'GET_TRANSLATION_DATA',
//   data,
// });

// export const getTranslationError = error => ({
//   type: 'GET_TRANSLATION_FAIL',
//   error,
// });

// export function GetTransData(surahNumber, lang_id, type) {
//   return function (dispatch) {
//     dispatch({type: 'GET_TRANSLATION_DATA'});
//     return GetDataMiddleware.getTransData(surahNumber, lang_id, type)
//       .then(result => {
//         dispatch({
//           type: 'GET_TRANSLATION_SUCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_SURAH_DATA_FAIL',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export const saveLastRead = (name, ruku_no, audioLink, ayah_no, status) => {
//   console.log('text ===>', name, ruku_no, audioLink, ayah_no, status);
//   return {
//     type: 'SAVE_LAST_READ',
//     name,
//     ruku_no,
//     audioLink,
//     ayah_no,
//     status,
//   };
// };

// export const saveBookmark = (name, number, page, actionType, status) => {
//   return {
//     type: 'SAVE_BOOKMARK',
//     id: new Date(),
//     name,
//     number,
//     page,
//     actionType,
//     status,
//   };
// };

// export const deleteBookmark = id => {
//   // console.log('action', page);
//   return {
//     type: 'DELETE_BOOKMARK',
//     id,
//   };
// };

// export const toggleFavouriteList = (id, favourite) => {
//   return {
//     type: 'TOGGLE_FAVOURITE',
//     id: id,
//     favourite: favourite,
//   };
// };

// export const checkConnection = isConnect => {
//   return {
//     type: 'CHECK_CONNECTION',
//     payload: isConnect,
//   };
// };
// export function GetLanguageData() {
//   return function (dispatch) {
//     dispatch({type: 'GET_LANGUAGES_DATA'});
//     return GetDataMiddleware.getLanguageData()
//       .then(result => {
//         dispatch({
//           type: 'GET_LANGUAGES_DATA_SUCCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_LANGUAGES_DATA_FAILURE',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export function GetParaListData() {
//   return function (dispatch) {
//     dispatch({type: 'GET_PARA_DATA'});
//     return GetDataMiddleware.getParaData()
//       .then(result => {
//         dispatch({
//           type: 'GET_PARA_DATA_SUCCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_PARA_DATA_FAILURE',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export function GetRukuListData() {
//   return function (dispatch) {
//     dispatch({type: 'GET_RUKU_DATA'});
//     return GetDataMiddleware.getRukuList()
//       .then(result => {
//         dispatch({
//           type: 'GET_RUKU_SUCCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_RUKU_FAILURE',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export function GetAudioRuku(id, status) {
//   return function (dispatch) {
//     dispatch({type: 'GET_RUKU_AUDIO_DATA'});
//     return GetDataMiddleware.getAudioRukuData(id, status)
//       .then(result => {
//         dispatch({
//           type: 'GET_RUKU_AUDIO_DATA_SUCESS',
//           payload: result,
//         });
//       })
//       .catch(error => {
//         return dispatch({
//           type: 'GET_RUKU_AUDIO_DATA_FAIL',
//           payload: error,
//           message: 'Failed to fetch data',
//         });
//       });
//   };
// }

// export const toggleLanguage = (id, active) => {
//   console.log(id, active);
//   return {
//     type: 'TOGGLE_LANGUAGE',
//     id: id,
//     active: active,
//   };
// };

// export const updateNotificationRukuNo = num => {
//   console.log('action number', num);
//   return {
//     type: 'UPDATE_NOTIFICATION_RUKU_NO',
//     payload: num,
//   };
// };
