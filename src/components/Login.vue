<template >
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container class="margen">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
            <div align ="center">  <img src="../assets/logo-nuevo.png" alt width="200" height="75" /></div>
              <div align="left">
                <font color="black" size="6">Inicio</font>
              </div>
              <v-spacer></v-spacer>
              <div align="left">
                <font color="grey">Por favor inicia sesión para continuar</font>
              </div>
              <v-spacer></v-spacer>
              <v-card class="elevation-4">
                <v-toolbar color="#00b686" dark flat>
                  <v-toolbar-title>Inicio de Sesion</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Correo"
                      v-model="email"
                      name="correo"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Contraseña"
                      name="contraseña"
                      v-model="password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                      <b-button class="btn btn-green" type="submit" @click="Login">Iniciar Sesion </b-button>
                  
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>



<script>
import { API } from "../Servicios/axios";
import router from '../router'
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data(){
    return{
      email:"",
      password:""
    }

  },
  methods:{
    Login() {
      const data = {
        email: this.email,
        password:this.password
      };
      API.post("login", data)
        .then((res) => {
          window.alert("Los datos se han guardado"+res.data);
          localStorage.setItem('userToken', res.data.token)
          localStorage.setItem('userId', res.data.usuario[0].id)
          router.push({ name: 'Inicio' })
           // eslint-disable-next-line
          console.log(res.data.usuario[0].id);
        })  
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-index {
  width: 100%;
  background-color: aquamarine !important;
}
.margen {
  margin-bottom: 2%;
  margin-top: 2%;
}

#header-content {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fafafa;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #ccc;
  /* IMPORTANTE */
  text-align: center;
}
.btn-green {
  color: #ffffff;
  background-color: #00b686 !important;
  border-color: #00b686 !important;
  padding: 8px;
}
</style>
