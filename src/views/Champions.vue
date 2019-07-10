<template>
  <div class="champions-page">
    <div class="champions-table-wrapper">
      <table class="champions-table">
        <thead>
        <tr>
          <th class="champion__class"></th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_assassin.png" alt="">убийца
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_blademaster.png" alt="">
            мастер клинка
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_brawler.png" alt="">дебошир
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_elementalist.png" alt="">
            элемент <br> алист
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_guardian.png" alt="">страж
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_gunslinger.png" alt="">стрелок
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_knight.png" alt="">рыцарь
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_ranger.png" alt="">рэйн <br> джер
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_shapeshifter.png" alt="">
            пере <br> вёртыш
          </th>
          <th class="champion__class">
            <img src="/images/icons/classes/trait_icon_sorcerer.png" alt="">чародей
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_demon.png" alt="">Демон
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Evelynn.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Aatrox.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Brand.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Varus.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Elise.png'"
              :cost="2"
            />
            <Champion
              :img="'images/champions/Swain.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Morgana.png'"
              :cost="3"
            />
          </td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_dragon.png" alt="">Дракон
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Shyvana.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/AurelionSol.png'"
              :cost="4"
            />
          </td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_exile.png" alt="">Изгнан <br> ник
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Yasuo.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_glacial.png" alt="">оледе <br> нелый
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Volibear.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Lissandra.png'"
              :cost="2"
            />
            <Champion
              :img="'images/champions/Anivia.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Braum.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Sejuani.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Ashe.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_robot.png" alt="">робот
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Blitzcrank.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_imperial.png" alt="">имперец
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Katarina.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Draven.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Darius.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Swain.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_noble.png" alt="">арист <br> ократ
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Fiora.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Leona.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Lucian.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Garen.png'"
              :cost="1"
            />
            <Champion
              :img="'images/champions/Kayle.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Vayne.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_ninja.png" alt="">ниндзя
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Zed.png'"
              :cost="2"
            />
            <Champion
              :img="'images/champions/Akali.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Shen.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Kennen.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_pirate.png" alt="">пират
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Pyke.png'"
              :cost="2"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Gangplank.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Graves.png'"
              :cost="1"
            />
            <Champion
              :img="'images/champions/Gangplank.png'"
              :cost="3"
            />
            <Champion
              :img="'images/champions/MissFortune.png'"
              :cost="5"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_phantom.png" alt="">призрак
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Mordekaiser.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Kindred.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Karthus.png'"
              :cost="5"
            />
          </td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_wild.png" alt="">одичa <br> лый
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Rengar.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Warwick.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Nidalee.png'"
              :cost="1"
            />
            <Champion
              :img="'images/champions/Gnar.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Ahri.png'"
              :cost="2"
            />
          </td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_void.png" alt="">
            обита <br> тель бездны
          </th>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Khazix.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/RekSai.png'"
              :cost="2"
            />
            <Champion
              :img="'images/champions/Chogath.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Kassadin.png'"
              :cost="1"
            />
          </td>
        </tr>
        <tr>
          <th class="champion__origin">
            <img src="/images/icons/origins/trait_icon_yordle.png" alt="">йордл
          </th>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Kennen.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Tristana.png'"
              :cost="1"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Poppy.png'"
              :cost="3"
            />
          </td>
          <td class="champion-cell"></td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Gnar.png'"
              :cost="4"
            />
          </td>
          <td class="champion-cell">
            <Champion
              :img="'images/champions/Lulu.png'"
              :cost="2"
            />
            <Champion
              :img="'images/champions/Veigar.png'"
              :cost="3"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Champion from '../components/championsPage/Champion.vue';

export default {
  name: 'Index',
  components: { Champion },
};
</script>

<style lang="scss">

  .champions-page {
    background-color: #222222;
    min-height: 100vh;
    padding: 40px 0;
  }

  .champions-table-wrapper {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
  }

  .champions-table {
    width: 100%;
  }

  .champion__origin {
    text-align: center;
    border: 1px solid #3d3d3d;
    width: 70px;
    max-width: 70px;
    padding: 5px;
    background-color: #27282E;
    color: #fff;
    img {
      display: block;
      width: 30px;
      margin: 0 auto 3px;
    }
  }

  .champion__class {
    padding: 5px 10px;
    width: 70px;
    max-width: 70px;
    border: 1px solid #3d3d3d;
    background-color: #27282E;
    color: rgba(#fff, .8);
    img {
      width: 30px;
      display: block;
      margin: 0 auto 3px;
    }
  }

  .champion-cell {
    text-align: center;
    border: 1px solid #3d3d3d;
    line-height: 0;
  }

</style>
