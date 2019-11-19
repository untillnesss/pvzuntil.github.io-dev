<template>
  <div>
    <v-container class style="padding-top: 50px; height: 400px">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="white--text" style="font-size:60px">Find Me On</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-5" style="height: 300px">
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card @click="openInNew('https://wa.me/6281391472841')" style="z-index: 2">
            <v-card-text>
              <v-avatar>
                <img src="@/assets/wa.png" />
              </v-avatar>
              <h5>WhatsApp</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card @click="openInNew('https://github.com/pvzuntil')" style="z-index: 2">
            <v-card-text>
              <v-avatar width="100" height="100">
                <img src="@/assets/git.png" />
              </v-avatar>
              <h5>GitHub</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="text-center col-12 col-sm-4 col-md-2">
          <v-card @click="openInNew('https://instagram.com/untillness')" style="z-index: 2">
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

    <v-container style="height: 700px" align="center" justify="center">
      <v-row align="center" justify="center" class="fill-height">
        <h1 class="textAny text-center white--text">Any Question ?</h1>
      </v-row>
      <!-- <v-row align="center" justify="center" style="margin-top:-100px">
        <v-btn fab x-large color="blue darken-4" center absolute @click="tawkClick()">
          <v-icon color="white">message</v-icon>
        </v-btn>
      </v-row>-->

      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </v-container>

    <v-dialog v-model="modal" persistent max-width="600px">
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nama" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Pertanyaan" name="name" textarea></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="modal = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="modal = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.textAny {
  font-size: 65px;
  z-index: 2;
}
.circles {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20%;
  overflow: hidden;
  z-index: 0;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 10s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
/*  */
</style>

<script>
export default {
  data: () => ({
    modal: false,
    tawkEl: null
  }),
  methods: {
    openInNew(x) {
      window.open(x, "_blank");
    },
    tawkClick() {
      // this.tawkEl.click();
    }
  },
  mounted() {},
  created() {
    // var Tawk_API = Tawk_API || {},
    // Tawk_LoadStart = new Date();
    // (function() {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5dca354d43be710e1d1cd336/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
    // })();
    this.tawkEl = document.getElementById("tawkchat-minified-container");
  }
};
</script>
