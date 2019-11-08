<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="col-12 col-sm-4">
        <v-fade-transition>
          <v-img src="@/assets/pc.png">
            <template v-slot:placeholder>
              <v-row class="fill-height" align="center" justify="center">
                <v-progress-circular color="primary" size="90" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-fade-transition>
      </v-col>
      <v-col class="col-12 text-center col-sm-8">
        <h1 class="display-4">
          Turn
          <v-icon size="100">local_cafe</v-icon>&nbsp;into
          <v-icon size="100">code</v-icon>
        </h1>
      </v-col>
      <v-col class="col-12 text-center">
        <p class="font-italic overline">-- Siapa Saja Boleh --</p>
      </v-col>
    </v-row>
  </v-container>
</template>