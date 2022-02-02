<template>
  <footer class="footer" data-vue-component="Footer">
    <div class="footer__text">
      <h2 class="footer__title">Search my movie</h2>
      <p class="footer__copyright">© 2022 - All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 40px auto 20px;
  padding: 10px 0;
  border-top: 2px solid #fff;
}

.footer__title {
  margin: 0;
  font-family: "Nova Mono", "Roboto Mono", monospace;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 38px;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

@media screen and (max-width: 600px) {
  .footer__title {
    font-size: 28px;
    margin: 0 auto;
  }
}

.footer__text {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer__copyright {
  font-size: 18px;
  margin: 0;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .footer__copyright {
    font-size: 12px;
    margin: 0;
  }
}
</style>