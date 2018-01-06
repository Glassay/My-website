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
    * editup({ payload }, { call, select, put }) {
      const edit = yield select(state => state.edit);
      const regi = yield call(editupup, edit);
      if (regi) {
        message.success('上传成功！');
        yield put({
          type: 'clear',
        });
      } else {
        message.error('上传失败!');
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
    clear(state) {
      return {
        ...state,
        article_title: '',
        article_content: '',
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
