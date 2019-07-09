<template>
  <div class="champion" :style="`border-color: ${costColor}`">
    <img :src=img alt="">
  </div>
</template>

<script>
export default {
  name: 'Champion',
  props: ['img', 'cost'],
  computed: {
    costColor() {
      if (this.cost === 1) {
        return '#d6d6d6';
      }
      if (this.cost === 2) {
        return '#11b288';
      }
      if (this.cost === 3) {
        return '#207ac7';
      }
      if (this.cost === 4) {
        return 'purple';
      }
      if (this.cost === 5) {
        return '#ffb93b';
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .champion {
    border: 2px solid;
    display: inline-block;
    img {
      width: 40px;
      margin: 2px;
    }
  }
</style>
