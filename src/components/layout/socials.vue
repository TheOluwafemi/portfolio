<template>
  <ul id="socials">
    <social-items />
  </ul>
</template>

<script>
import SocialItems from "./SocialItems.vue";

export default {
  components: {
    "social-items": SocialItems
  }
};
</script>

<style lang="scss" scoped>
#socials {
  position: fixed;
  top: 40%;
  right: 30px;
  list-style-type: none;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 40px;
  transition: box-shadow 1s ease-in-out;
}
</style>