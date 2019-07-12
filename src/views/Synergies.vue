<template>
  <div class="synergies-page">
    <div class="container synergies-page-container">
      <div class="row">
        <div class="synergies-page-col col">
          <div class="synergies-page__title">Фракции</div>
          <div v-if="origins">
            <SynergieItem
              v-for="item in origins"
              :key="item.name"
              :synergieName="item.name"
              :synergieIcon="item.icon"
              :synergieText="item.text"
            />
          </div>
        </div>
        <div class="synergies-page-col col">
          <div class="synergies-page__title">Классы</div>
          <div v-if="classes">
            <SynergieItem
              v-for="item in classes"
              :key="item.name"
              :synergieName="item.name"
              :synergieIcon="item.icon"
              :synergieText="item.text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SynergieItem from '../components/synerguiesPage/SynergieItem.vue';

export default {
  name: 'Synergies',
  components: { SynergieItem },
  computed: {
    origins() {
      if (this.$store.state.synergies.data) {
        return this.$store.state.synergies.data[0].origins;
      }
      return null;
    },
    classes() {
      if (this.$store.state.synergies.data) {
        return this.$store.state.synergies.data[0].classes;
      }
      return null;
    },
  },
  mounted() {
    this.$store.dispatch('loadSynergies');
  },
};
</script>

<style scoped lang="scss">

  .synergies-page {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .synergies-page-col {
    width: 50%;
  }

  .synergies-page__title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }

</style>
