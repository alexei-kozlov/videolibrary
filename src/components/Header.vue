<template>
  <header class="header" data-vue-component="Header">
    <div class="header__logo">
      <img :src="customLogo"
           alt="Search Movie" class="header__logo">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/library">Library</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      customLogo: null,
    }
  },
  created() {
    this.customLogo = require('@/assets/img/logo.png')
  }
}
</script>

<style scoped>
.header {
  /*border: 3px solid #00f;*/

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    margin: 0 auto 20px;
  }
}

@media screen and (max-width: 425px) {
  .header {
    flex-direction: row;
    margin: 0 auto 20px;
  }
}

.header__logo {
  width: 10vw;
  height: auto;
}

@media screen and (max-width: 600px) {
  .header__logo {
    width: 20vw;
  }
}

@media screen and (max-width: 425px) {
  .header__logo {
    width: 50vw;
  }
}

.header__title {
  margin: 0 0 0 6%;
  font-family: "Nova Mono", "Roboto Mono", monospace;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 5vw;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

@media screen and (max-width: 600px) {
  .header__title {
    font-size: 8vw;
    margin: 0 auto;
  }
}

#nav {
  padding: 30px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 600px) {
  #nav {
    width: 100%;
    padding: 30px 0;
  }
}

@media screen and (max-width: 425px) {
  #nav {
    width: 50%;
    padding: 20px 0;
    flex-direction: column;
  }
}

#nav a {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  text-decoration: none;
  color: #2c3e50;
  position: relative;
}

@media screen and (max-width: 850px) {
  #nav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 425px) {
  #nav a {
    margin: 10px 0;
  }
}

#nav a::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 1px;
  background: #fff;
  transition: all .5s ease;
}

#nav a:hover::before,
#nav a:focus::before {
  width: 99%;
  left: 0;
  transition: all .5s ease;
}

#nav a.router-link-exact-active {
  color: #fff;
  text-shadow: 2px 2px 2px #000;
  transform: translateY(-2px);
}
</style>