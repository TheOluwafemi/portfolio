<template>
  <div>
    <profile />
    <!-- <experience /> -->
    <projects />
    <!-- <skills /> -->
    <contact />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
// import Experience from "./Experience.vue";
// import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    profile: Profile,
    // experience: Experience,
    // skills: Skills,
    projects: Projects,
    contact: Contact
  }
};
</script>