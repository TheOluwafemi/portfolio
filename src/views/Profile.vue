<template>
    <div id="profile">
        <img class="profile__lower__layer" src="../assets/icons/Shape.svg" alt="grey colored shape">
        <div class="profile__text">
            <!-- <h1 class="profile__name text--left">Oluwafemi Emmanuel</h1> -->
            <p class="profile__statement text--left">I help startups & businesses bring their products to life through effective user experience and visual design.I pinpoint UX problems and come up with solutions for mobile apps, websites and web apps. As a designer, I can optimize your current product and I am also ready to start working on your new project.</p>
        </div>
        <div class="corner">
            <img class="corner__image" src="../assets/icons/side-triangle.svg" alt="bottom right corner design">
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_mixins';

    #profile {
        @include flex-column-center;
        padding: auto 20%;
    }

    .profile__lower__layer {
        position: absolute;
        left: 0;
        z-index: -1;
        height: 100%;
        max-width: 100%;
    }

    .corner {

    }

    .corner__image {
        max-height: 150px;
        max-width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .profile__text {
        margin: 0 10%;
        max-width: 60%;
    }

    .profile__name {
        line-height: 3;
    }

    .profile__statement {
        line-height: 1.5;
    }

    .text--left {
        text-align: left;
    }




</style>