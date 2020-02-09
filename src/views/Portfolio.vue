<template>
  <div>
    <profile />
    <experience />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Experience from "./Experience.vue";
export default {
  components: {
    profile: Profile,
    experience: Experience
  }
};
</script>