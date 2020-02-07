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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}

.nav__header {
  //   display: inline;
  float: left;
}

.nav__title {
  display: inline-block;
  font-size: 22px;
  color: white;
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
    padding: 13px 10px;
    text-decoration: none;
    color: #efefef;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

.nav__check {
  display: none;
}

@media (max-width: 600px) {
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
        border: 2px solid #eee;
      }
    }
  }

  .nav > .nav__btn > label:hover,
  .nav #nav__check:checked ~ .nav__btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav__links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    top: 50px;
    left: 0px;

    a {
      display: block;
      width: 100%;
    }
  }

  .nav__check:not(:checked) ~ .nav__links {
    height: 0px;
  }

  .nav__check:not(:checked) ~ .nav__links {
    height: calc(100vh -50px);
    overflow-y: auto;
  }
}
</style>