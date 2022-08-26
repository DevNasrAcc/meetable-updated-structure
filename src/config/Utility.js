// import Toast from 'react-native-simple-toast'
import Snackbar from 'react-native-snackbar';
import {colors, fonts, labels, assets, styles} from '../assets';
import moment from 'moment';
import {changeStack} from './NavigationService';
import {
  changePasswordAction,
  codeVerificationAction,
  forgetPasswordAction,
  resetPasswordAction,
  UserLoginAction,
  UserRegisteredAction,
} from '../store/actions/AuthActions';

export const WEB_CLIENT_ID =
  '856333007345-08k1f3irs23p3kafifpi4pkasauqfebg.apps.googleusercontent.com';

const Utility = {
  // validate email regex
  validateEmail: function (email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  // validate password regex
  validatePassword: function (password) {
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
  },
  validateName: function (name) {
    var re = /^[A-Z]+$/i;
    return re.test(name);
  },

  register: function (params, navigation, dispatch) {
    var validation = `${
      !params.name
        ? labels.validationName
        : !this.validateName(params.name)
        ? labels.invalidName
        : !params.userName
        ? labels.validationUserName
        : !params.email
        ? labels.validationEmail
        : !this.validateEmail(params.email)
        ? labels.validEmail
        : !params.mobileNo
        ? labels.validPhone
        : params.mobileNo.length < 7
        ? labels.invalidMobileNumber
        : !params.password
        ? labels.validationPassword
        : !this.validatePassword(params.password)
        ? labels.validPassword
        : !params.passwordC
        ? labels.validationConfirmPassword
        : params.passwordC !== params.password
        ? labels.validSamePassword
        : true
    }`;
    if (validation === 'true') {
      const data = {
        name: params.name,
        user_name: params.userName,
        phone_number: `${params.countryCode} ${params.mobileNo}`,
        email: params.email,
        password: params.password,
      };
      console.log('data', data);
      dispatch(UserRegisteredAction(data, navigation));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
        numberOfLines: 4,
        action: {
          text: 'ok',
          textColor: colors.dim,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }
  },

  login: function (params, navigation, endPoint, dispatch) {
    var validation = `${
      !params.email
        ? labels.validationEmail
        : !this.validateEmail(params.email)
        ? labels.validEmail
        : !params.password
        ? labels.validationPassword
        : true
    }`;
    if (validation === 'true') {
      console.log(JSON.stringify(params));
      dispatch(UserLoginAction(params, navigation));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
        numberOfLines: 4,
      });
    }
  },

  verifyEmail: function (params, navigation, dispatch, bool) {
    var validation = `${
      !params.code ? labels.pleaseCodeFieldIsRequired : true
    }`;
    if (validation === 'true') {
      dispatch(codeVerificationAction(params, navigation, bool));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
        numberOfLines: 4,
      });
    }
  },

  forgotPassword: function (params, navigation, endPoint, dispatch) {
    var validation = `${
      !params.email
        ? labels.validationEmail
        : !this.validateEmail(params.email)
        ? labels.validEmail
        : true
    }`;
    if (validation === 'true') {
      dispatch(forgetPasswordAction(params, navigation));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
      });
    }
  },

  resetPassword: function (params, navigation, dispatch) {
    var validation = `${
      !params.password
        ? labels.validationPassword
        : !this.validatePassword(params.password)
        ? labels.validPassword
        : !params.passwordC
        ? labels.validationConfirmPassword
        : params.passwordC !== params.password
        ? labels.validSamePassword
        : true
    }`;
    if (validation === 'true') {
      console.log(JSON.stringify(params));
      let data = {
        email: params?.email,
        new_password: params?.password,
        code: params?.code,
      };
      dispatch(resetPasswordAction(data, navigation));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
      });
    }
  },

  changePassword: function (params, navigation, dispatch, setStates) {
    var validation = `${
      !params.oldPassword
        ? labels.validationOldPassword
        : !params.password
        ? labels.validationPassword
        : !this.validatePassword(params.password)
        ? labels.validPassword
        : !params.passwordC
        ? labels.validationConfirmPassword
        : params.passwordC !== params.password
        ? labels.validSamePassword
        : true
    }`;
    if (validation === 'true') {
      console.log(JSON.stringify(params));
      const data = {
        current_password: params.oldPassword,
        new_password: params.password,
      };
      dispatch(changePasswordAction(data, setStates));
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
        numberOfLines: 4,
        action: {
          text: 'ok',
          textColor: colors.dim,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }
  },
  createTournamentForm: function (params, navigation, endPoint, dispatch) {
    var validation = `${
      !params.tournName
        ? labels.pleaseAllFieldIsRequired
        : !params.sport
        ? labels.pleaseAllFieldIsRequired
        : !params.club
        ? labels.pleaseAllFieldIsRequired
        : !params.startDate
        ? labels.pleaseAllFieldIsRequired
        : !params.endDate
        ? labels.pleaseAllFieldIsRequired
        : !params.lastDateOfReg
        ? labels.pleaseAllFieldIsRequired
        : !params.timeOfGame
        ? labels.pleaseAllFieldIsRequired
        : !params.noOfPlayers
        ? labels.pleaseAllFieldIsRequired
        : !params.noOfRounds
        ? labels.pleaseAllFieldIsRequired
        : true
    }`;
    if (validation === 'true') {
      console.log(JSON.stringify(params));
      // dispatch(endPoint(params, navigation))
      navigation.navigate('TournamentsRound');
    } else {
      Snackbar.show({
        text: validation,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.themeColor,
        fontFamily: fonts.WorkSansMedium,
        textColor: colors.white,
      });
    }
  },
};

export default Utility;
