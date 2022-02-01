<template>
  <section class="library">
    <h1 class="title library__title">Movie: {{ $route.params.title }}</h1>
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