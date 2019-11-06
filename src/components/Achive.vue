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
              <v-card-text class="white text--primary pt-3 text-justify">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "cyan",
        year: "2017",
        title: "Seminar IT Bussines STMIK Himsya",
        icon: "class"
      },
      {
        color: "green",
        year: "1970",
        title: "Juara 1 Web Design LKS 2018 Kabupaten Rembang",
        icon: "emoji_events"
      },
      {
        color: "green",
        year: "1970",
        title: "Juara 2 Web Design LKS 2018 Provinsi Jawa Tengah",
        icon: "emoji_events"
      },
      {
        color: "pink",
        year: "1980",
        title: "5 Besar IT Competition DINUS FEST 2019",
        icon: "person"
      },
      {
        color: "indigo",
        year: "1990",
        title: "Praktik Kerja Lapangan DINKOMINFO Rembang",
        icon: "school"
      },
      {
        color: "green",
        year: "2000",
        title: "5 Besar LKS Web Design 2019 Provinsi Jawa Tengah",
        icon: "emoji_events"
      }
    ]
  })
};
</script>