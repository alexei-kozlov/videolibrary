import {createStore} from 'vuex';
import userStore from './user';
import libraryStore from './library';

export default createStore({
  modules: {
    user: userStore,
    library: libraryStore,
  },
})