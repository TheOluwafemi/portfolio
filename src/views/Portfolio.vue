<template>
  <div>
    <profile />
    <experience />
    <skills />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";

export default {
  components: {
    profile: Profile,
    experience: Experience,
    skills: Skills
  }
};
</script>