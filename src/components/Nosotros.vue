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
        <font color="black" size="6">Nosotros</font>
      </b>
    </div>
    <br />
    <div class="contenedor">
     <div align="left">
    <h3> ¿Quienes somos?</h3>
     </div>
    <div>
    Somos una empresa distribuidora de tubos y conexiones para agua potable, drenaje, saneamiento y alcantarillado. Contamos con una amplia gama de productos.
    en todo tipo de materiales para la construccion, elaboracion de todo tipo de estanques para sus diferentes usos, construccion de plantas de tratamientos de aguas residuales y suministro, servicio e instalacion para el comercio en general; tubo pvc, galvanizado, acero soldable, polietileno, gaviones, geotextil, tinacos, valvulas, alcantarillas metalicas, suministro e instalacion de Geomembrana.
    </div>
    <br/>

<font >
     <div align="left">
   <h3> Mision </h3>
   </div>
Nuestra mision es otorgar un servicio y productos de calidad teniendo cpmo prioridad la satisfaccion de nuestros
clientes, es por esto que contamos con personal altamente capacitado que  para atender
los requerimientos que cada cliente necesita. 
 </font>
 <br/> <br/> 

 <div align="left">
<h3>Vision</h3>
</div>
Ser uno de los mas importantes distribuidores de la region, ademas de ser reconocidos
por la calidad de nuestros servicios y productos, teniendo un precio competitivo.


 <br /><br /><br />
      <b-row>
    <b-col> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.363205223804!2d-93.11568768550498!3d16.758595988458286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd931da48d3d9%3A0x9796b4b0ff47428a!2sSuministros%20en%20Tuberia%20Horeb%20S.A%20de%20C.V!5e0!3m2!1ses-419!2smx!4v1601490290833!5m2!1ses-419!2smx" width="100%" height="425" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></b-col>
    <b-col>      <b-card
    height="400"
          >
          <div align="center">CONTACTANOS </div>
          <v-spacer></v-spacer>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field v-model="name" label="Nombre" required></v-text-field>

            <v-textarea
              v-model="asunto"
              label="Asunto"
              required
            ></v-textarea>

            <b-button class="btn-green" v-on:click="sendEmail"
              >Enviar Email</b-button
            >
          </v-form></b-card
        ></b-col>
  </b-row>

   
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

            <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { API } from "../Servicios/axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      asunto: "",
      text: "El correo se ha enviado,en un momento le atenderemos",
      snackbar: false,
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
      methods: {
    sendEmail() {
      if (this.email == "" || (this.asunto == "") | (this.name == "")) {
        window.alert("Datos incompletos para enviar Email.")
      } else {
        const data = {
          correo: this.email,
          mensaje: this.asunto,
          nombre: this.name,
        };
        API.post("email", data)
          .then((res) => {
            this.email = "";
            this.asunto = "";
            this.name = "";

            this.snackbar = true;
            // eslint-disable-next-line
            console.log(res.data);
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
          });
      }
    },
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