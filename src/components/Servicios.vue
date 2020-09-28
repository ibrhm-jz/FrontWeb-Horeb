<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <img src="../assets/logo-nuevo.png" alt width="160" height="55" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" color="blue">
              <font color="black">Inicio <font color="grey"> |</font></font>
            </b-nav-item>

            <b-nav-item href="#" color="blue">
              <font color="black">Productos <font color="grey"> |</font></font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Servicios <font color="grey"> |</font></font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Nosotros <font color="grey"> |</font></font>
            </b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link link to="/login">
              <button class="btn btn-light" type="submit" right>
                Iniciar Sesion
                <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
              </button>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <v-spacer></v-spacer>
    <br />
    <br />
    <br />
    <br />
    <br />

    <div align="center">
      <b>
        <font color="black" size="5">Nuestros</font>
        <font color="#00b686" size="5">&nbsp;Servicios</font>
      </b>
    </div>
    <br />
    <div class="contenedor">
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h5 class="font-weight-bold display-5 basil--text">
            Suministro e Instalacion de Cercado Perimetral
          </h5>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">
            <v-icon>mdi-image</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, i) in items" :key="i">
            <v-card color="basil" flat>
              <div align="center">
                <v-img :src="images[i]" aspect-ratio="2" width="60%"></v-img>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <br />

      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h5 class="font-weight-bold display-5 basil--text">
            Suministro e Instalacion de Concertina
          </h5>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">
            <v-icon>mdi-image</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, i) in items" :key="i">
            <v-card color="basil" flat>
              <div align="center">
                <v-img :src="images[i]" aspect-ratio="2" width="60%"></v-img>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
    <br />
    <v-spacer></v-spacer>
    <v-footer dark padless>
      <v-card
        class="flex"
        flat
        tile
        style="background-color: #00b686 !important"
      >
        <v-card-title>
          <font face="Segoe UI" size="2">
            <v-icon size="20px"> mdi-home </v-icon> &nbsp;Direccion: 2a. Ote.Nte
            #682-B entre 5a y 6a norte, Col.Centro Tuxtla Gutiérrez,Chis.
            <br />
            <v-icon size="20px"> mdi-phone </v-icon> &nbsp;Tel: Ofic.(961) 118
            85 80 / Cel.961 196 30 20 &nbsp;&nbsp;&nbsp; Email:
            Tuberia_horeb@hotmail.com</font
          >
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          <strong>Suministros en Tuberia Horeb S.A de C.V</strong>-{{
            new Date().getFullYear()
          }}
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees", "Deserts"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        require("../assets-products/tuberia-hidraulica.jpg"),
        require("../assets-products/tuberia-polietileno.jpg"),
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      url1: require("../assets-products/tuberia-hidraulica.jpg"),
      url2: require("../assets-products/tuberia-polietileno.jpg"),
      url3: require("../assets-products/tuberia-conduit.jpg"),
      url4: require("../assets-products/tuberia-alcantarillada.png"),
      url5: require("../assets-products/tuberia-galvanizada.jpg"),
      url6: require("../assets-products/tuberia-acero-soldable.jpg"),
      url7: require("../assets-products/tuberia-canastilla.png"),
      url8: require("../assets-products/brocales.png"),
      url9: require("../assets-products/brocales.png"),
      url10: require("../assets-products/valvulas.jpg"),
      url11: require("../assets-products/gaviones.jpg"),
      url12: require("../assets-products/geotextil.png"),
      url13: require("../assets-products/valvulas.jpg"),
      url14: require("../assets-products/alcantarilla-metalica.jpg"),
      url15: require("../assets-products/tinaco.jpg"),
      url16: require("../assets-products/piezas-especiales.jpeg"),
      url17: require("../assets-products/postes.jpg"),
      url18: require("../assets-products/lavaderos.jpg"),
    };
  },
};
</script>



<style  scoped>
.btn-green {
  color: #ffffff;
  background-color: #00b686 !important;
  border-color: #00b686 !important;
  padding: 8px;
}
.contenedor {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.contenedor-play {
  background-color: #00b686;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.card-home {
  width: 20%;
  padding: 8px;
}
.footer {
  margin-left: 5%;
  margin-right: 2%;
}
.basil {
  background-color: #ffffff !important;
}
.basil--text {
  color: #00b686 !important;
}

.contenedor-middle {
  background-color: #c6c6c6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
</style>