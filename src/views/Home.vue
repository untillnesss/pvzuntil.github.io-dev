<template>
  <v-container>
    <About id="About" />
    <Achive id="Achivement" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Achive from "@/components/Achive.vue";
export default {
  name: "home",
  components: {
    About,
    Achive
  }
};
</script>
