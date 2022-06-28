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
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninForm,
    meta: {
      title: "Sign In",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Tran Tam`;
  next();
});

export default router;
