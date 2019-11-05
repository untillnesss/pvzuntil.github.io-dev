<template>
  <v-app>
    <AppBar :drawer="drawer" />
    <Banner id="Home" />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "App",

  components: {
    AppBar,
    Banner
  },

  data: () => ({})
};
</script>
