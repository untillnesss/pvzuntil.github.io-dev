<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card width="500">
          <v-card-title class="blue white--text">
            <div>
              <h3 class="headline mb-0 font-weight-bold">LOGIN ADMIN !</h3>
              <div class="caption">kalo bukan admin, jangan login yeee...</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Username"
                  outlined
                  dense
                  hide-details
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  outlined
                  dense
                  hide-details
                  rounded
                  type="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <span>
              <v-btn text color="error" to="/">Kembali</v-btn>
              <v-btn color="primary">Masuk</v-btn>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>