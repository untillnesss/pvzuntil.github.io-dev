import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueSweetalert2 from "vue-sweetalert2";

// import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

let app;

Vue.config.productionTip = true;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARY8uLGVZPnMcThNaVtL-tYqxF8DR6QeU",
  authDomain: "lesvue-a9fd6.firebaseapp.com",
  databaseURL: "https://lesvue-a9fd6.firebaseio.com",
  projectId: "lesvue-a9fd6",
  storageBucket: "lesvue-a9fd6.appspot.com",
  messagingSenderId: "259290000174",
  appId: "1:259290000174:web:cbe5e334489964f892a8bf",
  measurementId: "G-8532TZ1B9Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
