import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

function isValidToken(token) {
  return !(token === '' || token === undefined);
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
  mutations: {},
  actions: {
    signIn(context, data) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, data.login, data.password)
          .then((userCredential) => {
            context.state.token = userCredential.user;
            return 'OK';
          })
          .catch((error) => {
            return `Error: ${error.message}`;
          });
    },
    signOut(context) {
      context.state.user = {};
      return 'OK';
    },
  },
}