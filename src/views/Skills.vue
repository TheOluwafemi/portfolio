<template>
  <div id="skills">
    <div class="body">
      <h1 class="heading">Skills</h1>
      <ul class="list">
        <li class="list__item">HTML</li>
        <li class="list__item">CSS</li>
        <li class="list__item">JavaScript</li>
        <li class="list__item">Vue</li>
        <li class="list__item">Angular</li>
        <li class="list__item">Sass</li>
        <li class="list__item">Webpack</li>
        <li class="list__item">Node</li>
        <li class="list__item">Git</li>
        <li class="list__item">MongoDB</li>
        <li class="list__item">Testing</li>
        <li class="list__item">Cordinating with developers</li>
      </ul>
    </div>

    <div class="footer">
      <h3 class="heading">Tools and Platforms I use</h3>
      <ul class="list">
        <li class="list__item2">
          <i class="devicon-visualstudio-plain colored"></i>
          <small>Visual Studio Code</small>
        </li>
        <li class="list__item2">
          <i class="devicon-github-plain colored"></i>
          <small>Github</small>
        </li>
        <li class="list__item2">
          <i class="devicon-heroku-plain colored"></i>
          <small>Heroku</small>
        </li>
        <li class="list__item2">
          <i class="devicon-gulp-plain colored"></i>
          <small>Gulp</small>
        </li>
        <li class="list__item2">
          <i class="devicon-trello-plain colored"></i>
          <small>Trello</small>
        </li>
        <li class="list__item2">
          <i class="devicon-windows8-original colored"></i>
          <small>Windows</small>
        </li>
        <li class="list__item2">
          <i class="devicon-slack-plain colored"></i>
          <small>Slack</small>
        </li>
        <li class="list__item2">
          <i class="devicon-apple-original colored"></i>
          <small>Apple</small>
        </li>
        <li class="list__item2">
          <i class="devicon-babel-plain colored"></i>
          <small>Babel</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
@import "../assets/styles/_variables";

#skills {
  @include flex-column-center;
  justify-content: flex-end;
  width: 100%;
  color: $light-text-color;
  background: $dark-bg-color;
}

.body {
  width: 100%;
  padding: 0 5%;
}

.heading {
  margin-top: 0.7rem;
  text-align: left;
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0.5rem;
  list-style-type: none;
}

.list__item {
  flex: 0 33%;
  text-align: left;
  margin-bottom: 2rem;

  // &::before {
  //   content: "\00ba";
  //   color: #5371ff;
  //   float: left;
  //   padding-top: 3px;
  //   padding-right: 10px;
  // }
}

.footer {
  width: 100%;
  background: #f9f9f9;
  padding: 1% 5%;
  color: $dark-text-color;
}

.list__item2 {
  display: flex;
  flex-direction: column;
  flex: 0 21%;
  text-align: left;
  margin-bottom: 2rem;
  text-align: center;
}

@media screen and (max-width: 768px) {
  #skills {
    height: 100%;
  }

  .list__item {
    flex: 0 50%;
  }

  .list__item2 {
    flex: 0 33%;
  }
}
</style>

<script>
export default {};
</script>