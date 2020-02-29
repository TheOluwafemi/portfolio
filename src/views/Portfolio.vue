<template>
  <div>
    <profile />
    <!-- <experience /> -->
    <projects />
    <!-- <skills /> -->
  </div>
</template>

<script>
import Profile from "./Profile.vue";
// import Experience from "./Experience.vue";
// import Skills from "./Skills.vue";
import Projects from "./Projects.vue";

export default {
  components: {
    profile: Profile,
    // experience: Experience,
    // skills: Skills,
    projects: Projects
  }
};
</script>