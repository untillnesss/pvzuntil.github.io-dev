<template>
  <v-app>
    <v-row
      v-if="isMaintenance"
      class="ma-0 pa-0 red white--text"
      justify="center"
      align="center"
      style="position: fixed; bottom:0; left: 0; z-index: 9999; border-top-right-radius: 20px"
    >
      <small>
        <p class="ma-0 pa-3">This website is under maintenance.</p>
      </small>
    </v-row>
    <router-view></router-view>
  </v-app>
</template>
<script>
import { db } from "@/main.js";
export default {
  data: () => ({
    isMaintenance: false,
    ref: db.collection("siteSetting")
  }),
  created() {
    this.ref.onSnapshot(snap => {
      snap.forEach(snapp => {
        this.isMaintenance = snapp.data().isMaintenance;
      });
    });
  }
};
</script>