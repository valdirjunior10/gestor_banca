<template>
  <div>
    <NavBar />
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { routes } from "../src/Routes.js";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    NavBar,    
  },

  

  data() {
    return {
      routes
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
