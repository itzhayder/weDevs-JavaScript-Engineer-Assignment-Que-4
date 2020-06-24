<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    "nav-bar": Navbar
  },
  data: () => ({
    //
  })
};
</script>
