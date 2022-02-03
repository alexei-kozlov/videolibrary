<template>
  <form class="search__form" method="get" action="javascript:void(0);">
    <label class="search__label">
      <input id="search" class="search__input" type="text" placeholder="enter movie name" autofocus>
    </label>
    <button id="submit" class="search__btn btn" type="button">
      <span class="search__btn-name">Search</span>
      <svg class="search__btn-icon" fill="#fff"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.531 56.53" width="20" height="20">
        <path fill-rule="evenodd"
              d="M548.266,1673.81l-2.954,2.96L529,1660.45a18,18,0,0,1-3.094,2.25,24.059,24.059,0,0,1-3.515,1.69,20.8,20.8,0,0,1-3.868,1.06,24.021,24.021,0,0,1-4.007.35,21.867,21.867,0,0,1-8.93-1.83,23.622,23.622,0,0,1-7.242-4.92,22.523,22.523,0,0,1-4.852-7.25,22.224,22.224,0,0,1-1.758-8.78,22.6,22.6,0,0,1,22.782-22.79,22.337,22.337,0,0,1,8.789,1.76,22.794,22.794,0,0,1,7.242,4.85,23.707,23.707,0,0,1,4.922,7.25,21.9,21.9,0,0,1,1.828,8.93,23.551,23.551,0,0,1-.352,4,20.544,20.544,0,0,1-1.054,3.87,24.84,24.84,0,0,1-1.688,3.52,18.988,18.988,0,0,1-2.25,3.09l16.313,16.31h0Zm-54.141-30.79a19.963,19.963,0,0,0,1.547,7.87,20.187,20.187,0,0,0,4.359,6.47,20.879,20.879,0,0,0,6.539,4.43,19.709,19.709,0,0,0,7.946,1.62,19.226,19.226,0,0,0,7.875-1.62,21.318,21.318,0,0,0,10.9-10.9,19.26,19.26,0,0,0,1.617-7.87,19.776,19.776,0,0,0-1.617-7.95,21.078,21.078,0,0,0-4.43-6.54,20.279,20.279,0,0,0-6.468-4.36,20.032,20.032,0,0,0-7.875-1.55,20.538,20.538,0,0,0-7.946,1.55,20.036,20.036,0,0,0-10.9,10.9,20.5,20.5,0,0,0-1.547,7.95h0Z"
              transform="translate(-491.719 -1620.22)"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchForm"
}
</script>

<style scoped>
.btn {
  width: 225px;
  height: 60px;
  border: 1px solid transparent;
  background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
  padding: 15px 50px;
  color: #fff;
  font-family: "Noto Sans SC", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
}

.btn:hover, .btn:focus {
  background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
}

.btn:active {
  border: 1px solid #0039ff;
  opacity: 0.9;
}

.search__form {
  width: 650px;
  height: 60px;
  border: 2px solid #0039ff;
  border-radius: 5px;
  text-align: left;
  position: relative;
  margin: 50px auto;
}

@media screen and (max-width: 850px) {
  .search__form {
    margin: 30px auto;
    width: 100%;
  }
}

@media screen and (max-width: 520px) {
  .search__form {
    height: 30px;
  }
}

.search__input {
  width: 78%;
  height: 100%;
  margin: 0;
  padding: 0 10px;
  background: #fff;
  outline: none;
  border: none;
  font-family: "Nova Mono", "Roboto Mono", monospace;
  font-size: 20px;
  color: #5474fd;
  letter-spacing: 0.1em;
}

@media screen and (max-width: 520px) {
  .search__input {
    width: 88%;
  }
}

.search__input::placeholder {
  font-family: "Nova Mono", "Roboto Mono", monospace;
  font-size: 22px;
  color: rgba(84, 116, 253, 0.5);
  letter-spacing: 0.1em;
  text-align: left;
  padding: 0 10px;
}

@media screen and (max-width: 600px) {
  .search__input::placeholder {
    padding: 0;
  }
}

@media screen and (max-width: 500px) {
  .search__input::placeholder {
    font-size: 4vw;
    text-align: center;
  }
}

.search__label {
  display: initial;
}

.search__btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 146px;
  height: 56px;
  padding-left: 12px;
  background: #496bfe;
  outline: none;
  border-left: 2px solid #0039ff;
}

.search__btn:hover {
  background: #5474fd;
}

@media screen and (max-width: 520px) {
  .search__btn {
    width: 12%;
    height: 26px;
    padding: 5px;
  }
}

.search__btn-name {
  text-align: left;
}

@media screen and (max-width: 520px) {
  .search__btn-name {
    display: none;
  }
}

.search__btn-icon {
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
}

@media screen and (max-width: 520px) {
  .search__btn-icon {
    right: 50%;
    transform: translate(50%, -50%) scale(0.8);
  }
}
</style>