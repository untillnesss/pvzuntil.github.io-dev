<style scoped>
.lightbox {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1000;
  color: white;
}

.lightbox-img {
  z-index: 1001 !important;
}
</style>
<template>
  <div>
    <transition
      enter-active-class="animated fadeInDown faster"
      leave-active-class="animated fadeOutDown faster"
    >
      <div v-if="show" class="lightbox d-flex justify-center align-center" @click="show = !show">
        <v-card shaped color="transparent" flat>
          <v-img :src="lightBoxImg" max-width="700" max-height="500" class="lightbox-img">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </div>
    </transition>
    <v-carousel
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      cycle
      touch
      progress
      interval="5000"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.img">
        <v-sheet
          height="100%"
          style="border-radius: 0px !important; background-color: rgba(0,0,0,0.3) !important;"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-2 text-center">{{ slide.title }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row align="center" justify="center" class="mt-5">
        <v-col cols="12">
          <v-card>
            <v-container fluid>
              <v-row align="center" justify="center">
                <v-col
                  v-for="n in img"
                  :key="n"
                  class="d-flex child-flex"
                  cols="6"
                  sm="3"
                  md="2"
                  xl="1"
                >
                  <v-card flat tile class="d-flex">
                    <v-fade-transition>
                      <v-img
                        :src="n"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        @click="showLightBox(n)"
                      >
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-fade-transition>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import pic1 from "@/assets/slideshow/1.jpg";
import pic2 from "@/assets/slideshow/2.jpg";
import pic3 from "@/assets/slideshow/3.jpeg";
import pic4 from "@/assets/slideshow/4.jpeg";
import pic5 from "@/assets/slideshow/5.jpg";
import pic6 from "@/assets/slideshow/6.jpg";
import pic7 from "@/assets/slideshow/7.jpeg";

export default {
  components: {},
  methods: {
    showLightBox(img) {
      this.lightBoxImg = img;
      this.show = !this.show;
    }
  },
  data() {
    return {
      lightBoxImg: null,
      show: false,
      img: [pic1, pic2, pic3, pic4, pic5, pic6],
      slides: [
        {
          title: "PPL Mawar Foto Sarang",
          img: pic1
        },
        {
          title: "",
          img: pic2
        },

        {
          title: "",
          img: pic5
        },
        {
          title: "PKL DINKOMINFO Rembang",
          img: pic3
        },
        {
          title: "",
          img: pic4
        },
        {
          title: "BINTEK LKS Nasional Jawa Tengah 2018",
          img: pic7
        },
        {
          title: "",
          img: pic6
        }
      ]
    };
  }
};
</script>