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
              <font color="black">Inicio</font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Productos</font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
              <font color="black">Servicios</font>
            </b-nav-item>
            <b-nav-item href="#" color="blue">
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
    <div align="center"><font face="Segoe UI"><h3>Nuestros Productos</h3></font></div>
      <br />
    <div class="contenedor"> 
    <div class="row">
      <div>
        <v-card max-width="344" class="mx-auto card-home" style="margin-right:20px!important; ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA PVC HIDRAULICO S.I.S.M</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url1" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

      <div>
        <v-card max-width="344" class="mx-auto" style="margin-right:20px!important;">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA DE POLIETILENO DE ALTA DENSIDAD</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url2" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

            <div>
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA CONDUIT DE PVC Y POLIETILENO
</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url3" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>
    </div>


    <br/>


        <div class="row">
      <div>
        <v-card max-width="344" class="mx-auto card-home" style="margin-right:20px!important; ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA PVC ALC.METRICO</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url4" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

      <div>
        <v-card max-width="344" class="mx-auto" style="margin-right:20px!important;">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA DE FIERRO GALVANIZADO</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url5" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

            <div>
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">TUBERIA DE ACERO SOLDABLE
</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url6" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>
    </div>
    <br/>


    
        <div class="row">
      <div>
        <v-card max-width="344" class="mx-auto card-home" style="margin-right:20px!important; ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">TUBO CEDAZO TIPO CANASTILLA</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url7" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

      <div>
        <v-card max-width="344" class="mx-auto" style="margin-right:20px!important;">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">BROCALES DE FIERRO FUNDIDO Y POLIETILENO</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url8" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

            <div>
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">MARCOS CON TAPA Y CONTRAMARCOS
</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url6" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>
    </div>

       <br/>


    
        <div class="row">
      <div>
        <v-card max-width="344" class="mx-auto card-home" style="margin-right:20px!important; ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">VALVULAS DE FIERRO FUNDIDO Y BRONCE</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url10" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

      <div>
        <v-card max-width="344" class="mx-auto" style="margin-right:20px!important;">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">GAVIONES TRIPLE TORCION</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url11" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

            <div>
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">GEOTEXTIL
</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url12" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>
    </div>

           <br/>


    
        <div class="row">
      <div>
        <v-card max-width="344" class="mx-auto card-home" style="margin-right:20px!important; ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">EQUIPO DE CLORACION E HIPOCLORITO DE CALCIO</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url13" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

      <div>
        <v-card max-width="344" class="mx-auto" style="margin-right:20px!important;">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">ALCANTARILLA METALICA</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url14" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>

            <div>
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
         
            <v-list-item-content>
              <v-list-item-title class="headline">TINACOS,CISTERNAS Y BIODIGESTORES
</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="url15" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">MAS INFORMACION</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </div>
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
      url14: require("../assets-products/gaviones.jpg"),
      url15: require("../assets-products/geotextil.png"),


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
  
  margin: 1em 10%!important;

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
</style>