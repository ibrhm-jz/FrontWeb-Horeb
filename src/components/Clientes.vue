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
      <span class="titulosecundario" style="color:black !important;">Clientes</span>
      <v-spacer></v-spacer>
      <br />
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span>
            <!-- <b-button squared variant="success" @click="BuscarClientes" >Buscar</b-button> -->

            <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              @click="BuscarClientes"
            >
              <v-icon left>mdi-magnify</v-icon>Buscar
            </v-btn>
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Buscar" v-model="searchnombres" v-on:keyup.enter="BuscarClientes" />
      </div>
      <br />

      <div class="row">
        <div class="col-md-8">
        </div>
        <div class="col-md-4">
          <div align="right">
                      <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              v-b-modal.modal-prevent-closing
            >
              <v-icon left>mdi-account-plus</v-icon>Añadir Clientes
            </v-btn>
            <!-- <b-button squared variant="success" >Añadir Clientes</b-button> -->
          </div>
        </div>
      </div>
      <div>
        <v-container fluid>
        <font face ="Segoe UI">
          <v-row justify="center">
            <v-subheader>Lista de Clientes</v-subheader>

            <v-expansion-panels >
              <v-expansion-panel v-for="(clientes,i) in dataClientes" :key="i" hide-actions>
                <v-expansion-panel-header v-on:click="getUser(clientes)">
                  <v-row align="center" class="spacer" no-gutters>
                    <v-col cols="4" sm="2" md="1">
                      <v-avatar size="36px">
                        <v-icon>mdi-account-box-multiple</v-icon>
                      </v-avatar>
                    </v-col>

                    <v-col class="hidden-xs-only" sm="5" md="3">
                     <div align ="left">
                      <strong style="text-transform: uppercase;" >
                      
                      {{clientes.nombres}}&nbsp;{{clientes.apellidos}}</strong>
                     </div>
                    </v-col>

                    <v-col class="text-no-wrap" cols="6" sm="3">
                     <div align="left">
                      <v-chip
                        color="black"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                      >{{ clientes.empresa }}</v-chip>
                      </div>
                    </v-col>

                    <v-col class="grey--text text-truncate hidden-sm-and-down">
                    <div align="left">
                      TEL:
                      {{ clientes.telefono }}
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-divider></v-divider>
                  <v-card-text>
                    <div style="text-transform: uppercase;">Nombres: {{clientes.nombres}}&nbsp;{{clientes.apellidos}}</div>
                    <v-spacer></v-spacer>Razon Social:
                    <b>{{clientes.empresa}}</b>
                    <v-spacer></v-spacer>
                    Telefono: {{clientes.telefono}} &nbsp;&nbsp;&nbsp;&nbsp; Correo:{{clientes.correo}}
                    <v-spacer></v-spacer>
                    Direccion: {{clientes.direccion}}
                    <v-spacer></v-spacer>
                    Vendedor: {{dataUsuario.nombres}}&nbsp;{{dataUsuario.apellidos}}
                    <v-spacer></v-spacer>
                    <v-btn icon color="red">
                      <v-icon style="color: #71ccb4;" v-b-modal.modal-update @click="sendUser(clientes)">mdi-pencil</v-icon>
                    </v-btn>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <v-btn icon color="red" @click="deleteClientes(clientes)">
                      <v-icon style="color: #C64444;">mdi-delete</v-icon>
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
        title="Registrar Cliente"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="RegistrarCliente"
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
              id="direccion"
              v-model="direccion"
              :state="nameState"
              required
              placeholder="Direccion"
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
              id="correo"
              v-model="telefono"
              :state="nameState"
              required
              placeholder="Telefono"
            ></b-form-input>
            <br />
            <b-form-input
              id="empresa"
              v-model="empresa"
              :state="nameState"
              required
              placeholder="Razon Social"
            ></b-form-input>
            <br />
            <div>
              <b-form-select
                v-model="selected"
                :options="dataVendedores"
                value-field="id"
                text-field="nombres"
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
        @ok="ActualizarCliente"
        ok-variant="success"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit" >
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
              id="direccion"
              v-model="selectedUser.direccion"
              :state="nameState"
              required
              placeholder="Direccion"
              type="text"
            ></b-form-input>
            <br />
            <b-form-input
              id="correo"
              v-model="selectedUser.correo"
              :state="nameState"
              required
              placeholder="Correo"
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
            <b-form-input
              id="empresa"
              v-model="selectedUser.empresa"
              :state="nameState"
              required
              placeholder="Razon Social"
            ></b-form-input>
            <br />
            <div>
              <b-form-select
                v-model="selected"
                :options="dataVendedores"
                value-field="id"
                text-field="nombres"
              ></b-form-select>
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>


<script>
import { API} from "../Servicios/axios";
export default {
        created(){
        this.token=localStorage.getItem('userToken')
        if(this.token==null||this.token==""){
        this.$router.push("/  ")
        }
    },
  name: "Productos",
  data() {
    return {
      drawer: false,
      group: null,
      // eslint-disable-next-line
      name: "",
      token:"",  
      nameState: null,
      submittedNames: [],
      dataClientes: [],
      dataUsuario: [],
      // eslint-disable-next-line
      nombres: "",
      searchnombres: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
      empresa: "",
      users_id: "",
      categoria: "",
      selected: null,
      category: null,
      options: [
        { value: null, text: "Seleccione la categoria" },
        { value: "Tuberia", text: "Tuberia" },
        { value: "Mallas", text: "Mallas" },
        { value: "Valvulas", text: "Valvulas" },
      ],
      dataVendedores: [],
      selectedUser:[],
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
    getClientes() {
      API.get("cliente", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataClientes = response.data;

        /* eslint-disable */
      console.log(this.dataClientes);
        // eslint-disable-next-line no-console
      });
    },
    Limpiar:function() {
          this.nombres="",
          this.apellidos="",
          this.direccion="",
          this.telefono="",
          this.correo="",
          this.empresa=""
    },

    RegistrarCliente() {
      const data = {
        nombres: this.nombres,
        apellidos: this.apellidos,
        direccion: this.direccion,
        telefono: this.telefono,
        correo: this.correo,
        empresa: this.empresa,
        users_id: this.selected,
      };
      API.post("registro-cliente", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.Limpiar();        
          this.getClientes();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },
    BuscarClientes() {
      const data = {
        nombres: this.searchnombres,
      };
      API.post("buscar-cliente", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.dataClientes = res.data;    
          //window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },


    
    ActualizarCliente() {
      const data = {
        nombres: this.selectedUser.nombres,
        apellidos: this.selectedUser.apellidos,
        direccion: this.selectedUser.direccion,
        telefono: this.selectedUser.telefono,
        correo: this.selectedUser.correo,
        empresa: this.selectedUser.empresa,
        users_id: this.selected,
      };
      API.put("actualizar-cliente/"+this.selectedUser.id, data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.selected=[];
          this.Limpiar();        
          this.getClientes();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },

    getUser(clientes) {
      API.get("user/" + clientes.users_id, {
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
    },

    getVendedores() {
      API.get("user", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataVendedores = response.data;

        /* eslint-disable */
        //console.log(response.data);
        // eslint-disable-next-line no-console
      });
    },
    deleteClientes(result) {
      API.delete("borrar-cliente/" + result.id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(this.result);
        window.alert("Los datos se han guardado");
        this.getClientes();
      });
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.BuscarClientes();
    this.getVendedores();
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