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
        <v-container>
          <v-card-title primary-title>Site settings</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <!-- <v-container> -->
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
            <!-- </v-container> -->
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="error" @click="closeModal()">close</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data: () => ({
    ref: db.collection("siteSetting"),
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
    }
  }),
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
        .doc(this.siteName.id)
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
        .doc(this.siteSlug.id)
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
    }
  },
  created() {
    this.ref.onSnapshot(snap => {
      snap.forEach(snapp => {
        console.log(snapp.data());
        this.siteName.id = snapp.id;
        this.siteName.field = snapp.data().siteName;

        this.siteSlug.id = snapp.id;
        this.siteSlug.field = snapp.data().siteSlug;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
</style>