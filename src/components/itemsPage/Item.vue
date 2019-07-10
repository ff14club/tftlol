<template>
  <div class="item" :style="`background-image: url(${img})`"></div>
</template>

<script>
export default {
  name: 'Item',
  props: ['img'],
};
</script>

<style scoped lang="scss">

  .item {
    width: 100%;
    background-size: cover;
    background-position: center;
    margin: auto;
    overflow: hidden;
    &:before {
      content: '';
      padding-top: 100%;
      float: left;
    }
  }

</style>
