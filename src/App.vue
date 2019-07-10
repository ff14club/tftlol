<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/app/Header.vue';
import Footer from './components/app/Footer.vue';

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
  @import "assets/style/main";

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
