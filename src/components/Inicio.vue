<template>
  <div>
    <div>
      <b-navbar type="light" variant="light" fixed="top">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <b-navbar-brand href="#">
          <img src="../assets/logo.png" class="d-inline-block align-top" width="30px" />
          Inicio
        </b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Empieza a administrar</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-sidebar v-model="drawer" shadow bg-variant="white">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>
            <em>tuberia_horeb@hotmail.com</em>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav color="blue">
        <v-list-item link to="/">
        
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer"> Home</v-list-item-title>
          </v-list-item-content>
        
        </v-list-item>

        <v-list-item link to="/Clientes">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer"> Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Empleados">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer"> Empleados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Productos">
          <v-list-item-icon>
            <v-icon>mdi-chart-ppf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">
            Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Cotizacion">
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">
            Cotizacion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Empresa">
          <v-list-item-icon>
            <v-icon>mdi-briefcase-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">
              Empresa
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">¿Salir?</strong>
          <b-button size="sm" @click="hide">Cerar sesion</b-button>
        </div>
      </template>
    </b-sidebar>

    <v-container class="contenedor">
      <span class="titulosecundario" style="color:black !important;">Tablero</span>
      <v-spacer></v-spacer>

      <span>
        <font face="Segoe UI" size="4" color="black">Usuario : Ibraham Surisadai Jimenez Lopez.</font>
      </span>
      <div>
  <div>
    <b-card-group deck>
    </b-card-group>
  </div>

  <div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card 
        header="Total de ventas"
       
        class="cardtrans">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card 
        header="Recurso"
        class="cardtrans">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>
      <v-spacer></v-spacer>
      <div align="left">
        <span class="titulosecundario" style="color:black !important;">Ultimas Cotizaciones</span>
      </div>
      <v-spacer></v-spacer><hr>

<div>
  <b-card title="FERRETUBOS" >
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>
    <a href="#" class="card-link" style="color:#00b686!important;">Ver mas</a>
   
  </b-card>
</div>
    </v-container>
  
    
  </div>
</template>


<script>
import { API } from "../Servicios/axios";
export default {
  name: "inicio",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
    mounted() {
    API.get("empresa",{
 headers: {
   Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODI5ODc5MSwiZXhwIjoxNTk4MzAyMzkxLCJuYmYiOjE1OTgyOTg3OTEsImp0aSI6Ink4SHR6N0lvaEVlRGhseHIiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.FSYN3usyf0Mcb-6vUn488vOdft4JBELoHJRIhcYcgZA'//the token is a variable which holds the token
 }
}).then(response => {
      this.datas = response.data;
      // eslint-disable-next-line
      console.log(this.datas)
     
      
  
    });
  },


  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>


<style scoped>

.titulos {
  font-family: "Segoe UI";
  font-weight: bold;
  font-size: 30px;
  color: black;
}

.titulosecundario {
  font-family: "Segoe UI";
  font-weight: bold;
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  margin-top: 10px;
}
.cardet {
  padding: 20px;
  width: 400px;
  height: 100px;
  margin-left: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.cardtrans{
    background-color: #ffffff!important;
}
.contenedor {
  margin-top: 60px;
  width: 100%;
 
 
}
.font-drawer {
  color: black;
  margin-left: 10px;
  font-family: "Segoe UI";
  size: 10px;
}
</style>