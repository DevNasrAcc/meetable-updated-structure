import axios from 'axios';
import {url} from '../../assets/api_url/index';

// class GetDataMiddleware {
//   static getSurahDetails = async lang_id => {
//     try {
//       console.log('surah list');
//       const response = await axios.get(`${url}/surahs?language_id=39`);
//       const json = await response;

//       let res = json.data.surahs.map(item => {
//         return {
//           ...item,
//           favourite: false,
//         };
//       });

//       return res;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getSurahData = async (surahNumber, lang_id) => {
//     try {
//       const response = await axios.get(
//         `${url}/ayahs?surah_id=${surahNumber}&language_id=${lang_id}`,
//       );
//       const json = await response;
//       return json.data.surahs.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getTransData = async (surahNumber, lang_id, type) => {
//     try {
//       let response;
//       if (type == 'surah') {
//         response = await axios.get(
//           `${url}/ayahs?surah_id=${surahNumber}&language_id=${lang_id}`,
//         );
//       } else if (type == 'para') {
//         response = await axios.get(
//           `${url}/ayahs?para_id=${surahNumber}&language_id=${lang_id}`,
//         );
//       } else {
//         response = await axios.get(
//           `${url}/ayahs?rukuu_id=${surahNumber}&language_id=${lang_id}`,
//         );
//       }
//       const json = await response;
//       // console.log('transa === > ', json.data.surahs.data);
//       return json.data.surahs.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getLanguageData = async () => {
//     try {
//       console.log('language list');
//       const response = await axios.get(`${url}/languages/`);
//       const json = await response;

//       let res = json.data.languages.map(item => {
//         return {
//           ...item,
//           active: item.id == 39 ? true : false,
//         };
//       });
//       return res;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getParaData = async lang_id => {
//     try {
//       const response = await axios.get(`${url}/paras/?language_id=39`);
//       const json = await response;
//       return json.data.paras;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getAudioRukuData = async (id, status) => {
//     let response;

//     try {
//       if (status == 'para') {
//         response = await axios.get(`${url}/rukoos/?para_no=${id}`);
//       } else {
//         response = await axios.get(`${url}/rukoos/?surah_no=${id}`);
//       }
//       const json = await response;

//       return json.data.paras.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getRukuList = async lang_id => {
//     try {
//       const response = await axios.get(`${url}/rukoos`);
//       const json = await response;

//       return json.data.paras.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   static getJuzData = async (para_id, type, lang_id) => {
//     try {
//       let response;
//       let response02;
//       if (type == 'ruku') {
//         response = await axios.get(
//           `${url}/ayahs?rukuu_id=${para_id}&language_id=${lang_id}`,
//         );
//       } else {
//         response = await axios.get(
//           `${url}/ayahs?para_id=${para_id}&language_id=${lang_id}`,
//         );
//       }
//       const json = await response;
//       if ((type = 'para' && json.data.surahs.last_page > 1)) {
//         response02 = await axios.get(`${url}/ayahs?para_id=${para_id}&page=2`);
//         const json2 = await response02;
//         var arr1 = [...json.data.surahs.data, ...json2.data.surahs.data];
//         return arr1;
//       } else {
//         return json.data.surahs.data;
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// export {GetDataMiddleware};
