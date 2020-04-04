<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" app clipped></v-navigation-drawer> -->
    <!-- <v-container app clipped-left> -->
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ADMIN PORTOFOLIO KU 😅</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="dialog = !dialog" mr-5>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn color="error" @click="signOut()" ml-3>KELUAR</v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title color="white" background-color="cyan">
          <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab v-for="(item, index) in items" :key="index">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" class="transparent">
      <v-tab-item>
        <AdminMenuBar></AdminMenuBar>
      </v-tab-item>
      <v-tab-item>
        <h1>HEHEHE</h1>
      </v-tab-item>
    </v-tabs-items>
    <!-- </v-container> -->

    <AdminSiteSetting :open-dialog="dialog"></AdminSiteSetting>
  </div>
</template>

<script>
import firebase from "firebase";
import AdminMenuBar from "@/components/admin/AdminMenuBar.vue";
import AdminSiteSetting from "@/components/admin/Admin.vue";
export default {
  data() {
    return {
      dialog: true, // TODO UBAH KE False saat production
      tab: null,
      items: [
        {
          name: "menu bar"
        },
        {
          name: "about"
        }
      ],
      drawer: true
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
    AdminMenuBar,
    AdminSiteSetting
  }
};
</script>

<style lang="scss" scoped>
</style>