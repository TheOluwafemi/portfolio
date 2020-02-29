<template>
  <div class="contact">
    <div class="content">
      <h1>get in touch</h1>

      <div class="socials">
        <a href>
          <span>twitter</span>
        </a>
        <a href>
          <span>github</span>
        </a>
        <a href>
          <span>linkedin</span>
        </a>
        <a href>
          <span>instagram</span>
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

  .socials {
    margin: 50px 25px;
  }
}
</style>