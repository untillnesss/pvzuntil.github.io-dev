<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <v-btn color="primary" @click="loginGoogle()">LOGIN GOOGLE</v-btn>
        <div v-if="!isGranted" class="d-flex flex-column justify-center align-center">
          <p class="mt-4 red--text">AKSES DITOLAK</p>
          <div style="width: 150%">
            <v-divider></v-divider>
          </div>
          <small class="mt-2">Hanya admin yang boleh masuk.</small>
        </div>
        <small class="mt-3">
          <router-link to="/">
            <a>Kembali !</a>
          </router-link>
        </small>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      isGranted: true
    };
  },
  methods: {
    loginGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(he => {
          if (he.user.email != "pvzuntil@gmail.com") {
            this.isGranted = false;
          } else {
            this.$router.replace("/admin");
          }
        });
    }
  }
};
</script>