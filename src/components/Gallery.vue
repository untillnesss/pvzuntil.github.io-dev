<style scoped>
.lightbox {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: red;
  top: 0;
  left: 0;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div>
    <div class="lightbox d-flex">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, esse?</p>
    </div>
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
                      <v-img :src="n" aspect-ratio="1" class="grey lighten-2">
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
  methods: {},
  data() {
    return {
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