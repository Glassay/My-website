
import { routerRedux } from 'dva/router';
import { loginfunc } from '../service/login';

export default {
  namespace: 'login',

  state: {
    username: '',
    passward: '',
    registerUsername: '',
    registerPassward: '',
    status: '',
  },

  effects: {
    * login({ payload }, { call, put, select }) {
      console.log('effects');
      const login = yield select(state => state.login);
      const key = yield call(loginfunc, login);
      yield put({
        type: 'changeStatus',
        payload: key,
      });
      const stu = yield select(state => state.login.status);
      if (stu) {
        yield put(routerRedux.push('/main'));
      }
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
    changeStatus(state, { payload }) {
      return {
        ...state,
        status: payload,
      };
    },
  },
};
