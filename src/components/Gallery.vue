<template>
  <div>
    <v-carousel
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      touch
      cycle
      progress
      interval="5000"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.img">
        <v-sheet
          height="100%"
          style="border-radius: 0px !important; background-color: rgba(0,0,0,0.3) !important;"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-2">{{ slide.title }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
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
  methods: {},
  data() {
    return {
      slides: [
        {
          title: "Titile 1",
          img: pic1
        },
        {
          title: "Titile 2",
          img: pic2
        },
        {
          title: "Titile 3",
          img: pic3
        },
        {
          title: "Titile 4",
          img: pic4
        },
        {
          title: "Titile 5",
          img: pic5
        },
        {
          title: "Titile 6",
          img: pic6
        },
        {
          title: "Titile 7",
          img: pic7
        }
      ]
    };
  }
};
</script>