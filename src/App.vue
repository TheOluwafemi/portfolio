<template>
  <div id="app">
    <div id="profileLayout" v-if="displayProfileLayout">
      <div class="cursor"></div>
      <profile-layout />
      <navbar />
      <social-items />
      <router-view />
    </div>

    <div v-else>
      <social-items />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    displayProfileLayout() {
      return this.$route.meta.layout === "profile-layout";
    }
  },
  created() {
    let resolved = this.$route.name;
    if (resolved == "404") {
      return;
    } else {
      window.addEventListener("mousemove", this.getCursor);
    }
  },
  destroyed() {
    window.removeEventListener("mousemove");
  },
  methods: {
    getCursor(e) {
      let mouseCursor = document.querySelector(".cursor");
      let allLinks = document.querySelectorAll("a");
      let bars = document.querySelectorAll(".bar");

      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";

      allLinks.forEach(link => {
        link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
          link.classList.remove("hovered-link");
        });
        link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
          link.classList.add("hovered-link");
        });
      });

      bars.forEach(bar => {
        bar.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
        });
        bar.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/_main";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 90%;
  cursor: none;
  position: relative;
}

.cursor {
  width: 1rem;
  height: 1rem;
  background: #16a085;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s ease;
  transition-property: transform, filter;
  transform-origin: 100% 100%;
  z-index: 1;
}

.link-grow {
  transform: scale(1.3);
  // background: white;
  filter: blur(12px);
}

.hovered-link {
  color: white !important;
}

a {
  padding: 1rem;
  // z-index: 2;
  position: relative;

  &::before {
    content: none;
    position: absolute;
    width: 6%;
    margin-left: 47%;
    margin-right: 47%;
    height: 1px;
    bottom: 6px;
    left: 0;
    background-color: #16a085;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
}

a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

//   &.router-link-exact-active {
//     color: #42b983;
//   }
// }
</style>
