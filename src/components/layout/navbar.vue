<template>
  <nav class="nav" ref="nav" :class="{ addBg: menuIsOpen }">
    <input
      type="checkbox"
      :value="menuIsOpen"
      @click="toggleMenu"
      class="nav__check"
      id="nav__check"
    />

    <div class="upper">
      <div class="nav__header">
        <div class="nav__title">TheO</div>
      </div>

      <div class="nav__btn" :class="{ menuicon: menuIsOpen }">
        <label for="nav__check">
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
        </label>
      </div>
    </div>

    <div class="nav__links">
      <a href="#">Profile</a>
      <a href>Experiences</a>
      <a href>Projects</a>
      <a href>Contact</a>
      <a href>Skills</a>
      <social-items id="socials" />
    </div>
  </nav>
</template>

<script>
import SocialItems from "./SocialItems.vue";

export default {
  data() {
    return {
      changeBg: false,
      menuIsOpen: false
    };
  },
  components: {
    "social-items": SocialItems
  },
  methods: {
    handleScroll() {
      let { nav } = this.$refs;
      if (window.scrollY == 0) {
        nav.classList.remove("addBg");
        this.changeBg = false;
      } else {
        this.changeBg = true;
      }
    },

    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables";

nav {
  transition: all 0.2s ease-in-out;
  -webkit-backface-visibility: hidden;
  color: $light-text-color;
  background: transparent;
  font-size: 100%;
  width: 100%;
  padding: 3rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;

  a {
    color: $light-text-color;
    text-decoration: none;
  }
}

.addBg {
  background: #0b0f1df7 !important;
}

.upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__header {
  float: left;
}

.nav__title {
  font-size: 20px;
}

.nav__check {
  display: none;
}

.nav__btn {
  label {
    height: 50px;

    span {
      display: block;
      width: 20px;
      height: 10px;
      border-top: 2px solid #eee;
    }
  }
}

.nav__title {
  padding: 0;
}

.nav > .nav__btn > label:hover,
.nav #nav__check:checked ~ .nav__btn > label {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav__links {
  visibility: hidden;
  width: 100%;
  background-color: #0b0f1df7;
  height: 0px;
  transition: all 0.3s ease-in;
  top: 50px;
  left: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;

  a {
    display: block;
    width: 100%;
    margin: 0;
    font-weight: 600;
    font-size: 30px;
  }
}

#nav__check:not(:checked) ~ .nav__links {
  height: 0px;
}

#nav__check:checked ~ .nav__links {
  height: 100vh;
  top: 123px;
  overflow-y: auto;
  position: absolute;
  visibility: visible;
  z-index: 1;

  #socials {
    display: inline;
  }
}

/** MENU ICON ANIMATION */
.menuicon .bar {
  // width: 100%;
  height: 2px;
  display: block;
  position: relative;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
}

.menuicon .bar.bar1 {
  -webkit-transform: translateY(0px) rotate(0deg);
  transform: translateY(0px) rotate(0deg);
}

.menuicon .bar.bar2 {
  -webkit-transform: translateY(6px) rotate(0deg);
  transform: translateY(6px) rotate(0deg);
}

.bar {
  transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0.1s;
}
.menuicon .bar.bar1 {
  -webkit-transform: translateY(5px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}
.menuicon .bar.bar2 {
  -webkit-transform: translateY(3px) rotate(-45deg);
  transform: translateY(3px) rotate(-45deg);
}
</style>