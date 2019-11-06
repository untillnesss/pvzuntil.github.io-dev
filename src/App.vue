<template>
  <v-app>
    <AppBar :drawer="drawer" />
    <Banner id="Home" />

    <v-content>
      <v-container>
        <About id="About" />
        <Achive id="Achivement" />
      </v-container>

      <Gallery id="Gallery" style="margin-bottom: 30px" />

      <v-container>
        <Project id="Project" />
        <Quote id="Quote" style="margin: 200px 0px" />
      </v-container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2586e6"
          fill-opacity="1"
          d="M0,0L21.8,42.7C43.6,85,87,171,131,202.7C174.5,235,218,213,262,192C305.5,171,349,149,393,138.7C436.4,128,480,128,524,160C567.3,192,611,256,655,282.7C698.2,309,742,299,785,293.3C829.1,288,873,288,916,282.7C960,277,1004,267,1047,245.3C1090.9,224,1135,192,1178,170.7C1221.8,149,1265,139,1309,149.3C1352.7,160,1396,192,1418,208L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        />
      </svg>

      <Contac style="background: #2586e6; margin-top:-10px" class="p-0 m-0" id="Contac" />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Achive from "@/components/Achive.vue";
import Project from "@/components/Project.vue";
import Contac from "@/components/Contac.vue";
import Gallery from "@/components/Gallery.vue";
import Quote from "@/components/Quote.vue";

export default {
  name: "App",

  components: {
    AppBar,
    Banner,
    About,
    Achive,
    Project,
    Contac,
    Gallery,
    Quote
  },

  data: () => ({}),
  methods: {
    openInNew(x) {
      window.open(x, "_blank");
    }
  }
};
</script>
