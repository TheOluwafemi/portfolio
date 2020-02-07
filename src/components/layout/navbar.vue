<template>
  <nav class="nav">
    <input type="checkbox" class="nav__check" id="nav__check" />
    <div class="nav__header">
      <div class="nav__title">TheOluwafemi</div>
    </div>

    <div class="nav__btn">
      <label for="nav__check">
        <span></span>
        <span></span>
        <span></span>
      </label>
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
  components: {
    "social-items": SocialItems
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  width: 100%;
  padding: 1rem;
  height: 100px;
  background: transparent;
  color: #2c3e50;
  position: sticky;
  top: 0;
}

.nav__header {
  //   display: inline;
  float: left;
}

.nav__title {
  display: inline-block;
  font-size: 22px;
  color: #2c3e50;
  padding: 10px;
}

.nav__btn {
  display: none;
}

.nav__links {
  //   display: inline;
  float: right;
  font-size: 18px;

  a {
    display: inline-block;
    margin: 0 15px;
    padding: 13px 10px;
    text-decoration: none;
    color: #2c3e50;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  #socials {
    display: none;
  }
}

.nav__check {
  display: none;
}

@media (max-width: 677px) {
  .nav {
    height: 50px;
  }

  .nav__btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;

    label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;

      span {
        display: block;
        width: 25px;
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
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    top: 50px;
    left: 0px;
    position: absolute;
    display: block;

    a {
      display: block;
      width: 100%;
      margin: 0;
      color: white;
    }

    #socials {
      svg {
        stroke: white !important;
      }
    }
  }

  #nav__check:not(:checked) ~ .nav__links {
    height: 0px;
  }

  #nav__check:checked ~ .nav__links {
    height: calc(100vh - 50px);
    overflow-y: auto;
    position: absolute;
    visibility: visible;
    z-index: 1;

    #socials {
      display: inline;
    }
  }
}
</style>