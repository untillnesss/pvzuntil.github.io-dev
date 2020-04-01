import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Admin from "@/views/Admin.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      reqLogin: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      reqLogin: false
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      reqLogin: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let curr;
  if (firebase.auth().currentUser == null) {
    curr = false;
  } else {
    curr = firebase.auth().currentUser.email;
  }
  console.log(curr);
  var reqLogin = to.meta.reqLogin;
  var reqName = to.name;

  if (reqName == "admin") {
    if (curr != "pvzuntil@gmail.com" && reqLogin) {
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
