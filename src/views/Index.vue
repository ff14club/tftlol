<template>
  <div class="home">
    <div class="grid-container">
      <div class="cc"></div>
      <div class="classes-wrapper">
        <div class="assassin class">Убийца</div>
        <div class="blademaster class">Мастер клинка</div>
        <div class="brawler class">Дебошир</div>
        <div class="elementalist class">Элементалист</div>
        <div class="guardian class">Страж</div>
        <div class="gunslinger class">Стрелок</div>
        <div class="knight class">Рыцарь</div>
        <div class="ranger class">Рейнджер</div>
        <div class="shapeshifter class">Перевёртыш</div>
        <div class="sorcerer class">Чародей</div>
      </div>
      <div class="origins-wrapper">
        <div class="origin demon">Демон</div>
        <div class="origin dragon">Дракон</div>
        <div class="origin exile">Изгнанник</div>
        <div class="origin glacial">Оледенелый</div>
        <div class="origin robot">Робот</div>
        <div class="origin imperial">Имперец</div>
        <div class="origin noble">Пристократ</div>
        <div class="origin ninja">Ниндзя</div>
        <div class="origin pirate">Пират</div>
        <div class="origin phantom">Призрак</div>
        <div class="origin wild">Одичалый</div>
        <div class="origin void">Обитатель бездны</div>
        <div class="origin yordle">Йордл</div>
      </div>
      <div class="champions">
        <div class="champion">
          <img src="../assets/images/champions/Nidalee.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style lang="scss">

  .grid-container {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 1fr 1fr;
    grid-template-rows: 0.6fr 1.4fr 1fr;
    grid-template-areas: "cc classes-wrapper classes-wrapper classes-wrapper" "origins-wrapper champions champions champions" "origins-wrapper champions champions champions";
  }

  .cc {
    grid-area: cc;
  }

  .classes-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "assassin blademaster brawler elementalist guardian knight ranger gunslinger shapeshifter sorcerer"
    "assassin blademaster brawler elementalist guardian knight ranger gunslinger shapeshifter sorcerer";
    grid-area: classes-wrapper;
  }

  .assassin {
    grid-area: assassin;
  }

  .blademaster {
    grid-area: blademaster;
  }

  .brawler {
    grid-area: brawler;
  }

  .elementalist {
    grid-area: elementalist;
  }

  .guardian {
    grid-area: guardian;
  }

  .knight {
    grid-area: knight;
  }

  .ranger {
    grid-area: ranger;
  }

  .gunslinger {
    grid-area: gunslinger;
  }

  .shapeshifter {
    grid-area: shapeshifter;
  }

  .sorcerer {
    grid-area: sorcerer;
  }

  .origins-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "demon demon demon" "dragon dragon dragon" "exile exile exile" "glacial glacial glacial" "robot robot robot" "imperial imperial imperial" "noble noble noble" "ninja ninja ninja" "ninja ninja ninja" "pirate pirate pirate" "phantom phantom phantom" "wild wild wild" "void void void" "yordle yordle yordle";
    grid-area: origins-wrapper;
  }

  .demon {
    grid-area: demon;
  }

  .dragon {
    grid-area: dragon;
  }

  .exile {
    grid-area: exile;
  }

  .glacial {
    grid-area: glacial;
  }

  .robot {
    grid-area: robot;
  }

  .imperial {
    grid-area: imperial;
  }

  .noble {
    grid-area: noble;
  }

  .ninja {
    grid-area: ninja;
  }

  .ninja {
    grid-area: ninja;
  }

  .pirate {
    grid-area: pirate;
  }

  .phantom {
    grid-area: phantom;
  }

  .wild {
    grid-area: wild;
  }

  .void {
    grid-area: void;
  }

  .yordle {
    grid-area: yordle;
  }

  .champions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . ." ". . . . . . . . . .";
    grid-area: champions;
  }

</style>
