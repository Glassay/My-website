
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { loginfunc, registerfunc, getuserheader } from '../service/login';

export default {
  namespace: 'login',

  state: {
    username: '',
    passward: '',
    registerUsername: '',
    registerPassward: '',
  },

  effects: {
    * login({ payload }, { call, put, select }) {
      const login = yield select(state => state.login);
      const key = yield call(loginfunc, login);
      if (key) {
        yield put(routerRedux.push('/main'));
        // console.log(payoad);
        yield put({
          type: 'main/setuser',
          payload: login.username,
        });
        yield put({
          type: 'edit/setuser',
          payload: login.username,
        });
        const header = yield call(getuserheader, login);
        yield put({
          type: 'main/setuserheader',
          payload: header,
        });
      } else {
        message.error('账号或密码错误，登录失败！');
      }
    },
    * register({ payload }, { call, select }) {
      const login = yield select(state => state.login);
      const regi = yield call(registerfunc, login);
      if (regi) {
        message.success('注册成功！');
      } else {
        message.error('注册失败！该账号已被注册');
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
  },
};
