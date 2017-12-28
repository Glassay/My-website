// import { loginfunc } from '../service/login';

export default {
  namespace: 'login',

  state: {
    username: '',
    passward: '',
    registerUsername: '',
    registerPassward: '',
  },
  effects: {
    * login({ payload }, { select }) {
      console.log('effects');
      const login = yield select(state => state.login);
      console.log(login);
      // const key = yield call(loginfunc, { login });
      // console.log(key);
      // yield put({
      //   type: 'changeSubmitting',
      //   payload: key,
      // });
    },
  },

  reducers: {
    writeUsername(state, { payload }) {
      return {
        ...state,
        username: payload.target.value,
      };
    },
    writePassward(state, { payload }) {
      return {
        ...state,
        passward: payload.target.value,
      };
    },
    writeRegisterUsername(state, { payload }) {
      return {
        ...state,
        registerUsername: payload.target.value,
      };
    },
    writeRegisterPassward(state, { payload }) {
      return {
        ...state,
        registerPassward: payload.target.value,
      };
    },
  },
};
