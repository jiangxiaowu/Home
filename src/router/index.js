import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/music",
    name: "Music",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "music" */ "../views/Music.vue")
  },
  {
    path: "/weather",
    name: "Weather",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "weather" */ "../views/Weather.vue")
  },
  
  {
    path: "/cal",
    name: "Calculator",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "calculator" */ "../views/Calculator.vue")
  },

  {
    path: "/bird",
    name: "Flappybird",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "flappybird" */ "../views/FlappyBird.vue")
  },
  {
    path: "/bag",
    name: "PunchBag",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "punch" */ "../views/Bag.vue")
  },
];

const router = new VueRouter({
  // mode: "history",
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
