<template>
  <div>
    <v-container mt-4 class="transparent">
      <h2>EDITOR MENU BAR</h2>
      <v-row>
        <v-col>
          <v-btn color="success" small @click="sheet = !sheet; submitType = 'add'">TAMBAH MENU</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="menus" :items-per-page="5" class="elevation-1">
            <template v-slot:item.icon="{ item }">
              <v-icon x-large>{{item.icon}}</v-icon>
            </template>
            <template v-slot:item.aksi="{ item }">
              <!-- <v-btn-toggle rounded :mandatory="true"> -->
              <v-btn
                small
                color="amber"
                class="ma-1"
                @click="prepareEdit(item.id)"
                :loading="btnloading"
              >
                <v-icon small color="white">edit</v-icon>
              </v-btn>
              <v-btn small color="error" class="ma-1" @click="deleteMenu(item.id)">
                <v-icon small color="white">delete</v-icon>
              </v-btn>
              <!-- </v-btn-toggle> -->
            </template>
          </v-data-table>
        </v-col>
      </v-row>

      <v-bottom-sheet v-model="sheet" inset>
        <v-sheet class="text-center">
          <v-container fluid px-6>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col>
                  <v-text-field v-model="nama" label="Nama menu" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  <v-row justify="center">
                    <small>Preview</small>
                  </v-row>
                  <v-row justify="center">
                    <v-icon x-large>{{icon}}</v-icon>
                  </v-row>
                </v-col>
                <v-col cols="10">
                  <v-text-field v-model="icon" label="Tulis icon" required></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center" justify="end">
                <v-col align="center" justify="end" class="d-flex" v-if="submitType == 'add'">
                  <v-btn color="primary" @click="addMenu()" :loading="btnloading">TAMBAH</v-btn>
                </v-col>
                <v-col align="center" justify="end" class="d-flex" v-else>
                  <v-btn color="primary" @click="editMenu()" :loading="btnloading">SIMPAN</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-sheet>
      </v-bottom-sheet>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      sheet: false,
      menus: [],
      ref: db.collection("menu"),
      headers: [
        { text: "Icon", sortable: false, value: "icon" },
        {
          text: "Nama Menu",
          value: "txt"
        },
        { text: "Aksi", sortable: false, value: "aksi", align: "end" }
      ],
      nama: "",
      icon: "",
      btnloading: false,
      submitType: "",
      idForEdit: ""
    };
  },
  created() {
    this.ref.orderBy("createdAt", "asc").onSnapshot(snap => {
      this.menus = [];
      snap.forEach(snapp => {
        this.menus.push({
          id: snapp.id,
          txt: snapp.data().txt,
          icon: snapp.data().icon
        });
      });
    });
  },
  methods: {
    addMenu() {
      this.btnloading = true;
      this.ref
        .add({
          txt: this.nama,
          icon: this.icon,
          createdAt: new Date()
        })
        .then(() => {
          this.sheet = !this.sheet;
          this.nama = "";
          this.icon = "";
          this.btnloading = false;
        });
    },
    deleteMenu(id) {
      this.$swal({
        title: "Yakin ?",
        showCancelButton: true,
        icon: "warning"
      }).then(res => {
        if (res.value) {
          this.ref.doc(id).delete();
          this.$swal({
            toast: true,
            position: "top-right",
            title: "Berhasil",
            icon: "success",
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
    },
    prepareEdit(id) {
      this.btnloading = !this.btnloading;
      var data;
      this.ref
        .doc(id)
        .get()
        .then(datas => {
          data = datas.data();

          this.nama = data.txt;
          this.icon = data.icon;
          this.sheet = !this.sheet;
          this.submitType = "edit";
          this.btnloading = !this.btnloading;
          this.idForEdit = id;
        });
    },
    editMenu() {
      this.btnloading = true;
      this.ref
        .doc(this.idForEdit)
        .set({
          txt: this.nama,
          icon: this.icon
        })
        .then(() => {
          this.sheet = !this.sheet;
          this.nama = "";
          this.icon = "";
          this.btnloading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>