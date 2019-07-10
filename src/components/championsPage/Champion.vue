<template>
  <div
    class="champion"
    :style="`border-color: ${costColor}; background-image: url(${img})`"
  >
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
      return '#ffb93b';
    },
  },
};
</script>

<style scoped lang="scss">
  .champion {
    border: 2px solid;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center;
  }
</style>
