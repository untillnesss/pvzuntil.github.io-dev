<template>
  <div>
    <v-dialog
      v-model="openDialog"
      scrollable
      persistent
      :overlay="false"
      max-width="1000px"
      transition="scale-transition"
    >
      <v-card>
        <v-card-title primary-title>Site settings</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container class="pa-2">
            <v-row>
              <v-col cols="12" md="6">
                <!-- <v-col> -->
                <v-text-field
                  label="Site name"
                  outlined
                  dense
                  v-model="siteName.field"
                  :loading="siteName.loadingField"
                ></v-text-field>
                <v-row style="margin-top : -20px">
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-3"
                    color="success"
                    small
                    :loading="siteName.loadingBtn"
                    @click="saveSiteName()"
                  >save</v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <!-- <v-col> -->
                <v-text-field
                  label="Site slug"
                  outlined
                  dense
                  v-model="siteSlug.field"
                  :loading="siteSlug.loadingField"
                ></v-text-field>
                <v-row style="margin-top : -20px">
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-3"
                    color="success"
                    small
                    :loading="siteSlug.loadingBtn"
                    @click="saveSiteSlug()"
                  >save</v-btn>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input
                  v-model="siteHeader.files"
                  label="File input"
                  prepend-icon="camera_alt"
                  outlined
                  dense
                  show-size
                  counter
                  accept="image/*"
                  @change="getPreviewFile"
                  :loading="siteHeader.loadingField"
                >
                  <template v-slot:selection="{ index, text }">
                    <v-chip v-if="index < 2" color="blue" dark label x-small>{{ text }}</v-chip>

                    <span
                      v-else-if="index === 2"
                      class="overline blue--text text--darken-3 mx-2"
                    >+{{ siteHeader.files.length - 2 }} File(s)</span>
                  </template>
                </v-file-input>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-progress-circular
                    :value="siteHeader.loadingValue"
                    color="success"
                    class="mr-3"
                    v-if="siteHeader.isLoading"
                  ></v-progress-circular>
                  <v-btn
                    v-else
                    color="success"
                    small
                    class="mr-3"
                    :disabled="this.siteHeader.disableBtn"
                    :loading="this.siteHeader.loadingBtn"
                    @click="uploadImage"
                  >upload</v-btn>
                </v-row>
                <v-switch
                  v-model="isMaintenance"
                  label="Mode Perbaikan"
                  color="blue"
                  @change="setMaintenance"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="6">
                <p>Preview Image</p>
                <v-img
                  :src="imagePrev.ori"
                  :lazy-src="imagePrev.crop"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  height="250"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="error" @click="closeModal()">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db, storage } from "@/main.js";
export default {
  data: () => ({
    ref: db.collection("siteSetting"),
    idDoc: "",
    siteName: {
      id: "",
      field: "",
      loadingField: false,
      loadingBtn: false
    },
    siteSlug: {
      id: "",
      field: "",
      loadingField: false,
      loadingBtn: false
    },
    siteHeader: {
      files: null,
      disableBtn: true,
      ref: storage,
      loadingField: false,
      loadingBtn: false,
      isLoading: false,
      loadingValue: 0
    },
    imagePrev: {
      ori: "",
      crop: ""
    },
    isMaintenance: true
  }),
  computed: {},
  props: ["openDialog"],
  methods: {
    closeModal() {
      this.openDialog = !this.openDialog;
      this.$parent.dialog = false;
    },
    saveSiteName() {
      this.siteName.loadingField = true;
      this.siteName.loadingBtn = true;
      this.ref
        .doc(this.idDoc)
        .update({
          siteName: this.siteName.field
        })
        .then(() => {
          this.siteName.loadingField = false;
          this.siteName.loadingBtn = false;
          this.$swal({
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            title: "Berhasil",
            icon: "success",
            position: "top-right"
          });
        });
    },
    saveSiteSlug() {
      this.siteSlug.loadingField = true;
      this.siteSlug.loadingBtn = true;
      this.ref
        .doc(this.idDoc)
        .update({
          siteSlug: this.siteSlug.field
        })
        .then(() => {
          this.siteSlug.loadingField = false;
          this.siteSlug.loadingBtn = false;
          this.$swal({
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            title: "Berhasil",
            icon: "success",
            position: "top-right"
          });
        });
    },
    getPreviewFile() {
      this.siteHeader.files == null
        ? (this.siteHeader.disableBtn = true)
        : (this.siteHeader.disableBtn = false);
    },
    uploadImage() {
      var curDate = new Date();
      var time = curDate.getTime();
      var uploading = this.siteHeader.ref
        .ref(time + "-" + this.siteHeader.files.name + "")
        .put(this.siteHeader.files);

      uploading.on(
        "state_changed",
        snap => {
          this.siteHeader.isLoading = true;
          this.siteHeader.loadingField = true;
          this.siteHeader.loadingBtn = true;
          this.siteHeader.loadingValue =
            (snap.bytesTransferred / snap.totalBytes) * 100;
        },
        () => {},
        () => {
          this.siteHeader.loadingField = false;
          this.siteHeader.disableBtn = true;
          this.siteHeader.loadingBtn = false;
          this.siteHeader.loadingValue = 0;
          this.siteHeader.isLoading = false;
          this.siteHeader.files = null;
          uploading.snapshot.ref.getDownloadURL().then(url => {
            var fileExt = uploading.snapshot.ref.name.split(".")[1];
            var splitUrl = url.split("." + fileExt);
            var cropUrl = splitUrl[0] + "_200x200." + fileExt + splitUrl[1];
            this.imagePrev.ori = url;

            this.ref.doc(this.idDoc).update({
              siteHeader: {
                ori: url,
                crop: cropUrl
              }
            });
          });
        }
      );
    },
    setMaintenance() {
      this.ref.doc(this.idDoc).update({
        isMaintenance: this.isMaintenance
      });
    }
  },
  created() {
    this.ref.onSnapshot(snap => {
      snap.forEach(snapp => {
        var data = snapp.data();
        this.idDoc = snapp.id;
        this.siteName.field = data.siteName;
        this.siteSlug.field = data.siteSlug;
        this.imagePrev.crop = data.siteHeader.crop;
        this.imagePrev.ori = data.siteHeader.ori;
        this.isMaintenance = data.isMaintenance;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
</style>