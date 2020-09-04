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
      <div>
        <form v-for="enter in datosEmpresa" :key="enter.id">
          <p class="h4 text-center mb-4">Datos de la Empresa.</p>
          <br />
          <label for="defaultFormRegisterNameEx" class="grey-text">
            <b>Nombre de la Empresa</b>
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            class="form-control"
            v-model="enter.nombre"
          />

          <br />
          <label for="defaultFormRegisterEmailEx" class="grey-text">
            <b>Clabe interbancaria</b>
          </label>
          <input
            type="text"
            id="defaultFormRegisterEmailEx"
            class="form-control"
            v-model="enter.clabe_interbancaria"
          />
          <br />
          <label for="defaultFormRegisterConfirmEx" class="grey-text">
            <b>RFC</b>
          </label>
          <input
            type="text"
            id="defaultFormRegisterConfirmEx"
            class="form-control"
            v-model="enter.rfc"
          />
          <br />
          <label for="defaultFormRegisterPasswordEx" class="grey-text">
            <b>Correo</b>
          </label>
          <input
            type="text"
            id="defaultFormRegisterPasswordEx"
            class="form-control"
            v-model="enter.correo"
          />
          <br />
          <label for="defaultFormRegisterPasswordEx" class="grey-text">
            <b>Direccion</b>
          </label>
          <input
            type="text"
            id="defaultFormRegisterPasswordEx"
            class="form-control"
            v-model="enter.direccion"
          />

          <div>
            <br />
            <b-button block variant="success">Actualizar</b-button>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>


<script>
import { API, TOKEN } from "../Servicios/axios";
export default {
        created(){
        this.token=localStorage.getItem('userToken')
    },
  name: "empresa",
  data() {
    return {
      drawer: false,
      group: null,
      datosEmpresa: [],
      token:""
    };
  },
  mounted() {
    API.get("empresa", {
      headers: {
        Authorization:
          "Bearer " +
          this.token
          },
    }).then((response) => {
      this.datosEmpresa = response.data;
      /* eslint-disable */
      console.log(this.datas);
      // eslint-disable-next-line no-console
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
.cardtrans {
  background-color: #ffffff !important;
}
.contenedor {
  margin-top: 60px;
  width: 40%;
}
.font-drawer {
  color: black;
  margin-left: 10px;
  font-family: "Segoe UI";
  size: 10px;
}
</style>