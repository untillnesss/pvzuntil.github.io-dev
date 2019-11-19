<template>
  <div>
    <v-navigation-drawer app v-model="drawer" floating fixed temporary>
      <v-list>
        <v-list-item
          v-for="me in menu"
          :key="me"
          link
          @click="$vuetify.goTo('#'+me.txt, {
          offset: 50
        }); drawer = !drawer"
        >
          <v-list-item-icon>
            <v-icon>{{ me.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ me.txt }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark inverted-scroll>
      <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Muhammad Abdullah Sa'id</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          text
          v-for="me in menu"
          :key="me"
          @click="$vuetify.goTo('#'+me.txt, {
          offset: 50
        })"
        >{{me.txt}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import db from "@/db.json";

export default {
  data: () => ({
    drawer: false,
    menu: db.navbar.menu
  }),
  methods: {}
};
</script>