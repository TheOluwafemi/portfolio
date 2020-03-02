<template>
  <div class="contact" id="contacts">
    <div class="content" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-out">
      <h1 class="title">get in touch</h1>

      <div class="socials">
        <a href="https://twitter.com/the_Oluwafemi" target="_blank" rel="noopener">
          <small>twitter</small>
        </a>
        <a href="https://github.com/TheOluwafemi" target="_blank" rel="noopener">
          <small>github</small>
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-d-oluwafemi/" target="_blank" rel="noopener">
          <small>linkedin</small>
        </a>
        <a href="https://instagram.com/the.oluwafemi" target="_blank" rel="noopener">
          <small>instagram</small>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
@import "../assets/styles/_variables";

.contact {
  @include flex-column-center;
  background-color: $dark-bg-color;
  color: $light-text-color;
  align-items: center;
}

.socials {
  margin: 50px;
}

a {
  text-decoration: none;
  color: inherit;
  margin-top: 3rem;
}

@media screen and (max-width: 425px) {
  .contact {
    height: auto;
  }

  .title {
    margin-top: 2rem;
  }

  .socials {
    margin: 50px 25px;
  }
}
</style>