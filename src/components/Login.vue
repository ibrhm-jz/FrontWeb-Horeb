<template >
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container class="margen">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <div align="left">
                <font color="black" size="8">Inicio</font>
              </div>
              <v-spacer></v-spacer>
              <div align="left">
                <font color="grey">Por favor inicia sesión para continuar</font>
              </div>
              <v-spacer></v-spacer>
              <v-card class="elevation-12">
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
                  <v-btn color="#00b686" @click="Login">
                    <font color="white">Login</font>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div align="center">¿No tienes una cuenta? Contacta con el administrador.</div>
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
          // eslint-disable-next-line
          window.alert("Los datos se han guardado"+res.data);
          localStorage.setItem('userToken', res.data.token)
          router.push({ name: 'Home' })
          console.error(res.data);
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
  margin-top: 5%;
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
.alinear-centro {
}
</style>
