import Vue from "vue";
import VueRouter from "vue-router";

const portfolio = () => import('../views/Portfolio.vue');
const notFound = () => import('../views/404s.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: portfolio,
    meta: {
      layout: 'profile-layout'
    }
  },
  {
    path: "*",
    name: "404",
    component: notFound
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
