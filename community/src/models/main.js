export default {
  namespace: 'main',

  state: {
    user: '1',
    header: 'https://avatars2.githubusercontent.com/u/23077808?s=460&v=4',
    allArticle: '',
  },

  effects: {
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
  },
};
