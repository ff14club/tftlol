<template>
  <div class="goldXP">

    <Submenu :margin="true"/>

    <div class="container">
      <div class="goldXP-title">Серии</div>

      <table>
        <thead>
        <tr>
          <th>Серия побед/поражений</th>
          <th>Бонус золота</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1 победа/поражение</td>
          <td>-</td>
        </tr>
        <tr>
          <td>2 победы/поражения</td>
          <td>-</td>
        </tr>
        <tr>
          <td>3 победы/поражения</td>
          <td>+1 золото</td>
        </tr>
        <tr>
          <td>4 победы/поражения</td>
          <td>+1 золото</td>
        </tr>
        <tr>
          <td>5 побед/поражений</td>
          <td>+2 золота</td>
        </tr>
        <tr>
          <td>6 побед/поражений</td>
          <td>+2 золота</td>
        </tr>
        <tr>
          <td>7 побед/поражений</td>
          <td>+2 золота</td>
        </tr>
        <tr>
          <td>8 побед/поражений</td>
          <td>+3 золота</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Submenu from '../../components/app/Submenu.vue';

export default {
  name: 'GoldXP',
  components: { Submenu },
};
</script>

<style scoped lang="scss">

  .goldXP-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }


</style>
