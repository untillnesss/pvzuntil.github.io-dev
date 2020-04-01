<template>
  <div>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ADMIN PORTOFOLIO KU 😅</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="error" @click="signOut()">KELUAR</v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title color="white" background-color="cyan">
          <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" class="transparent">
      <v-tab-item v-for="item in items" :key="item">
        <AdminMenuBar v-if="tab == 0"></AdminMenuBar>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import firebase from "firebase";
import AdminMenuBar from "@/components/admin/AdminMenuBar.vue";
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          name: "menu bar"
        },
        {
          name: "about"
        }
      ]
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    }
  },
  components: {
    AdminMenuBar
  }
};
</script>

<style lang="scss" scoped>
</style>