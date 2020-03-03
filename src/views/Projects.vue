<template>
  <div id="projects">
    <h1 class="title">Some of my works</h1>

    <div class="slide" data-aos="fade-up" data-aos-easing="ease-in-out">
      <a href="https://linear-mixr.netlify.com/" target="_blank" rel="noopener">
        <img
          src="https://res.cloudinary.com/dhnvd24pz/image/upload/v1583050624/screen.png"
          alt="screen"
        />
      </a>
      <div class="details">
        <h3 class="details__title">
          <a href="https://linear-mixr.netlify.com/" target="_blank" rel="noopener">Linear Mixr</a>
        </h3>
        <p
          class="details__desc"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nulla beatae amet reiciendis corporis repellat dolorum minus ad dolore eos ipsam nobis</p>
        <small class="details__tool">Vue</small>
      </div>
    </div>
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

  a {
    color: inherit;
    text-decoration: none;
    padding: 0;
  }
}

.title {
  text-align: center;
  // font-size: 40px;
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
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  // margin-bottom: 5rem;

  img {
    height: 100%;
    width: 100%;
  }
}

.details {
  text-align: left;
  margin-top: 0.5rem;
  line-height: 1.5;

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