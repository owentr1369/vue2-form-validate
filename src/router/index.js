import Vue from "vue";
import VueRouter from "vue-router";
import SignupForm from "../components/SignupForm.vue";
import SigninForm from "../components/SigninForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignupForm,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
