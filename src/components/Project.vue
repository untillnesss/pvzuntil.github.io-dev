<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <p class="text-center display-1 font-weight-black">PROJECT</p>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-around">
      <v-col v-for="(pro, i) in project" :key="i" :class="'col-lg-4 col-md-6 col-sm-6 col-12'">
        <v-card class="mx-auto" shaped>
          <v-img :src="pro.img" height="200px"></v-img>

          <v-card-title>{{pro.title}}</v-card-title>

          <v-card-subtitle>
            <v-chip :color="pro.status == 'dev' ? 'error' : 'primary'" small>{{upper(pro.status)}}</v-chip>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text>Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import snap from "@/assets/img/snap.png";
export default {
  computed: {},
  methods: {
    upper(a) {
      return a.toUpperCase();
    }
  },
  data: () => ({
    show: false,
    project: [
      {
        img: require("@/assets/img/todo.png"),
        title: "Todo List",
        status: "final",
        link: "https://pvzuntil.github.io/todo/"
      },
      {
        // img: snap,
        title: "Quickcount PILPRES",
        status: "dev",
        link: "https://pvzuntil.github.io/quickcount/"
      },
      {
        img: "sa",
        title: "thanoSnap",
        status: "final",
        link: "https://pvzuntil.github.io/snap/"
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "W-512",
        status: "final",
        link: "https://pvzuntil.github.io/w-512/"
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Mana Tok",
        status: "final",
        link: "http://manajementokoonline.000webhostapp.com/"
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Lap Uwang",
        status: "dev",
        link: "http://lapuwang.herokuapp.com/"
      }
    ]
  })
};
</script>