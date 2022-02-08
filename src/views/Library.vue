<template>
  <!--<custom-modal ref="popup">
    <template #header>
      <h5 class="modal-title font-weight-bold">Movie</h5>
    </template>
    <template #body>Do you really want to delete this movie?</template>
    <template #footer>
      <button class="btn btn-secondary" @click="onNoClick">No</button>
      <button class="btn btn-primary" @click="doDelete(movie.id)">Yes</button>
    </template>
  </custom-modal>-->
  <section class="library">
    <h1 class="title library__title">Library</h1>
    <p class="library__content">The library of movies of the current user of this service</p>
    <p class="library__content">({{ $store.getters['library/count'] }} movies)</p>
    <ul class="movie__list w-100 mx-auto mt-2 mb-4 d-flex justify-content-around flex-wrap rounded">
      <li v-for="movie in libraryArray" :key="movie.id"
          class="movie__item">
        <button type="button" class="movie__del-btn modal-close-btn close text-center" @click="doDelete(movie.id)"
                style="outline: none;">
          <span>&times;</span>
        </button>
        <div class="movie__poster-wrapper">
          <img class="movie__poster"
               :alt="movie.Title"
               :src="movie.Poster !== 'N/A' ? movie.Poster : noPoster">
        </div>
        <div class="movie__bottom">
          <span class="movie__title">"{{ movie.Title }}"</span>
          <span class="movie__year">({{ movie.Year }})</span>
          <a class="btn movie__btn" target="_blank"
             :href="'http://www.imdb.com/title/' + movie.imdbID">
            To IMDb
            <span class="btn__arrow">&rarr;</span>
          </a>
          <div class="block-control bg-white rounded text-center font-weight-bold">
            <router-link class="border-right d-inline-block w-50" :to="`/movie/edit/${movie.id}`">Edit</router-link>
            <router-link class="border-left d-inline-block w-50" :to="`/movie/${movie.id}`">GoTo</router-link>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
// import CustomModal from "@/components/ui/CustomModal.vue";

export default {
  name: "Library",
  // components: {CustomModal},
  data() {
    return {
      noPoster: null,
      shownModal: false,
    }
  },
  computed: {
    libraryArray() {
      return this.$store.getters['library/all'];
    },
  },
  methods: {
    doDelete(id) {
      if (confirm('Do you really want to delete this movie?')) {
        this.$store.dispatch('library/deleteMovie', id);
      }
    },
    /*doDelete(id) {
      this.$refs.popup.shown = false;
      this.$store.dispatch('library/deleteMovie', id);
    },
    showModal() {
      this.$refs.popup.shown = true;
    },
    onNoClick() {
      this.$refs.popup.shown = false;
    },*/
  },
  created() {
    this.noPoster = require('@/assets/img/no-poster.png');
  }
};
</script>

<style lang="scss" scoped>
.movie {
  &__list {
    background: rgba(0, 0, 0, .4);
  }

  &__item {
    padding-top: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__del-btn {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
    background: #ff0000;
    border-radius: 50%;

    span {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-48%, -53%);
      color: #fff;
      text-shadow: none;
    }
  }
}
</style>