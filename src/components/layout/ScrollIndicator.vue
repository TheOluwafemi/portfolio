<template>
  <div class="scroll-indicator">
    <div class="dots"></div>
  </div>
</template>

<script>
export default {
  name: "ScrollIndicator"
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.scroll-indicator {
  position: fixed;
  z-index: 2;
  top: 85%;
  left: 30px;
  width: 12px;
  margin: 0 auto;
  // position: relative;
  opacity: 0.5;
  &::before,
  &::after {
    content: "";
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  &::before {
    width: 12px;
    height: 12px;
    border-radius: 10px;
    border: 1px solid #fff;
    animation: dot 3s infinite ease-in-out;
  }
  &::after {
    width: 7px;
    height: 7px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(45deg);
    animation: arrow 3s infinite ease-in-out;
    animation-delay: 0.75s;
    opacity: 0.25;
  }
  & > div {
    display: block;
    &::before,
    &::after {
      content: "";
      display: block;
      margin: 5px auto;
      border-radius: 10px;
      border: 1px solid #fff;
      animation: dot 3s infinite ease-in-out;
    }
    &::before {
      width: 8px;
      height: 8px;
      animation-delay: 0.25s;
    }
    &::after {
      width: 6px;
      height: 6px;
      animation-delay: 0.5s;
    }
  }
}

@keyframes dot {
  0% {
    transform: scale(0.75);
    opacity: 0.25;
  }
  25% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.75);
    opacity: 0.25;
  }
}

@keyframes arrow {
  0% {
    transform: scale(0.75) rotate(45deg);
    opacity: 0.25;
  }
  25% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(0.75) rotate(45deg);
    opacity: 0.25;
  }
}
</style>