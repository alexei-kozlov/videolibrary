<template>
  <i></i>
  <!--<li class="movie__item">
    <div class="movie__poster-wrapper">
      <img class="movie__poster"
           alt="Title"
           src="https://m.media-amazon.com/images/S/sash/4FyxwxECzL-U1J8.png">
    </div>
    <div class="movie__bottom">
      <span class="movie__title">"Title"</span>
      <span class="movie__year">(Year)</span>
      <a class="btn movie__btn" target="_blank"
         href="https://www.imdb.com/title/tt111111">
        To IMDb
        <span class="btn__arrow">&rarr;</span>
      </a>
    </div>
  </li>-->
</template>

<script>
export default {
  name: "MovieListItem"
}
</script>

<style scoped>

.movie__item {
  width: 200px;
  height: auto;
  min-height: 300px;
  margin: 20px;
  padding: 5px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.btn__arrow {
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-60%);
  transition-duration: .4s;
}

.btn:hover .btn__arrow,
.btn:focus .btn__arrow {
  transform: translate(8px, -60%);
  transition-duration: .4s;
}

.movie__btn {
  display: block;
  text-decoration: none;
  width: 100px;
  height: 30px;
  margin: 10px auto;
  border: 1px solid #fff;
  border-radius: 25px;
  font-size: 10px;
  line-height: 1.5;
  color: #fff;
  padding: 6px 0;
  letter-spacing: 0;
  box-shadow: 0 0 10px 1px #000;
  background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
  position: relative;
}

.movie__btn:hover,
.movie__btn:focus {
  background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
}

.movie__btn:active {
  border: 1px solid #0039ff;
  opacity: 0.9;
}

.movie__title,
.movie__year {
  display: block;
  line-height: 1.5;
  color: #000;
  font-weight: 500;
  text-shadow: 0 0 3px #fff;
}

.movie__title {
  font-size: 16px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 850px) {
  .movie__title {
    font-size: 14px;
  }
}

.movie__year {
  font-size: 14px;
}

@media screen and (max-width: 850px) {
  .movie__year {
    font-size: 12px;
  }
}

.movie__poster {
  width: 100%;
  height: auto;
}
</style>