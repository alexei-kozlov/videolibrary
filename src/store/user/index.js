function isValidToken(token) {
  return token !== '';
}

export default {
  namespaced: true,
  state: {
    token: '',
    name: '',
  },
  getters: {
    isAuth(state) {
      return isValidToken(state.token);
    },
  },
  mutations: {},
  actions: {
    signIn(context, data) {
      if (data.login === 'alex' && data.password === '1234') {
        context.state.token = data.login;
        return 'OK';
      }
      return 'error';
    }
  },
}