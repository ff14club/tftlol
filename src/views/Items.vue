<template>
  <div class="items-page">

    <div class="container items-page-container">

      <div class="items-page-title">Таблица предметов</div>

      <div class="items-table-wrapper">
        <table class="items-table">
          <thead>
          <tr>
            <th class="items-table__cell"></th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1038.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1043.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1031.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1057.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1058.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/3070.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/1011.png'"
              />
            </th>
            <th class="items-table__cell">
              <Item
                :img="'/images/items/Spatula.png'"
              />
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1038.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3031.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/SwordOfTheDivine.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3026.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3072.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3146.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3161.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/ZekesHerald.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3142.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1043.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/SwordOfTheDivine.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3094.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3046.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/CursedBlade.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3124.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3087.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3748.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3153.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1031.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3026.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3046.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3075.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/SwordBreaker.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3190.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3110.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/RedBuff.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3109.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1057.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3072.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/CursedBlade.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/SwordBreaker.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/DragonsClaw.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/IonicSpark.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Hush.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3172.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3085.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1058.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3146.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3124.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3190.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/IonicSpark.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3089.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3285.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3165.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Yuumi.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/3070.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3161.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3087.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3110.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Hush.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3285.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3040.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3107.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Aatrox.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/1011.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/ZekesHerald.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3748.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/RedBuff.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3172.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3165.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3107.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3083.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3022.png'"/>
            </td>
          </tr>
          <tr>
            <td class="items-table__cell">
              <Item :img="'/images/items/Spatula.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3142.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3153.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3109.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3085.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Yuumi.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/Aatrox.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/3022.png'"/>
            </td>
            <td class="items-table__cell">
              <Item :img="'/images/items/ForceOfNature.png'"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>

<script>
import Item from '../components/itemsPage/Item.vue';

export default {
  name: 'Items',
  components: { Item },
};
</script>

<style scoped lang="scss">

  .items-page {
    margin: 50px 0;
  }

  .items-page-container {
    max-width: 700px;
  }

  .items-page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .items-table {
    border: none;
    thead {
      background-color: transparent;
      tr {
        th {
          border-right: none;
          line-height: 0;
          padding: 5px;
        }
      }
    }
    tbody {
      tr {
        border-bottom: none;
        td {
          border-right: none;
          line-height: 0;
          padding: 5px;
        }
      }
    }
  }

</style>
