<template>
  <div class="homepage">

    <Submenu/>

    <div class="homepage-preview" style="background-image: url(/images/img-mainbg.jpg)">
      <div class="homepage-preview__sitename">LoLTFT.RU</div>
      <router-link to="/champions" class="homepage-preview__link">Чемпионы</router-link>
    </div>

    <div class="homepage-info">
      <div class="container">
        <div class="youtube">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/liNLLx874g4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Submenu from '../../components/app/Submenu.vue';

export default {
  name: 'Index',
  components: { Submenu },
};
</script>

<style scoped lang="scss">
  .homepage-preview {
    height: 350px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  .homepage-preview__sitename {
    color: #ffffff;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 20px;
  }

  .homepage-preview__link {
    background-color: #DC3545;
    color: #ffffff;
    padding: 20px 4px;
    border-radius: 4px;
    width: 200px;
    text-align: center;
  }

  .homepage-info {
    margin-bottom: 50px;
  }

</style>
