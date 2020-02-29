<template>
  <div id="profile">
    <scroll-indicator />
    <div class="underlay">
      <div class="img-container">
        <img ref="img" v-bind:src="imgSrc" />
      </div>
    </div>
    <div class="content">
      <img class="profile__lower__layer" src="../assets/icons/Shape.svg" alt="grey colored shape" />
      <div class="profile__text">
        <h1 class="profile__name text--left">
          Hi, I'm
          <a
            href="#"
            @mouseover="setImage('screen', $event.target)"
            @mouseleave="removeImage()"
            class="emmanuel"
          >Emmanuel</a>.
          A frontend developer based in Lagos, currently working at Sterling.
        </h1>
        <h3
          class="profile__statement text--left"
        >I help startups & businesses bring their products to life through effective user experience and visual design.</h3>
      </div>
      <div class="corner">
        <img
          class="corner__image"
          src="../assets/icons/side-triangle.svg"
          alt="bottom right corner design"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Power2 } from "gsap";
import $ from "jquery";

export default {
  data() {
    return {
      app: "",
      isMobile: false,
      hovering: false,
      imgSrc: null
    };
  },
  mounted() {
    this.checkIfMobile();
  },
  methods: {
    checkIfMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.isMobile = true;
      }
    },

    setImage(imageName, eventTarget, format) {
      if (this.isMobile) {
        return;
      }

      this.hovering = true;
      $("a").css("opacity", 0.06);
      eventTarget.style.opacity = 0.9;
      eventTarget.style.color = "white";

      setTimeout(() => {
        if (!this.hovering) {
          return;
        }
        let imgFormat = format || "png";
        this.imgSrc = require(`@/assets/images/${imageName}.${imgFormat}`);
        new TimelineLite().to("img", 0.6, {
          opacity: 1,
          ease: Power2.easeIn
        });
      }, 250);
    },

    removeImage() {
      this.hovering = false;
      $("a").css({
        opacity: 0.9
      });
      new TimelineLite().to("img", 0.4, {
        opacity: 0,
        ease: Power2.easeInOut
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
@import "../assets/styles/_variables";

#profile {
  color: $light-text-color;
  background: $dark-bg-color;

  a {
    color: inherit;
    text-decoration: none;
  }
}

.underlay {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .img-container {
    width: 50%;
    height: 50%;
    background: transparent;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      opacity: 0;
    }
  }
}

.content {
  @include flex-column-center;
  padding: auto 20%;
}

.profile__lower__layer {
  display: none;
  position: absolute;
  left: 0;
  z-index: -1;
  height: calc(100vh - 100px);
  max-width: 100%;
}

.corner__image {
  display: none;
  max-height: 150px;
  max-width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}

.profile__text {
  margin: 0 10%;
  width: 50%;
}

.profile__name {
  line-height: 1.7;
  position: relative;
}

@keyframes colorMe {
  from {
    background-color: white;
  }
  to {
    background-color: black;
  }
}

.profile__statement {
  line-height: 1.5;
  color: #16a085;
}

.text--left {
  text-align: left;
}

.dot {
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: #00ff00;
  border-radius: 20px;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .profile__text {
    width: 70%;
  }

  .profile__name {
    line-height: normal;
    margin-bottom: 1rem;
  }

  .corner__image {
    display: none;
  }
}
</style>
