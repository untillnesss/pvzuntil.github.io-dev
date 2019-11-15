<template>
  <v-parallax dark src="@/assets/banner2_crop.jpg" height="800">
    <v-row align="start" justify="center">
      <v-col class="text-center" cols="12" style="margin-top: 230px">
        <h1 class="display-1 font-weight-thin mb-4">{{inf.name}}</h1>
        <h4 class="subheading">{{inf.desc}}</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>


<script>
import db from "@/db.json";
export default {
  data: () => ({
    inf: db.banner
  })
};
</script>