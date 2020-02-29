<template>
  <ul id="socials">
    <li>
      <a href="https://github.com/theoluwafemi">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fdfdfd"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    </li>

    <li>
      <a href="https://www.linkedin.com/in/emmanuel-d-oluwafemi/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fdfdfd"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </li>

    <li>
      <a href="https://twitter.com/the_Oluwafemi">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fdfdfd"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-twitter"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialItems"
};
</script>

<style lang="scss" scoped>
#socials {
  position: fixed;
  top: 40%;
  right: 14px;
  list-style-type: none;
  padding: 1rem;
  z-index: 2;
  border-radius: 40px;
  transition: box-shadow 1s ease-in-out;

  li {
    list-style-type: none;
    margin: 1rem auto;

    &:hover {
      animation: move 0.7s linear;
      cursor: pointer;
    }

    svg {
      transition: stroke 1s linear;
      width: 20px;

      &:hover {
        stroke: #5371ff;
      }
    }
  }

  @keyframes move {
    from {
      stroke-dashoffset: 15;
      stroke-dasharray: 15;
    }
  }
}

@media (max-width: 677px) {
  #socials {
    display: none;
  }
}
</style>