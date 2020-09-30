<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <img src="../assets/logo-nuevo.png" alt width="160" height="55" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item link to="/"  color="blue">
              <font color="black">Inicio</font>
            </b-nav-item>
            <b-nav-item  link to="/productos-web" color="blue">
              <font color="black" >Productos</font>
            </b-nav-item>
            <b-nav-item link to="/Servicios"  color="blue">
              <font color="black">Servicios</font>
            </b-nav-item>
            <b-nav-item link to="/Nosotros" color="blue">
              <font color="black">Nosotros</font>
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
<div>
  <b-modal id="modal-1" centered title="BootstrapVue" hide-footer>
    <div align="center">
     <v-img
              :src="url1"
              max-width="500"
              height="250"
            ></v-img></div>
  </b-modal>
</div>
    <div align="center">
      <b>
        <font color="black" size="6">Nuestros</font>
        <font color="#00b686" size="6">&nbsp;Servicios</font>
      </b>
    </div>
    <br />
    <div class="contenedor">
      <div>
        <div align="left"><h4>Pasto Sintetito</h4></div>
        <v-spacer></v-spacer>
        <font color="grey">
          <h6>
            Suministramos e instalamos pasto sintetico,
            <v-spacer></v-spacer>
            Instalamos canchas deportivas, patios,jardines o locacines
            decorativas, en distintos colores.
          </h6>
        </font>
        <v-spacer></v-spacer>
        Tipos de pasto sintetico:
         <v-spacer></v-spacer>
        <v-chip style="background-color:grey;" dark v-b-modal.modal-1>Monofilamento</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Fibrilado</v-chip> &nbsp;
        <v-chip style="background-color:grey;" dark>Hibrido</v-chip>


        <v-row>
          <v-col cols="6" sm="4">
            <v-img
              :src="url1"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            ></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url2"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url3"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.2)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>

      <br />

      <div align="left">
        <div align="left"><h4>Enmallado Perimetral</h4></div>
        <v-spacer></v-spacer>
        <font color="grey">
          <h6>
            Suministro e instalacion en todo tipo de Enmallado
            <v-spacer></v-spacer>
            Enmallamos campos deportivos, hogares, o todo tipo de terrenos que desee cercar.
          </h6>
        </font>
        <v-spacer></v-spacer>
        Tipos de Malla:
         <v-spacer></v-spacer>
        <v-chip style="background-color:grey;" dark>Malla Ciclonica</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Malla electrosoldada</v-chip>

        <v-row>
          <v-col cols="6" sm="4">
            <v-img
              :src="url4"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            ></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url5"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url6"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.2)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>

      <br />

      <div>
        <div align="left"><h4>Concertina</h4></div>
                <v-spacer></v-spacer>
        <font color="grey">
          <h6>
            Suministramos en instalamos concertina
            <v-spacer></v-spacer>
            Para penales, hogares, lugares que requieran proteccion
          </h6>
        </font>
        <v-spacer></v-spacer>
        Algunos tipos de concertina:
         <v-spacer></v-spacer>
        <v-chip style="background-color:grey;" dark>Concertina sencilla</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Concertina Industrial</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Concertina Militar</v-chip>&nbsp;
        <v-row>
          <v-col cols="6" sm="4">
            <v-img
              :src="url7"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            ></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url8"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url9"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.2)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>

      <br />
      <div>
        <div align="left"><h4>Trabajos en Herreria</h4></div>
                        <v-spacer></v-spacer>
        <font color="grey">
          <h6>
            Suministramos en instalamos en trabajos en herreria.
            <v-spacer></v-spacer>
            Hacemos todo tipo de trabajos en herreria que usted requiera.
          </h6>
        </font>
        <v-spacer></v-spacer>
        Algunos tipos de trabajo que realizamos:
         <v-spacer></v-spacer>
        <v-chip style="background-color:grey;" dark>Marcos</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Contramarcos</v-chip>&nbsp;
        <v-chip style="background-color:grey;" dark>Proteccion p/ventanas</v-chip>&nbsp;
        <v-row>
          <v-col cols="6" sm="4">
            <v-img
              :src="url10"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            ></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url11"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img
              :src="url12"
              gradient="to top right, rgba(100,115,201,.2), rgba(25,32,72,.2)"
              max-width="400"
              height="150"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>
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
      images: [
        require("../assets-products/tuberia-hidraulica.jpg"),
        require("../assets-products/tuberia-polietileno.jpg"),
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      url1: require("../assets-services/pasto-1.jpg"),
      url2: require("../assets-services/pasto-2.jpg"),
      url3: require("../assets-services/pasto-3.jpg"),
      url4: require("../assets-services/enmallado-1.jpg"),
      url5: require("../assets-services/enmallado-2.jpg"),
      url6: require("../assets-services/enmallado-3.jpg"),
      url7: require("../assets-services/concertina-1.jpg"),
      url8: require("../assets-services/concertina-2.jpg"),
      url9: require("../assets-services/concertina-3.jpg"),
      url10: require("../assets-services/herreria-1.jpg"),
      url11: require("../assets-services/herreria-2.jpg"),
      url12: require("../assets-services/herreria-3.jpg"),
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