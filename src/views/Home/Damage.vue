<template>
  <div class="damage">

    <Submenu :margin="true"/>

    <div class="container">

      <div class="damage-title">Расчет урона по игроку</div>

      <table>
        <thead>
        <tr>
          <th></th>
          <th>T1</th>
          <th>T2</th>
          <th>T3</th>
          <th>T4</th>
          <th>T5</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1 звезда</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2 звезды</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>3 звезды</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
import Submenu from '../../components/app/Submenu.vue';

export default {
  name: 'Damage',
  components: { Submenu },
};
</script>

<style scoped lang="scss">

  .damage-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }

</style>
