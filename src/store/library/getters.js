export default {
  count(state) {
    return state.library.length
  },
  all(state) {
    return state.library;
  },
  libraryFavourite(state) {
    return state.library.filter(movie => movie.type === 'isFavourite');
  },
  libraryByGenreId(state) {
    return () => state.library.filter(library => library.genreId === id);
  }
}