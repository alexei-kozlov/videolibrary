<template>
  <section class="search">
    <SearchForm></SearchForm>
    <ul id="movies" class="movie__list">
      <MovieListItem></MovieListItem>
    </ul>
  </section>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import MovieListItem from '@/components/MovieListItem.vue';
import JQuery from 'jquery';

export default {
  name: "Search",
  components: {
    SearchForm,
    MovieListItem
  },
};
//http://www.omdbapi.com/?t=Agnelli&y=2017&plot=full&r=json&apikey=1ce9470d
(function ($) {
  $(function () {
    let searchInput = $('#search');

    // Функция поиска
    function search() {
      // Получим значение поискового запроса их поля ввода
      let searchMovie = searchInput.val().toLowerCase(),
          // Для вывода на страницу списка найденных фильмов
          movieList = $('.movie__list'),
          // Пустой HTML для вывода на страницу данных, которые вернули в результате поиска
          movieHTML = '';
      $.ajax({
        url: 'https://www.omdbapi.com/?apikey=1ce9470d' + '&s=' + searchMovie + '&y=' + '&plot=full' + '&r=json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          // Если поиск прошел удачно, перезапишем в HTML список фильмов
          if (data.Response === 'True') {
            $.each(data.Search, function (i, movie) {
              movieHTML += '<li class="movie__item" id="' + movie.imdbID + '"><div class="movie__poster-wrapper">';
              if (movie.Poster !== 'N/A') {
                // Если постер есть, покажем его
                movieHTML += '<img class="movie__poster" src="' + movie.Poster + '" alt="Poster">';
              } else {
                // Если нет, выведем "постер без постера"
                let urlNoImage = 'https://m.media-amazon.com/images/S/sash/4FyxwxECzL-U1J8.png';
                movieHTML += '<img class="movie__no-poster" src="' + urlNoImage + '" alt="No Poster" style="width: 100%;">';
              }
              movieHTML += '</div>';
              movieHTML += '<div class="movie__bottom"><span class="movie__title">' + movie.Title + '</span>';
              movieHTML += '<span class="movie__year">' + '(' + movie.Year + ')' + '</span>';
              movieHTML += '<a class="btn movie__btn" href="http://www.imdb.com/title/' + movie.imdbID + '" target="_blank">To IMDb <span class="movie__btn-arrow">&rarr;</span></a></div></li>';
            });
          } else movieHTML += '<li class="movie__no-movies">' +
              'No movies found that match: ' + '"' + searchMovie + '"';

          movieList.html(movieHTML);
          movieList.has('.movie__item').css('background', 'rgba(0, 0, 0, .4)');
          movieList.has('.movie__no-movies').css('background', 'transparent');
        },// Конец поиска
      }); // Конец AJAX запроса
    } // Конец функции поиска

    // Функция ввода-вывода
    searchInput.keyup(function (evt) {
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
</script>

<style lang="scss">

.movie {
  &__list {
    width: 100%;
    height: auto;
    margin: 10px auto 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: .25rem;
  }

  &__no-movies {
    width: 650px;
    word-break: break-all;
    margin: 0 auto;
    padding: 6px;
    text-align: left;
    background: rgba(0, 0, 0, .5);

    @media screen and (max-width: 850px) {
      width: 100%;
    }
  }

  &__item {
    width: 200px;
    height: auto;
    min-height: 300px;
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__btn {
    display: block;
    text-decoration: none;
    width: 100px;
    height: 30px;
    margin: 10px auto;
    border-radius: 25px;
    font-size: 10px;
    line-height: 1.5;
    color: #fff;
    padding: 6px 0;
    letter-spacing: 0;
    background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
    position: relative;
    transition-duration: .3s;

    &:hover,
    &:focus {
      box-shadow: 3px 2px 6px rgb(0 0 0 / 60%), -3px 2px 6px rgb(0 0 0 / 60%);
      background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
      color: #fff;
      transition-duration: .3s;
    }

    &:not(:disabled):not(.disabled):active {
      border: 1px solid #fff;
      background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
      opacity: .8;
      transition-duration: .3s;
    }
  }

  &__btn-arrow {
      display: block;
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-60%);
      transition-duration: .4s;

    .movie__btn:hover &,
    .movie__btn:focus & {
      transform: translate(8px, -60%);
      color: #fff;
      transition-duration: .3s;
    }
  }

  &__title,
  &__year {
    display: block;
    line-height: 1.5;
    color: #000;
    font-weight: 500;
    text-shadow: 0 0 3px #fff;
  }

  &__title {
    font-size: 16px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 850px) {
      font-size: 14px;
    }
  }

  &__year {
    font-size: 14px;

    @media screen and (max-width: 850px) {
      font-size: 12px;
    }
  }

  &__poster {
    width: 100%;
    height: auto;
  }
}

</style>