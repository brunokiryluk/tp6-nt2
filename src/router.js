import Vue from "vue";
import VueRouter from "vue-router";

import Http from "./components/Http";
import FormularioAv from "./components/FormularioAv/index.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/http" },
    { path: "/http", component: Http },
    { path: "/form", component: FormularioAv },
  ],
});
