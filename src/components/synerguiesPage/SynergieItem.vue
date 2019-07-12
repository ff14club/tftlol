<template>
  <div class="synergies-page-item">
    <div class="synergies-page-item__head">
      <div class="synergies-page-item__col">
        <img :src=synergieIcon class="synergies-page-item__img">
        <div class="synergies-page-item__title">{{synergieName}}</div>
      </div>
      <!--      <div class="synergies-page-item__champions">-->
      <!--        <div-->
      <!--          class="synergies-page-item__champion"-->
      <!--          style="background-image: url(/images/champions/Varus.png)">-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="synergies-page-item__body" v-html="synergieText"></div>
  </div>
</template>

<script>
export default {
  name: 'SynergieItem',
  props: ['synergieName', 'synergieIcon', 'synergieText'],
};
</script>

<style scoped lang="scss">
  .synergies-page-item {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 20px;
  }

  .synergies-page-item__head {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background-color: #323232;
    color: #ffffff;
    padding: 10px;
  }

  .synergies-page-item__col {
    display: flex;
    align-items: center;
  }

  .synergies-page-item__champion {
    height: 100%;
    width: 40px;
    background-size: cover;
    background-position: center;
    border: 2px solid red;
  }

  .synergies-page-item__body {
    padding: 10px;
  }
</style>
