<template>
  <div id="projects">
    <h1>Some of my works</h1>

    <div class="sliders">
      <div class="slide">
        <div class="slide__info">
          hello there
          <br />welcome
          <br />welcome
        </div>
      </div>
      <div class="slide">
        <div class="slide__info">
          hello there
          <br />welcome
          <br />welcome
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";

#projects {
  @include flex-column-center;
  background: #f9f9f9;
  color: #2c3e50;
  padding: 5%;
  justify-content: flex-start;
}

.sliders {
  height: 90%;
  width: 95%;
  overflow-x: scroll;
  display: flex;
  align-items: center;
}

.slide {
  border: 20px solid white;
  height: 90%;
  flex: 0 0 60%;
  margin-right: 4rem;
  background-image: url("../assets/screen.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:hover .slide__info {
    height: 90px;
    padding-top: 10px;
  }
}

.slide__info {
  width: 100%;
  height: 0px;
  overflow: hidden;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
}
</style>

<script>
export default {};
</script>