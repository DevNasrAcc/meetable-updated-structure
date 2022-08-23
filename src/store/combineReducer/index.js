import {surahDetailReducer} from '../reducer/surahDetailReducer';
import { authReducer } from '../reducer/authReducer';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // 'surahList',
    // 'lastRead',
    // 'surahData',
    // 'languages',
    // 'surahListLoading',
    // 'loading',
    // 'bookmark',
    // 'paraList',
    // 'paraLoading',
    // 'notification_Ruku_no',
  ],
};

const AppReducer = combineReducers({
  surahDetailReducer: persistReducer(persistConfig, surahDetailReducer),
  authReducer: persistReducer(persistConfig, authReducer),
});

export {AppReducer};
