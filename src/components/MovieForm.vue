<template>
  <section class="library">
    <h1 class="h2 title library__title">&laquo;{{ $route.params.title }}&raquo;</h1>
    <p class="library__content">{{ $store.getters['library/single'] }}</p>
    <p class="library__content">The selected movie and all information about it will be placed here.</p>
    <router-link :to="`/library`">Back</router-link>
  </section>
</template>

<script>
export default {
  name: "MovieForm"
}
</script>

<style scoped>

</style>