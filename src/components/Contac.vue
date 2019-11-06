<template>
  <div class="oHide">
    <v-container class style="padding-top: 50px">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="white--text">Find Me On</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-5">
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card
            @click="openInNew('https://wa.me/6281391472841')"
            class="d-flex align-center justify-center"
          >
            <v-card-text>
              <v-avatar>
                <img src="@/assets/wa.png" />
              </v-avatar>
              <h5>WhatsApp</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card @click="openInNew('https://github.com/pvzuntil')">
            <v-card-text>
              <v-avatar width="100" height="100">
                <img src="@/assets/git.png" />
              </v-avatar>
              <h5>GitHub</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card @click="openInNew('https://instagram.com/untillness')">
            <v-card-text>
              <v-avatar>
                <img src="@/assets/ig.png" />
              </v-avatar>
              <h5>Instagram</h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    openInNew(x) {
      window.open(x, "_blank");
    }
  }
};
</script>
