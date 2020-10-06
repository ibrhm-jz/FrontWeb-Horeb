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
    <v-spacer></v-spacer>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div align="center">
      <b>
        <font color="black" size="6">Nuestros</font>
        <font color="#00b686" size="6">&nbsp;Productos</font>
      </b>
    </div>
    <br />
    <div class="contenedor">
      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA PVC HIDRAULICO S.I.S.M</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url1" height="194"></v-img>

            <v-card-text
              >Uso en alcantarillado para conduccion de aguas
              negras.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA DE POLIETILENO ALTA DENSIDAD</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url2" height="194"></v-img>

            <v-card-text
              >Uso en alcantarillado para conduccion de aguas negras cuenta con
              campana y espiga.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA CONDUIT DE PVC Y POLIETILENO
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url3" height="194"></v-img>

            <v-card-text
              >Se utiliza para proteger y enrutar el cableado
              eléctrico.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <br />

      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA PVC ALC.METRICO</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url4" height="194"></v-img>

            <v-card-text
              >Uso en alcantarillado para conduccion de aguas negras cuenta con
              campana y espiga.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA DE FIERRO GALVANIZADO</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url5" height="194"></v-img>

            <v-card-text
              >El principal uso del tubo galvanizado es llevar agua a los
              hogares y edificios comerciales.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBERIA DE ACERO SOLDABLE
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url6" height="194"></v-img>

            <v-card-text
              >Su uso comoun es el transporte de agua,aceites combustibles
              etc.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <br />

      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TUBO CEDAZO TIPO CANASTILLA</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url7" height="194"></v-img>

            <v-card-text
              >Se utiliza en cuando se requiere una velocidad mínima de ingreso
              y evita la entrada de arena.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >BROCALES DE FIERRO FUNDIDO Y POLIETILENO</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url8" height="194"></v-img>

            <v-card-text
              >Los brocales son usados por lo general como registros de
              drenaje.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >MARCOS CON TAPA Y CONTRAMARCOS
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url9" height="194"></v-img>

            <v-card-text
              >Se utliza para pozos y  registro de drenaje para facilitar el mantenimiento.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <br />

      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >VALVULAS DE FIERRO FUNDIDO Y BRONCE</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url10" height="194"></v-img>

            <v-card-text
              >Las Válvulas son un instrumento de regulación y control de
              fluidos.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >GAVIONES TRIPLE TORCION</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url11" height="194"></v-img>

            <v-card-text
              >Se usan para Defensas pluviales, muros de protección,encauzamientos de ríos, entre otros.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >GEOTEXTIL
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url12" height="194"></v-img>

            <v-card-text
              > Los geotextiles sirven para separar tierras de diferente granulometría estabilizando el terreno.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <br />

      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >EQUIPO DE CLORACION E HIPOCLORITO DE
                  CALCIO</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url13" height="194"></v-img>

            <v-card-text
              >Ideal para la desinfeccion de agua y potabilizacion de la misma.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >ALCANTARILLA METALICA</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url14" height="194"></v-img>

            <v-card-text
              >Están diseñadas, para solucionar problemas de drenaje transversal en carreteras, vías férreas, etc.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >TINACOS,CISTERNAS Y BIODIGESTORES
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url15" height="194"></v-img>

            <v-card-text
              >Para almacenamiento de agua y tratatado de aguas negras.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <br />

      <div class="row">
        <div>
          <v-card
            max-width="344"
            class="mx-auto card-home"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >PIEZAS ESPECIALES EN PVC</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url16" height="194"></v-img>

            <v-card-text
              >Contamos consuministro en conexiones fabricadas en PVC para redes de agua potable.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="344"
            class="mx-auto"
            style="margin-right: 20px !important"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >POSTES Y REGISTROS DE CONCRETO MURETES PARA BAJA TENSION
                  ELECTRICA.</v-list-item-title
                >
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url17" height="194"></v-img>

            <v-card-text
              >Tambien contamos con productos en el ambito electrico.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >LAVADEROS
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="url18" height="194"></v-img>

            <v-card-text
              >Tambien suministramos lavaderos para ropa al mayoreo.</v-card-text
            >

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>
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
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      url1: require("../assets-products/tuberia-hidraulica.jpg"),
      url2: require("../assets-products/tuberia-polietileno.jpg"),
      url3: require("../assets-products/tuberia-conduit.jpg"),
      url4: require("../assets-products/tuberia-alcantarillada.png"),
      url5: require("../assets-products/tuberia-galvanizada.jpg"),
      url6: require("../assets-products/tuberia-acero-soldable.jpg"),
      url7: require("../assets-products/tuberia-canastilla.png"),
      url8: require("../assets-products/brocales.png"),
      url9: require("../assets-products/marcos.jpg"),
      url10: require("../assets-products/valvulas.jpg"),
      url11: require("../assets-products/gaviones.jpg"),
      url12: require("../assets-products/geotextil.png"),
      url13: require("../assets-products/cloracion.jpg"),
      url14: require("../assets-products/alcantarilla-metalica.jpg"),
      url15: require("../assets-products/tinaco.jpg"),
      url16: require("../assets-products/piezas-especiales.jpeg"),
      url17: require("../assets-products/postes.jpg"),
      url18: require("../assets-products/lavaderos.jpg"),

      pensative: require("../assets/pensative.png"),
    };
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
  width: 100%;

  margin: 1em 10% !important;
}
.contenedorfooter {
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
  margin-left: 5%;
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
vr {
  display: block;
  width: 10px;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 150px;
}
</style>