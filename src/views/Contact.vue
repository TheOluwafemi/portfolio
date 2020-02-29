<template>
  <div class="contact">
    <div class="content">
      <h1 class="title">get in touch</h1>

      <div class="socials">
        <a href>
          <small>twitter</small>
        </a>
        <a href>
          <small>github</small>
        </a>
        <a href>
          <small>linkedin</small>
        </a>
        <a href>
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