<template>
  <div id="projects">
    <h1 class="title">Some of my works</h1>

    <div class="slide">
      <img src="../assets/screen.png" alt="screen" />
      <div class="details">
        <h2 class="details__title">Linear Mixr</h2>
        <p
          class="details__desc"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nulla beatae amet reiciendis corporis repellat dolorum minus ad dolore eos ipsam nobis</p>
        <small class="details__tool">Vue</small>
      </div>
    </div>

    <div class="slide"></div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
@import "../assets/styles/_variables";

#projects {
  @include flex-column-center-auto;
  background: #f9f9f9;
  color: #2c3e50;
  padding: 5%;
  justify-content: flex-start;
  color: $light-text-color;
  background: $dark-bg-color;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;

  &:hover {
    -webkit-text-fill-color: #16a085;
    -webkit-text-stroke: 0px transparent;
  }
}

.slide {
  margin-top: 7rem;
  margin-bottom: 5rem;

  img {
    height: 450px;
    width: 100%;
  }
}

.details {
  text-align: left;
  margin-top: 0.5rem;
  line-height: 2;

  &__tool {
    color: #16a085;
  }
}

@media screen and (max-width: 425px) {
  .slide {
    img {
      height: 250px;
      width: 100%;
    }
  }
}
</style>

<script>
export default {};
</script>