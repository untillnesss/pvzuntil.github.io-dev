<template>
  <div>
    <v-container mt-4>
      <h2>ABOUT SECTION</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="1">
            <v-img src="@/assets/me.jpg" height="300" aspect-ratio="1.4" contain></v-img>
          </v-card>
          <v-file-input
            class="mt-4"
            v-model="fieldImage.image"
            label="Pilih gambar"
            prepend-icon="camera_alt"
            outlined
            dense
            show-size
            counter
            accept="image/*"
            :loading="fieldImage.loading"
            @change="getPreviewImage"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="blue" dark label x-small>{{ text }}</v-chip>
            </template>
          </v-file-input>
          <v-row>
            <v-spacer></v-spacer>
            <v-progress-circular
              :value="fieldImage.loadingValue"
              v-if="fieldImage.isLoading"
              color="success"
              class="mr-3"
            ></v-progress-circular>
            <v-btn
              v-else
              color="success"
              class="mr-3"
              smalls
              :disabled="fieldImage.disable"
              @click="uploadImage"
            >upload</v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-text-field name="name" label="Greeting !" outlined></v-text-field>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { storage } from "@/main.js";
export default {
  data: () => ({
    aboutImage: "",
    fieldImage: {
      image: null,
      loading: false,
      disable: true,
      isLoading: false,
      loadingValue: 0
    }
  }),
  methods: {
    getPreviewImage() {
      if (this.fieldImage.image == null) {
        return (this.fieldImage.disable = true);
      }
      this.fieldImage.disable = false;
    },
    uploadImage() {
      var date = new Date();
      var time = date.getTime();
      var uploading = storage
        .ref("" + time + "-" + this.fieldImage.image.name)
        .put(this.fieldImage.image);

      uploading.on("state_changed", snap => {
        this.fieldImage.loading = true;
        this.fieldImage.isLoading = true;
        this.fieldImage.loadingValue =
          (snap.bytesTransferred / snap.totalBytes) * 100;
      });

      // console.log(uploading); TODO LANJUT sini
    }
  }
};
</script>

<style lang="scss" scoped>
</style>