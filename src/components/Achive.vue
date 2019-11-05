<template>
  <v-container my-5>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <p class="text-center display-1 font-weight-black">PENCAPAIAN</p>

        <v-timeline>
          <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.title}}</h2>
              <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2017",
        title: "Seminar IT Bussines STMIK Himsya"
      },
      {
        color: "green",
        year: "1970",
        title: "Juara LKS 2018 Kabupaten Rembang"
      },
      {
        color: "pink",
        year: "1980",
        title: "Peserta IT Competition DINUS FEST 2019"
      },
      {
        color: "amber",
        year: "1990",
        title: "Praktik Kerja Nyata"
      },
      {
        color: "orange",
        year: "2000",
        title: "Peserta LKS 2019 Provinsi Jawa Tengah"
      }
    ]
  })
};
</script>