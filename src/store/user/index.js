import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

function isValidToken(token) {
  return token;
}

export default {
  namespaced: true,
  state: {
    token: '',
    name: '',
    user: {},
  },
  getters: {
    isAuth(state) {
      return isValidToken(state.user.accessToken);
    },
    userEmail(state) {
      return state.user.email;
    },
  },
  mutations: {
    setAuthUser(state, data) {
      state.user = data || {};
    },
  },
  actions: {
    signIn(context, data) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, data.login, data.password)
          .then((userCredential) => {
            context.state.user = userCredential.user;
            return 'OK';
          })
          .catch((error) => {
            return `Error: ${error.message}`;
          });
    },
    logOut(context) {
      const auth = getAuth();
      context.state.user = {};
      return signOut(auth).then(() => 'OK');
    },
  },
}