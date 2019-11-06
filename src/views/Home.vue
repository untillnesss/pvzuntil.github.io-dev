<template>
  <v-container>
    <About id="About" />
    <Achive id="Achivement" />
    <Project id="Project" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Achive from "@/components/Achive.vue";
import Project from "@/components/Project.vue";
export default {
  name: "home",
  components: {
    About,
    Achive,
    Project
  }
};
</script>
