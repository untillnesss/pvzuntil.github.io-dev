<template>
  <v-container my-5>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <p class="text-center display-1 font-weight-black">PENCAPAIAN</p>

        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title">{{item.title}}</v-card-title>
              <!-- <v-card-text class="white text--primary pt-3 text-justify">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
              </v-card-text>-->
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "@/db.json";
export default {
  data: () => ({
    items: db.achive
  })
};
</script>