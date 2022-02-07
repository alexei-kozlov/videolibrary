export default {
  addMovie(state, data) {
    state.library.push(data);
  },
  clear(state) {
    state.library = [];
  }
}