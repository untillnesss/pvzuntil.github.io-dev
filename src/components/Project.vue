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

          <v-card-title>{{pro.title}} {{i}}</v-card-title>

          <v-card-subtitle>{{pro.date}}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple" text>Open</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="pro.show = !pro.show">
              <v-icon>{{ pro.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="pro.show">
              <v-divider></v-divider>
              <v-card-text>{{pro.desc}}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    project: [
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Project 1",
        date: "Januari, 10 2019",
        show: false,
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Project 1",
        date: "Januari, 10 2019",
        show: false,
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Project 1",
        date: "Januari, 10 2019",
        show: false,
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Project 1",
        date: "Januari, 10 2019",
        show: false,
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      }
    ]
  }),
  methods: {}
};
</script>