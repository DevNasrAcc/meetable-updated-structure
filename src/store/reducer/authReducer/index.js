const initialState = {
  msg:'',
  loading:null,
  user:null,
  socialLoading:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {...state, loading: true};
    case 'REGISTER_USER_SUCESS':
      return {...state, msg: action.payload, loading: false};
    case 'REGISTER_USER_FAIL':
      return {...state, msg: action.message, loading:false};
    case 'LOGIN_USER':
        return {...state, loading: true};
    case 'LOGIN_USER_SUCESS':
      console.log("reducer", action.payload);
        return {...state, user: action.payload, loading: false};
    case 'LOGIN_USER_FAIL':
        return {...state, msg: action.message, loading:false};  
    case 'FACEBOOK_LOGIN':
          return {...state, socialLoading: true};
    case 'FACEBOOK_LOGIN_SUCESS':
        console.log("reducer", action.payload);
          return {...state, user: action.payload, socialLoading: false};
    case 'FACEBOOK_LOGIN_FAIL':
          return {...state, msg: action.message, socialLoading:false};   
     case 'GOOGLE_LOGIN':
          return {...state, socialLoading: true};
    case 'GOOGLE_LOGIN_SUCESS':
        console.log("reducer", action.payload);
          return {...state, user: action.payload, socialLoading: false};
    case 'GOOGLE_LOGIN_FAIL':
          return {...state, msg: action.message, socialLoading:false};            
    case 'UPDATE_SIGNUP':
            return {...state, loading: true};
    case 'UPDATE_SIGNUP_SUCESS':
          console.log("reducer", action.payload);
            return {...state, loading: false};
    case 'UPDATE_SIGNUP_FAIL':
            return {...state, msg: action.message, loading:false};   
    default:
      return state;
  }
};

export {authReducer};
