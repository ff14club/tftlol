<template>
  <div class="champion-popup-wrapper" @click="closePopup">
    <div class="champion-popup" v-if="championData">
      <div class="champion-popup__name">
        {{championData.name}} <span><img src="/images/coin.svg" alt=""> {{championData.price}}</span>
      </div>
      <div class="champion-popup__origin">{{championData.origin}}</div>
      <div class="champion-popup__class">{{championData.cclass}}</div>
      <div class="champion-popup__range">Дальность атаки: {{championData.range}}</div>
      <div class="champion-popup__spell">
        <div class="champion-popup__spellname">{{championData.spellName}}</div>
        <div class="champion-popup__spellmana">({{championData.spellMana}} маны)</div>
      </div>
      <div class="champion-popup__spelltext">{{championData.spellText}}</div>
      <div class="champion-popup__spelldamage" v-html="championData.spellDamage"></div>
      <div class="champion-popup__recommenditems">{{championData.recommendItems}}</div>
    </div>
    <div class="loading" v-else>Загрузка...</div>
  </div>
</template>

<script>
export default {
  name: 'ChampionPopup',
  computed: {
    championData() {
      return this.$store.state.champion;
    },
  },

  methods: {
    closePopup() {
      this.$store.dispatch('closePopup');
    },
  },
};
</script>

<style scoped lang="scss">
  .champion-popup-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#000, .3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .champion-popup {
    background-color: rgba(#000, 1);
    max-width: 600px;
    padding: 30px;
    color: rgba(#fff, .8);
    border: 2px solid saddlebrown;
  }

  .champion-popup__name {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    span {
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      img {
        width: 10px;
        margin-right: 3px;
      }
    }
  }

  .champion-popup__class {
    margin-bottom: 20px;
  }

  .champion-popup__range {
    margin-bottom: 20px;
  }

  .champion-popup__spell {
    display: flex;
    margin-bottom: 5px;
  }

  .champion-popup__spellname {
    font-weight: bold;
    margin-right: 10px;
  }

  .champion-popup__spelltext {
    margin-bottom: 5px;
  }

  .loading {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
  }
</style>
