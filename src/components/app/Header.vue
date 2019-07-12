<template>
  <header class="header">
    <div class="container header-container">
      <router-link to="/" class="header__logo">LoLTFT</router-link>
      <nav class="header-nav">
        <router-link to="/" class="header-nav__link">Главная</router-link>
        <router-link to="/synergies" class="header-nav__link">Синергии</router-link>
        <router-link to="/champions" class="header-nav__link">Чемпионы</router-link>
        <router-link to="/items" class="header-nav__link">Предметы</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">

  .header {
    background-color: #323232;
  }

  .header__logo {
    font-weight: bold;
    font-size: 26px;
    color: #fff;
    margin-right: 30px;
  }

  .header-container {
    display: flex;
    align-items: center;
  }

  .header-nav__link {
    color: #ffffff;
    padding: 20px;
    display: inline-block;
    transition: .25s;
    &:hover {
      background-color: #484850;
    }
    &.router-link-exact-active {
      background-color: #484850;
    }
  }

</style>
