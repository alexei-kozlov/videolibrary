import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JQuery from 'jquery'
window.$ = JQuery

createApp(App).use(router).mount('#app')

console.log("Hi!");

//http://www.omdbapi.com/?t=Agnelli&y=2017&plot=full&r=json&apikey=1ce9470d
(function ($) {
  $(function () {
    let apikey = '1ce9470d';

    // Функция поиска
    function search() {
      // Получим значение поискового запроса их поля ввода
      let searchMovie = $('#search').val().toLowerCase(),
          // Пустой HTML для вывода на страницу данных, которые вернули в результате поиска
          movieHTML = "";
      $.ajax({
        url: 'https://www.omdbapi.com/?apikey=' + apikey + '&s=' + searchMovie + '&y=' + '&plot=full' + '&r=json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          // Если поиск прошел удачно, перезапишем в HTML список фильмов
          if (data.Response === 'True') {
            $.each(data.Search, function (i, movie) {
              movieHTML += '<li class="movie__item" id="' + movie.imdbID + '" style="background: rgba(255,255,255,.5);"><div class="movie__poster-wrapper">';
              if (movie.Poster !== 'N/A') {
                // Если постер есть, покажем его
                movieHTML += '<img class="movie__poster" src="' + movie.Poster + '" alt="Poster">';
              } else {
                // Если нет, выведем "постер без постера"
                let urlNoImage = 'https://m.media-amazon.com/images/S/sash/4FyxwxECzL-U1J8.png';
                movieHTML += '<div class="movie__poster-placeholder"><img class="movie__no-poster" src="' + urlNoImage + '" alt="No Poster"></div>';
              }
              movieHTML += '</div>';
              movieHTML += '<span class="movie__title">' + movie.Title + '</span>';
              movieHTML += '<span class="movie__year">' + '(' + movie.Year + ')' + '</span>';
              movieHTML += '<a class="btn movie__btn" href="http://www.imdb.com/title/' + movie.imdbID + '" target="_blank">To IMDb <span class="btn__arrow">&rarr;</span></a></li>';
            });
          } else movieHTML += '<li class="movie__no-movies">No movies found that match: ' + '"' + searchMovie + '"';

          $('.movie__list').html(movieHTML);
        },// Конец поиска
      }); // Конец AJAX запроса
    } // Конец функции поиска

    // Функция ввода-вывода
    $('#search').keyup(function (evt) {
      search();
      if (evt.keyCode === 13) {
        search();
        $(this).blur();
      }
    });
    $('#submit').on('click', function () {
      search();
    });
  });
})(JQuery);