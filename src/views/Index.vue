<template>
  <div class="home">
    <div class="champions-table">
      <div class="classes">
        <div class="origins"></div>
        <div class="class">
          <div class="class__text">убийца</div>
        </div>
        <div class="class">
          <div class="class__text">мастер клинка</div>
        </div>
        <div class="class">
          <div class="class__text">дебошир</div>
        </div>
        <div class="class">
          <div class="class__text">элементалист</div>
        </div>
        <div class="class">
          <div class="class__text">страж</div>
        </div>
        <div class="class">
          <div class="class__text">стрелок</div>
        </div>
        <div class="class">
          <div class="class__text">рыцарь</div>
        </div>
        <div class="class">
          <div class="class__text">рэйнджер</div>
        </div>
        <div class="class">
          <div class="class__text">перевертыш</div>
        </div>
        <div class="class">
          <div class="class__text">чародей</div>
        </div>
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
    height: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
  }

  .class__text {
    transform: rotate(-90deg);
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
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }

</style>
