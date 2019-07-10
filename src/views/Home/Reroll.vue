<template>
  <div class="reroll">

    <Submenu :margin="true"/>

    <div class="container">

      <div class="reroll-title">Вероятность выпадения чемпионов</div>

      <table>
        <thead>
        <tr>
          <th>Уровень игрока</th>
          <th>T1 <br> (39 чемпионов)</th>
          <th>T2 <br> (26 чемпионов)</th>
          <th>T3 <br> (21 чемпион)</th>
          <th>T4 <br> (13 чемпионов)</th>
          <th>T5 <br> (10 чемпионов)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>100%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>100%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>65%</td>
          <td>30%</td>
          <td>5%</td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>50%</td>
          <td>35%</td>
          <td>15%</td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>37%</td>
          <td>35%</td>
          <td>25%</td>
          <td>3%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>24,5%</td>
          <td>35%</td>
          <td>30%</td>
          <td>10%</td>
          <td>0,5%</td>
        </tr>
        <tr>
          <td>7</td>
          <td>20%</td>
          <td>30%</td>
          <td>33%</td>
          <td>15%</td>
          <td>2%</td>
        </tr>
        <tr>
          <td>8</td>
          <td>15%</td>
          <td>25%</td>
          <td>35%</td>
          <td>20%</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>9</td>
          <td>10%</td>
          <td>15%</td>
          <td>35%</td>
          <td>30%</td>
          <td>10%</td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
import Submenu from '../../components/app/Submenu.vue';

export default {
  name: 'reroll',
  components: { Submenu },
};
</script>

<style scoped lang="scss">

  .reroll-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }

</style>
