<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <img src="../assets/logo-nuevo.png" alt width="160" height="55" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item link to="/" color="blue">
              <font color="black">Inicio</font>
            </b-nav-item>
            <b-nav-item link to="/productos-web" color="blue">
              <font color="black">Productos</font>
            </b-nav-item>
            <b-nav-item link to="/Servicios" color="blue">
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
    <br /><br />
    <div>
      <v-carousel :show-arrows="false" cycle="true">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-spacer></v-spacer>
    <br />
    <div align="center">
      <b>
        <font color="black" size="6">Productos</font>
        <font color="#00b686" size="6">&nbsp;Destacados</font>
      </b>
      <hr style="width: 90%" />
    </div>
    <br />
    <div class="contenedor">
      <div class="row">
        <v-card class="mx-auto" max-width="250">
          <v-img :src="url1" height="200px"></v-img>
          <v-card-title>Tuberia Corrugada</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url2" height="200px"></v-img>
          <v-card-title>Pasto Cintetico</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url3" height="200px"></v-img>
          <v-card-title>Valvuleria</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url4" height="200px"></v-img>
          <v-card-title>Geomembrana</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <br />
    <div class="contenedor">
      <div class="row">
        <v-card class="mx-auto" max-width="250">
          <v-img :src="url5" height="200px"></v-img>
          <v-card-title>Tuberia de Pvc</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url6" height="200px"></v-img>
          <v-card-title>Plantas de Tratamiento</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url7" height="200px"></v-img>
          <v-card-title>Tuberia de acero</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="250">
          <v-img :src="url8" height="200px"></v-img>
          <v-card-title>Piezas Especiales</v-card-title>

          <v-card-actions>
            <v-btn color="orange" text link to="/productos-web">ver mas</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <br />
    <br />
    <div class="contenedor-middle">
      <div align="left" class="contenedor">
        <div class="row">
          <div class="footer" style="width: 25%">
            <br />
            <h4>
              <b-icon icon="file-earmark-plus-fill" color="white"></b-icon
              >&nbsp;Certificaciones
            </h4>
            <br />Contamos con certificaciones avaladas para los respectivos
            tubos.
            <br />
          </div>

          <div class="footer" style="width: 25%">
            <br />
            <h4>
              <b-icon icon="hammer" color="white"></b-icon>&nbsp;Servicios
            </h4>
            <br />Instalacion de Enmallado Perimetral <br />Instalacion en Pasto
            cintetico <br />Instalacion de Concertina <br />Instalacion de
            Geomembrana
            <br />
            <br />
            <b-button class="btn-green" link to="/servicios"
              >Conoce mas</b-button
            >
          </div>

          <div class="footer" style="width: 25%">
            <br />
            <h4>
              <b-icon icon="headset" color="white"></b-icon>&nbsp;Asesoria
            </h4>
            <br />Contamos con vendedores especializados para asesorlos con
            nuestros productos.
            <br />
          </div>
        </div>
        <br />
      </div>

      <div>
        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
      </div>
    </div>

    <br />
    <div align="left" class="contenedor">
      <div class="row">
        <div class="footer" style="width: 30%">
          <br />
          <v-img :src="pensative" width="250"></v-img>
          <br />
        </div>

        <div align="center" class="footer" style="width: 30%">
          <br />
          <br />
          <h3>¿Tienes dudas?</h3>
          <br />
          Contactanos, y podremos ayudarte.
          <br />
          <br />
          <b-button
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
          >
            Contactanos
          </b-button>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <b-card
          >Envianos un email
          <v-spacer></v-spacer>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field v-model="name" label="Nombre" required></v-text-field>

            <v-text-field
              v-model="asunto"
              label="Asunto"
              required
            ></v-text-field>

            <b-button class="btn-green" v-on:click="sendEmail"
              >Enviar Email</b-button
            >
          </v-form></b-card
        >
      </b-collapse>
    </div>
    <br />
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
          <v-btn
            class="mx-4"
            dark
            icon
            href="https://www.facebook.com/Suministros-en-Tuberia-HOREB-112676877152353"
          >
            <v-icon size="24px"> mdi-facebook </v-icon></v-btn
          >

          <v-btn
            class="mx-4"
            dark
            icon
            href="https://www.facebook.com/Suministros-en-Tuberia-HOREB-112676877152353"
          >
            <v-icon size="24px"> mdi-linkedin </v-icon></v-btn
          >

          <v-btn
            class="mx-4"
            dark
            icon
            href="https://www.facebook.com/Suministros-en-Tuberia-HOREB-112676877152353"
          >
            <v-icon size="24px"> mdi-twitter </v-icon></v-btn
          >
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
      snackbar: false,
      text: "El correo se ha enviado,en un momento le atenderemos",
      modalShow: false,
      show: false,
      visible: false,
      name: "",
      email: "",
      asunto: "",
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      items: [
        {
          src: require("../assets/aset-2.jpg"),
        },
        {
          src: require("../assets/aset-1.jpg"),
        },
        {
          src: require("../assets/tubos.jpg"),
        },
        {
          src: require("../assets/pasto.jpg"),
        },
      ],
      img: [
        {
          src: require("../assets/1-p.png"),
        },
      ],
      url1: require("../assets/1-p.png"),
      url2: require("../assets/pasto.jpg"),
      url3: require("../assets/2-p.png"),
      url4: require("../assets/8-p.jpeg"),
      url5: require("../assets/4-p.png"),
      url6: require("../assets/5-p.jpg"),
      url7: require("../assets/6-p.jpg"),
      url8: require("../assets/7-p.png"),
      pensative: require("../assets/pensative.png"),
    };
  },
  methods: {
    sendEmail() {
      if (this.email == "" || (this.asunto == "") | (this.name == "")) {
        window.alert("Datos incompletos para enviar Email.");
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
</script>>


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