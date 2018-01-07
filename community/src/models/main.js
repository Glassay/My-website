import { getArticles, star } from '../service/main';

export default {
  namespace: 'main',

  state: {
    user: '1',
    header: 'https://avatars2.githubusercontent.com/u/23077808?s=460&v=4',
    Article: [],
    current: 1,
    fuck: 0,
  },

  effects: {
    * changecurrent({ payload }, { put }) {
      yield put({
        type: 'changecurrent1',
        payload,
      });
      yield put({
        type: 'getallArticle',
        payload,
      });
    },
    * getallArticle({ payload }, { call, put, select }) {
      const main = yield select(state => state.main);
      const Article = yield call(getArticles, main);
      yield put({
        type: 'getArticle',
        payload: Article,
      });
    },
    * star({ payload }, { call }) {
      yield call(star, payload);
    },
  },

  reducers: {
    setuser(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
    setuserheader(state, { payload }) {
      return {
        ...state,
        header: payload,
      };
    },
    changecurrent1(state, { payload }) {
      return {
        ...state,
        current: payload,
      };
    },
    getArticle(state, { payload }) {
      return {
        ...state,
        Article: payload,
      };
    },
  },
};
