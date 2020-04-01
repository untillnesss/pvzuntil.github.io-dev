<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-btn color="primary" @click="loginGoogle()">LOGIN GOOGLE</v-btn>
    </v-row>
    <v-row align="center" justify="center" v-if="!isGranted">
      <p class="red--text">AKSES DITOLAK</p>
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
          console.log(he.user.email);
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