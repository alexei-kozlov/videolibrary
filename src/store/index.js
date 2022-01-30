import {createStore} from "vuex";

export default createStore({
  state() {
    return {
      your_name: '',
      about_yourself: '',
      gender: '',
      movies_list: [],
      movies_favourite: [],
    }
  },
  getters: {},
  mutations: {},
})