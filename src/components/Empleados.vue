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
        <v-list-item link to="/Home">
        
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
          <b-button size="sm" @click="hide" v-on:click="logout">Cerar sesion</b-button>
        </div>
      </template>
    </b-sidebar>


    <v-container class="contenedor">
      <span class="titulosecundario" style="color:black !important;">Empleados</span>
      <v-spacer></v-spacer>
      <br />
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span>
            <b-button squared variant="success" @click="BuscarEmpleado">Buscar</b-button>
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" v-model="searchnombre" v-on:keyup.enter="BuscarEmpleado"/>
      </div>
      <br />

      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4">
          <div align="right">
            <b-button squared variant="success" v-b-modal.modal-prevent-closing>Añadir Empleados</b-button>
          </div>
        </div>
      </div>

      <div>
        <v-container fluid>
          <font face="Segoe UI">
            <v-row justify="center">
              <v-subheader>Lista de Empleados</v-subheader>

              <v-expansion-panels>
                <v-expansion-panel v-for="(Empleados,i) in dataEmpleados" :key="i" hide-actions>
                  <v-expansion-panel-header v-on:click="getUser(Empleados)">
                    <v-row align="center" class="spacer" no-gutters>
                      <v-col cols="4" sm="2" md="1">
                        <v-avatar size="36px">
                          <v-icon>mdi-account-box-multiple</v-icon>
                        </v-avatar>
                      </v-col>

                      <v-col class="hidden-xs-only" sm="5" md="3">
                        <div align="left">
                          <strong
                            style="text-transform: uppercase;"
                          >{{Empleados.nombres}}&nbsp;{{Empleados.apellidos}}</strong>
                        </div>
                      </v-col>

                      <v-col class="text-no-wrap" cols="6" sm="3">
                        <div align="left">
                          <v-chip
                            color="black"
                            class="ml-0 mr-2 black--text"
                            label
                            small
                          >{{ Empleados.tipo_usuario }}</v-chip>
                        </div>
                      </v-col>

                      <v-col class="grey--text text-truncate hidden-sm-and-down">
                        <div align="left">
                          TEL:
                          {{ Empleados.telefono }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-divider></v-divider>
                    <v-card-text>
                      <div
                        style="text-transform: uppercase;"
                      >Nombres: {{Empleados.nombres}}&nbsp;{{Empleados.apellidos}}</div>
                      <v-spacer></v-spacer>Rango:
                      <b>{{Empleados.tipo_usuario}}</b>
                      <v-spacer></v-spacer>
                      Telefono: {{Empleados.telefono}} &nbsp;&nbsp;&nbsp;&nbsp; Correo:{{Empleados.email}}
                      <v-spacer></v-spacer>

                      <v-btn icon color="red">
                        <v-icon
                          style="color: #71ccb4;"
                          v-b-modal.modal-update
                          @click="sendUser(Empleados)"
                        >mdi-pencil</v-icon>
                      </v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                      <v-btn icon color="red" @click="deleteEmpleados(Empleados)">
                        <v-icon style="color: #C64444;">mdi-account-multiple-remove</v-icon>
                      </v-btn>
                    </v-card-text>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </font>
        </v-container>
      </div>
    </v-container>

    <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Registrar Empleados"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="RegistrarEmpleado"
        ok-variant="success"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" invalid-feedback="*Requerido">
            <b-form-input
              id="nombres"
              v-model="nombres"
              :state="nameState"
              required
              placeholder="Nombres"
            ></b-form-input>
            <br />
            <b-form-input
              id="apellidos"
              v-model="apellidos"
              :state="nameState"
              required
              placeholder="Apellidos"
              type="text"
            ></b-form-input>
            <br />
          
            <b-form-input
              id="correo"
              v-model="correo"
              :state="nameState"
              required
              placeholder="Correo"
            ></b-form-input>
            <br />
              <b-form-input
              id="contraseña"
              v-model="password"
              :state="nameState"
              required
              placeholder="Contraseña"
               type="password"
            ></b-form-input>
            <br />
              <b-form-input
              id="rcontraseña"
              v-model="rpassword"
              :state="nameState"
              required
              placeholder="Repetir contraseña"
              type="password"
            ></b-form-input>
            <br />
            <b-form-input
              id="correo"
              v-model="telefono"
              :state="nameState"
              required
              placeholder="Telefono"
            ></b-form-input>
            <br />

            <div>
              <b-form-select
                v-model="selected"
                :options="options"
       
              ></b-form-select>
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>

    <div>
      <b-modal
        id="modal-update"
        ref="modal"
        title="Registrar Cliente"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="ActualizarEmpleado"
        ok-variant="success"
      >
         <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" invalid-feedback="*Requerido">
            <b-form-input
              id="nombres"
              v-model="selectedUser.nombres"
              :state="nameState"
              required
              placeholder="Nombres"
            ></b-form-input>
            <br />
            <b-form-input
              id="apellidos"
              v-model="selectedUser.apellidos"
              :state="nameState"
              required
              placeholder="Apellidos"
              type="text"
            ></b-form-input>
            <br />
          
            <b-form-input
              id="correo"
              v-model="selectedUser.email"
              :state="nameState"
              required
              placeholder="Correo"
            ></b-form-input>
            <br />
              <b-form-input
              id="contraseña"
              v-model="selectedUser.password"
              :state="nameState"
              required
              placeholder="Contraseña"
               type="password"
            ></b-form-input>
            <br />
              <b-form-input
              id="rcontraseña"
              v-model="selectedUser.contraseña"
              :state="nameState"
              required
              placeholder="Repetir contraseña"
              type="password"
            ></b-form-input>
            <br />
            <b-form-input
              id="correo"
              v-model="selectedUser.telefono"
              :state="nameState"
              required
              placeholder="Telefono"
            ></b-form-input>
            <br />

            <div>
              <b-form-select
                v-model="selected"
                :options="options"
       
              ></b-form-select>
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>


<script>
import { API } from "../Servicios/axios";
export default {
      created(){
        this.token=localStorage.getItem('userToken')
        if(this.token==null||this.token==""){
        this.$router.push("/login")
        }
    },
  name: "Productos",
  data() {
    return {
      drawer: false,
      group: null,
      token:"",
      name: "",
      // eslint-disable-next-line
      nameState: null,
      // eslint-disable-next-line
      submittedNames: [],
      dataEmpleados: [],
      dataUsuario: [],
      // eslint-disable-next-line
      nombres: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
      password: "",
      rpassword: "",
      users_id: "",
      searchnombre:"",
      categoria: "",
      selected: null,
      category: null,
      options: [
        { value: null, text: "Seleccione el rango." },
        { value: "administrador", text: "Administrador" },
        { value: "empleado", text: "Empleado" },
    
      ],
      dataVendedores: [],
      selectedUser: [],
    };
  },
  methods: {
        logout(){
      localStorage.removeItem('userToken')
      this.$router.push("/login")
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-update");
      });
    },
    getEmpleados() {
      API.get("user", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataEmpleados = response.data;

        /* eslint-disable */
        //  console.log(this.dataEmpleados);
        // eslint-disable-next-line no-console
      });
    },
    Limpiar: function () {
      (this.nombres = ""),
        (this.apellidos = ""),
        (this.password = ""),
        (this.telefono = ""),
        (this.correo = "");
        
    },

    RegistrarEmpleado() {
      const data = {
        email:this.correo,
        password:this.password,
        tipo_usuario:this.selected,
        nombres:this.nombres,
        apellidos:this.apellidos,
        telefono:this.telefono
      };
      API.post("registro", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.Limpiar();
          this.getEmpleados();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },

    ActualizarEmpleado() {
      const data = {
        nombres: this.selectedUser.nombres,
        apellidos: this.selectedUser.apellidos,
        email: this.selectedUser.email,
        telefono: this.selectedUser.telefono,
        password: this.selectedUser.password,
        tipo_usuario: this.selected,
      };
      API.put("actualizar-usuario", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.selected = [];
          this.Limpiar();
          this.getEmpleados();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },

    getUser(Empleados) {
      API.get("user/" +Empleados.users_id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataUsuario = response.data;

        /* eslint-disable */
        console.log(this.dataUsuario);
        // eslint-disable-next-line no-console
      });
    },
    sendUser(item) {
      this.selectedUser = item;
      console.log(this.selectedUser)
    },


    deleteEmpleados(result) {
      API.delete("borrar-empleado/" + result.id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(this.result);
        window.alert("Los datos se han guardado");
        this.getEmpleados();
      });
    },

BuscarEmpleado() {
      const data = {
        nombres: this.searchnombre,
      };
      API.post("buscar-empleado", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
         this.dataEmpleados = res.data;
          //window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },

  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.BuscarEmpleado();
  
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
  width: 100%;
}
.font-drawer {
  color: black;
  margin-left: 10px;
  font-family: "Segoe UI";
  size: 10px;
}
</style>