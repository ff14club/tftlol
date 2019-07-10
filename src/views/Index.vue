<template>
  <div class="homepage">
    <div class="homepage-menu">
      <div class="container homepage-menu-container">
        <router-link to="/patch-notes" class="homepage-menu__link">Патчи</router-link>
        <router-link to="/guides/rounds" class="homepage-menu__link">Раунды</router-link>
        <router-link to="/guides/goldXP" class="homepage-menu__link">Золото/Опыт</router-link>
        <router-link to="/guides/damage" class="homepage-menu__link">Формула урона</router-link>
        <router-link to="/guides/reroll" class="homepage-menu__link">Реролл</router-link>
        <router-link to="/guides/hotkeys" class="homepage-menu__link">Горячие клавиши</router-link>
        <router-link to="/guides/little-legends" class="homepage-menu__link">
          Маленькие легенды
        </router-link>
      </div>
    </div>

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
export default {
  name: 'Index',
};
</script>

<style scoped lang="scss">

  .homepage-menu {
    background-color: #484850;
  }

  .homepage-menu__link {
    color: #ffffff;
    padding: 10px 20px;
    display: inline-block;
  }

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
