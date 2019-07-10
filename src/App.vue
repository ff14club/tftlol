<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import "assets/style/main";
</style>
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
