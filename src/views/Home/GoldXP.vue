<template>
  <div class="goldXP">

    <Submenu :margin="true"/>

    <div class="container">

      <div class="row">
        <div class="goldXP-col col">
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
        <div class="goldXP-col col">
          <div class="goldXP-title">Таблица опыта</div>
          <table>
            <thead>
            <tr>
              <th>Уровень</th>
              <th>Количество опыта до уровня</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1ур. ⮕ 2ур.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2ур. ⮕ 3ур.</td>
              <td>2 XP</td>
            </tr>
            <tr>
              <td>3ур. ⮕ 4ур.</td>
              <td>6 XP</td>
            </tr>
            <tr>
              <td>4ур. ⮕ 5ур.</td>
              <td>10 XP</td>
            </tr>
            <tr>
              <td>5ур. ⮕ 6ур.</td>
              <td>18 XP</td>
            </tr>
            <tr>
              <td>6ур. ⮕ 7ур.</td>
              <td>30 XP</td>
            </tr>
            <tr>
              <td>7ур. ⮕ 8ур.</td>
              <td>46 XP</td>
            </tr>
            <tr>
              <td>8ур. ⮕ 9ур.</td>
              <td>70 XP</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

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

  .goldXP{
    margin-bottom: 50px;
  }

  .goldXP-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .goldXP-col {
    width: 50%;
  }


</style>
