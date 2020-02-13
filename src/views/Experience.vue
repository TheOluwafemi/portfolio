<template>
  <div id="experience">
    <img class="grey__exp" src="../assets/icons/grey-exp.svg" alt="grey layer" />
    <img class="blue__exp" src="../assets/icons/blue-exp.svg" alt="blue layer" />

    <div class="text">
      <h1 class="text__header">Experiences</h1>

      <div class="list">
        <div class="list__item">
          <h5 class="list__years">Under 1yr</h5>
          <div class="list__info">
            <h3>Frontend Engineer</h3>
            <p>at Sterling Bank Plc, Nigeria</p>
            <small>Nov 2019 - present</small>
          </div>
        </div>

        <div class="list__item">
          <h5 class="list__years">1yr +</h5>
          <div class="list__info">
            <h3>Frontend Engineer</h3>
            <p>at Fidelity Bank Plc, Nigeria</p>
            <small>Aug 2018 - Nov 2019</small>
          </div>
        </div>

        <div class="list__item">
          <h5 class="list__years">1yr +</h5>
          <div class="list__info">
            <h3>Web Instructor</h3>
            <p>at New Horizons Systems Solutions, Nigeria</p>
            <small>Jun 2017 - Jul 2018</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
#experience {
  @include flex-column-center;
  padding: 0 5%;
}

.grey__exp {
  position: absolute;
  top: 100vh;
  left: 0;
  height: calc(100vh - 670px);
  max-width: 100%;
  z-index: -1;
}

.blue__exp {
  position: absolute;
  top: calc(100vh + 50px);
  z-index: -1;
  height: 200px;
  left: calc(100vw - 300px);
}

.text {
  width: 100%;
}

.text__header {
  text-align: left;
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 2rem 0.5rem;
}

.list__item {
  flex: 0 50%;
  text-align: left;
  line-height: 2;
  display: flex;
  align-items: baseline;
  margin-bottom: 3rem;
}

.list__years {
  flex-wrap: wrap;
  width: 45px;
  color: #5371ff;
  display: none;
}

.list__info {
  margin-left: 1rem;

  small {
    color: lightslategrey;
  }
}

@media screen and (max-width: 768px) {
  .list {
    width: 100%;
  }

  .blue__exp {
    display: none;
  }
}
@media screen and (max-width: 425px) {
  #experience {
    @include flex-column-center;
    padding: 5%;
  }

  .list {
    width: 100%;
  }

  .list__item {
    flex: 0 100%;
  }
}
</style>