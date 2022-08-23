const initialState = {
  // surahList: [],
  // lastRead: [],
  // lastReadPosition: 0,
  // surahData: [],
  // favourite: [],
  // bookmark: [],
  // loading: true,
  // surahDataLoading: true,
  surahListLoading: true,
  // juzLoading: true,
  // translationLoading: true,
  // paraLoading: true,
  // rukuLoading: true,
  // connected: true,
  // error: null,
  // languages: [],
  // translations: [],
  // paraList: [],
  // rukuList: [],
  // JuzData: [],
  // getAudioRuku: [],
  // audioLoading: true,
  // notification_Ruku_no: 1,
};

const surahDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SURAHLIST':
      return {...state, surahListLoading: true};
    // case 'GET_SURAHLIST_SUCESS':
    //   return {...state, surahList: action.payload, surahListLoading: false};
    // case 'GET_SURAHLIST_FAIL':
    //   return {...state, error: action.message};
    // case 'GET_SURAH_DATA':
    //   return {...state, surahDataLoading: true};
    // case 'GET_SURAH_DATA_SUCESS':
    //   return {
    //     ...state,
    //     surahData: [...state.surahData, action.payload],
    //     surahDataLoading: false,
    //   };
    // case 'GET_SURAH_DATA_FAIL':
    //   return {...state, error: action.message};
    // case 'GET_JUZ_DATA':
    //   return {...state, juzLoading: true};
    // case 'GET_JUZ_DATA_SUCESS':
    //   return {
    //     ...state,
    //     JuzData: action.payload,
    //     juzLoading: false,
    //   };
    // case 'GET_JUZ_DATA_FAIL':
    //   return {...state, error: action.message};
    // case 'GET_TRANSLATION_DATA':
    //   return {...state, translationLoading: true};
    // case 'GET_TRANSLATION_SUCESS':
    //   return {
    //     ...state,
    //     translations: action.payload,
    //     translationLoading: false,
    //   };
    // case 'GET_TRANSLATION_FAIL':
    //   return {...state, error: action.message};
    // case 'SAVE_LAST_READ':
    //   console.log(
    //     'action ===>',
    //     action.audioLink,
    //     action.status,
    //     action.ayah_no,
    //   );
    //   return {
    //     ...state,
    //     lastRead: [
    //       {
    //         name: action.name,
    //         ruku_no: action.ruku_no,
    //         audioLink: action.audioLink,
    //         ayah_no: action.ayah_no,
    //         status: action.status,
    //       },
    //     ],
    //   };
    // case 'SAVE_BOOKMARK':
    //   return {
    //     ...state,
    //     bookmark: [
    //       ...state.bookmark,
    //       {
    //         id: action.id,
    //         name: action.name,
    //         number: action.number,
    //         page: action.page,
    //         actionType: action.actionType,
    //         status: action.status,
    //       },
    //     ],
    //   };
    // case 'DELETE_BOOKMARK':
    //   const newBookmark = state.bookmark.filter(elem => {
    //     return elem.id != action.id;
    //   });
    //   return {
    //     ...state,
    //     bookmark: newBookmark,
    //   };
    // case 'TOGGLE_FAVOURITE':
    //   console.log(action.id);
    //   return {
    //     ...state,
    //     surahList: state.surahList.map((surah, i) =>
    //       surah.surah_number == action.id
    //         ? {
    //             ...surah,
    //             favourite: action.favourite,
    //           }
    //         : surah,
    //     ),
    //   };
    // case 'CHECK_CONNECTION':
    //   return {
    //     ...state,
    //     connected: action.payload,
    //   };
    // case 'GET_LANGUAGES_DATA':
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case 'GET_LANGUAGES_DATA_SUCCESS':
    //   return {
    //     ...state,
    //     languages: action.payload,
    //     loading: false,
    //   };
    // case 'GET_LANGUAGES_DATA_FAILURE':
    //   return {
    //     ...state,
    //     error: action.message,
    //   };
    // case 'GET_PARA_DATA':
    //   return {
    //     ...state,
    //     paraLoading: true,
    //   };
    // case 'GET_PARA_DATA_SUCCESS':
    //   return {
    //     ...state,
    //     paraList: action.payload,
    //     paraLoading: false,
    //   };
    // case 'GET_PARA_DATA_FAILURE':
    //   return {
    //     ...state,
    //     error: action.message,
    //   };
    // case 'GET_RUKU_DATA':
    //   return {
    //     ...state,
    //     rukuLoading: true,
    //   };
    // case 'GET_RUKU_SUCCESS':
    //   return {
    //     ...state,
    //     rukuList: action.payload,
    //     rukuLoading: false,
    //   };
    // case 'GET_RUKU_FAILURE':
    //   return {
    //     ...state,
    //     error: action.message,
    //   };
    // case 'TOGGLE_LANGUAGE':
    //   console.log('case : ', action.id, action.active);
    //   return {
    //     ...state,
    //     languages: state.languages.map((lang, i) =>
    //       lang.id == action.id
    //         ? {
    //             ...lang,
    //             active: action.active,
    //           }
    //         : {
    //             ...lang,
    //             active: false,
    //           },
    //     ),
    //   };
    // case 'GET_RUKU_AUDIO_DATA':
    //   return {...state, audioLoading: true};
    // case 'GET_RUKU_AUDIO_DATA_SUCESS':
    //   return {
    //     ...state,
    //     getAudioRuku: action.payload,
    //     audioLoading: false,
    //   };
    // case 'GET_RUKU_AUDIO_DATA_FAIL':
    //   return {...state, error: action.message};
    // case 'UPDATE_NOTIFICATION_RUKU_NO':
    //   return {...state, notification_Ruku_no: action.payload};
    default:
      return state;
  }
};

export {surahDetailReducer};
