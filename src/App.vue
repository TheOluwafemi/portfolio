<template>
  <div id="app">
    <div id="profileLayout" v-if="displayProfileLayout">
      <profile-layout />
      <router-view /> 
    </div>

    <router-view  v-else/>
  </div>
</template>

<script>
export default {
  computed: {
    displayProfileLayout() {
      return this.$route.meta.layout === 'profile-layout';
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }

</style>
