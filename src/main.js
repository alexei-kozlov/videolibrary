window.$ = JQuery;
import JQuery from 'jquery'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CustomInput from '@/components/ui/CustomInput.vue';
import CustomTextarea from '@/components/ui/CustomTextarea.vue';
import CustomBtn from '@/components/ui/CustomBtn.vue';
import CustomRadio from '@/components/ui/CustomRadio.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKW4WnGvKhAZs77qbmUiDUFtxb_lB9Fls",
  authDomain: "videolibrary-c5c51.firebaseapp.com",
  projectId: "videolibrary-c5c51",
  storageBucket: "videolibrary-c5c51.appspot.com",
  messagingSenderId: "319341893539",
  appId: "1:319341893539:web:df607ad59082480628ac16"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.commit('user/setAuthUser', user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

createApp(App)
    .component('CustomInput', CustomInput)
    .component('CustomTextarea', CustomTextarea)
    .component('CustomBtn', CustomBtn)
    .component('CustomRadio', CustomRadio)
    .use(router)
    .use(store)
    .mount('#app');

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
                movieHTML += '<img class="movie__no-poster" src="' + urlNoImage + '" alt="No Poster" style="width: 100%;">';
              }
              movieHTML += '</div>';
              movieHTML += '<div class="movie__bottom"><span class="movie__title">' + movie.Title + '</span>';
              movieHTML += '<span class="movie__year">' + '(' + movie.Year + ')' + '</span>';
              movieHTML += '<a class="btn movie__btn" href="http://www.imdb.com/title/' + movie.imdbID + '" target="_blank">To IMDb <span class="btn__arrow">&rarr;</span></a></div></li>';
            });
          } else movieHTML += '<li class="movie__no-movies" ' +
              'style="text-align: left; width: 100%;">' +
              'No movies found that match: ' + '"' + searchMovie + '"';

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