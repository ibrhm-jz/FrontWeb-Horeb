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
              <font color="black">Inicio    |</font>
            </b-nav-item>
            
            <b-nav-item href="#" color="blue">
              <font color="black">Productos |</font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Servicios |</font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Nosotros  |</font>
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
    ¿Qué servicios ofrecemos a nuestros clientes?
    <div class="contenedor">
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-4">
             <v-card-text> <p class="display-4 text--primary">
        Cercado Perimetral
      </p></v-card-text>
            </v-col>

            <v-col class="px-4">
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
                <v-col cols="auto">
          <v-img
            height="400"
            width="400"
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
  <v-spacer></v-spacer>
          <div class="contenedor-play">
      <br />
      <br />
      <h4 style="margin-left:13%">
        <b-icon icon="arrow-right-short"></b-icon>Contactanos
      </h4>
      <div align="center" class="contenedor">
        <div class="row">
          <div class="footer" style="width:25%;">
            <br />
            <h5>Direccion:</h5>
            <hr color="white" />2a. Ote.Nte #682-B entre 5a y 6a norte, Col.Centro Tuxtla Gutiérrez,Chis.
            <br />
            <br />
          </div>

          <div class="footer" style="width:25%; ">
            <br />
            <h5>Datos de contacto:</h5>
            <hr color="white" />Ofic.(961) 118 85 80 / Cel.961 196 30 20
            <v-spacer></v-spacer>Tuberia_horeb@hotmail.com
            <br />
            <br />
          </div>

          <div class="footer" style="width:25%; ">
            <br />
            <h5>Redes Sociales:</h5>
            <hr color="white" />2a. Ote.Nte #682-B entre 5a y 6a norte, Col.Centro Tuxtla Gutiérrez,Chis.
            <br />
            <br />
          </div>
        </div>
        <br />
        <font size="2">Copyright 2020 Suministros en Tuberia Horeb, S.A. de C.V.</font>
        <br />
        <br />
      </div>

      <div>
        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
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

.contenedor-middle {
  background-color: #c6c6c6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
</style>