<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-img
          src="@/assets/me.jpg"
          lazy-src="@/assets/minify/me.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        ></v-img>
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
import db from "@/db.json";
export default {
  data: () => ({
    inf: db.about
  })
};
</script>