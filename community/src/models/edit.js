import { message } from 'antd';
// import { routerRedux } from 'dva/router';
import { editupup } from '../service/edit';

export default {
  namespace: 'edit',

  state: {
    user: '',
    article_title: '',
    article_content: '',
  },

  effects: {
    * editup({ payload }, { call, select }) {
      console.log('editup');
      const edit = yield select(state => state.edit);
      const regi = yield call(editupup, edit);
      if (regi) {
        message.success('上传成功！');
      } else {
        message.error('注册失败!');
      }
    },
  },

  reducers: {
    setuser(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
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
