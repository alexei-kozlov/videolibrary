//http://www.omdbapi.com/?t=Agnelli&y=2017&plot=full&r=json&apikey=1ce9470d
export default {
  loadLibrary(context) {
    if (!context.state.initLoad) {
      context.state.initLoad = true;
      /*fetch('https://www.omdbapi.com/?s=Agnelli&r=json&apikey=1ce9470d')
          .then((response) => response.json())
          .then((json) => context.state.library = context.state.library.concat(json));*/
    }
  },
  createMovie(context, data) {
    /*fetch('', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
        .then((response) => response.json())
        .then((json) => context.commit('addMovie', json));*/
    context.commit('addMovie', data)
  },
}