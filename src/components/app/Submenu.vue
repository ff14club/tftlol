<template>
  <div class="submenu" :style="`margin-bottom: ${setMargin}`">
    <div class="container submenu-container">
      <!--        <router-link to="/patch-notes" class="submenu__link">Патчи</router-link>-->
      <router-link to="/rounds" class="submenu__link">Раунды</router-link>
      <router-link to="/goldXP" class="submenu__link">Золото/Опыт</router-link>
      <router-link to="/damage" class="submenu__link">Формула урона</router-link>
      <router-link to="/reroll" class="submenu__link">Реролл</router-link>
      <router-link to="/hotkeys" class="submenu__link">Горячие клавиши</router-link>
      <router-link to="/little-legends" class="submenu__link">
        Маленькие легенды
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submenu',
  props: ['margin'],
  computed: {
    setMargin() {
      if (this.margin) {
        return '50px';
      }
      return 0;
    },
  },
};
</script>

<style scoped lang="scss">

  .submenu {
    background-color: #484850;
  }

  .submenu__link {
    color: #ffffff;
    padding: 10px 20px;
    display: inline-block;
    border-bottom: 5px solid transparent;
    &.router-link-exact-active {
      border-color: #E24E00;
    }
  }

</style>
