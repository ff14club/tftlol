<template>
  <div class="home">
    <div class="champions-table">
      <div class="classes">
        <div class="origins"></div>
        <div class="class">убийца</div>
        <div class="class">мастер клинка</div>
        <div class="class">дебошир</div>
        <div class="class">элементалист</div>
        <div class="class">страж</div>
        <div class="class">стрелок</div>
        <div class="class">рыцарь</div>
        <div class="class">рэйнджер</div>
        <div class="class">перевертыш</div>
        <div class="class">чародей</div>
      </div>

      <div class="champions-table-row">
        <div class="origins">
          <div class="origin">демон</div>
          <div class="origin">дракон</div>
          <div class="origin">изгнанник</div>
          <div class="origin">оледенелый</div>
          <div class="origin">робот</div>
          <div class="origin">имперец</div>
          <div class="origin">аристократ</div>
          <div class="origin">ниндзя</div>
          <div class="origin">пират</div>
          <div class="origin">призрак</div>
          <div class="origin">одичалый</div>
          <div class="origin">обитатель бездны</div>
          <div class="origin">йордл</div>
        </div>

        <div class="champions">
          <div class="champions-row">
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
          </div>
          <div class="champions-row">
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
            <div class="champion">
              <img src="../assets/images/champions/Nidalee.png" alt="">
            </div>
          </div>
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

  $rowHeight: 100px;

  .champions-table {
    display: flex;
    flex-direction: column;
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
  }

  .champions-table-row {
    display: flex;
  }

  .classes {
    display: flex;
  }

  .origins {
    width: 100px;
    min-width: 100px;
  }

  .origin {
    height: $rowHeight;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    text-transform: uppercase;
  }

  .class {
    width: 10%;
    height: 100px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
  }

  .champions {
    flex: 1;
  }

  .champions-row {
    display: flex;
  }

  .champion {
    width: 10%;
    height: $rowHeight;
    padding: 5px;
    border: 3px solid #000;
    img {
      width: 100%;
    }
  }

</style>
