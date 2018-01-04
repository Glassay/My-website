// import { message } from 'antd';
// import { routerRedux } from 'dva/router';
// import { loginfunc, registerfunc } from '../service/login';

export default {
  namespace: 'edit',

  state: {
    article_title: '',
    article_content: '',
  },

  effects: {
  },

  reducers: {
    writeTitle(state, { payload }) {
      return {
        ...state,
        article_title: payload.target.value,
      };
    },
    writeContent(state, { payload }) {
      return {
        ...state,
        article_content: payload.target.value,
      };
    },
  },
};
