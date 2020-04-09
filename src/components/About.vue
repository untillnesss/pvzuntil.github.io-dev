<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img
          :src="aboutImage.ori"
          :lazy-src="aboutImage.crop"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="300"
          max-height="300"
          style="border-radius: 50%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="headline font-weight-bold text-md-left text-center">Hai, Salam kenal !!</p>
        <p class="text-md-left text-center">Saya Muhammad Abdullah Sa'id, panggil aku untillNess :v</p>
        <p class="title text-md-justify text-center">{{inf.desc}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dblocal from "@/db.json";
import { db } from "@/main.js";
export default {
  data: () => ({
    inf: dblocal.about,
    ref: db.collection("about"),
    aboutImage: {
      ori: "",
      crop: ""
    }
  }),
  created() {
    this.ref.onSnapshot(snap => {
      snap.forEach(snapp => {
        this.aboutImage.ori = snapp.data().image.ori;
        this.aboutImage.crop = snapp.data().image.crop;
      });
    });
  }
};
</script>