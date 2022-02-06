export default {
  count(state) {
    return state.library.length
  },
  all(state) {
    return state.library;
  },
  single(state, i) {
    let movie = state.library.map(obj => obj.Title);
    return movie[i];
  },
  libraryFavourite(state) {
    return state.library.filter(movie => movie.type === 'isFavourite');
  },
  libraryByGenreId(state) {
    return () => state.library.filter(library => library.genreId === id);
  }
}