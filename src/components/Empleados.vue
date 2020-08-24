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
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Empleados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-chart-ppf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Cotizacion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-briefcase-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Empresa</v-list-item-title>
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
      <span class="titulosecundario" style="color:black !important;">Empleados</span>
      <v-spacer></v-spacer>
      <br />
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span>
            <b-button squared variant="success">Buscar</b-button>
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <br />
      <div align="right">
        <b-button squared variant="success" v-b-modal.modal-prevent-closing>Añadir Empleado</b-button>
      </div>
      <br />
      <div class="mt-3">
        <b-card-group deck class="mb-3">
          <b-card text-variant="black" class="text-left">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-card text-variant="black" class="text-left">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
      </div>
    </v-container>
    <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Registrar Empleado"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        ok-variant="success"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" invalid-feedback="*Requerido">
            <b-form-input
              id="name-input"
              v-model="correo"
              :state="nameState"
              required
              placeholder="Correo"
              
            ></b-form-input>
            <br />
            <b-form-input
              id="name-input"
              v-model="contrasena"
              :state="nameState"
              required
              placeholder="Contraseña"
              type="password"
            ></b-form-input>
            <br />
            <b-form-input
              id="name-input"
              v-model="rcontrasena"
              :state="nameState"
              required
              placeholder="Repetir contraseña"
              type="password"
            ></b-form-input>
            <br />
            <b-form-input
              id="name-input"
              v-model="nombres"
              :state="nameState"
              required
              placeholder="Nombres"
            ></b-form-input>
            <br />
            <b-form-input
              id="name-input"
              v-model="apellidos"
              :state="nameState"
              required
              placeholder="Apellidos"
            ></b-form-input>
            <br />
            <b-form-input
              id="name-input"
              v-model="telefono"
              :state="nameState"
              required
              placeholder="telefono"
            ></b-form-input>
            <br />
            <div>
              <b-dropdown
                text="Block Level Dropdown Menu"
                block
                variant="success"
                class="m-2"
                menu-class="w-100"
              >
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>


<script>
export default {
  name: "Empleados",
  data() {
    return {
      drawer: false,
      group: null,
      // eslint-disable-next-line
      name: "",
      // eslint-disable-next-line
      nameState: null,
      // eslint-disable-next-line
      submittedNames: [],
      // eslint-disable-next-line
    };
  },
  methods: {
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
    },
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
  width: 100%;
}
.font-drawer {
  color: black;
  margin-left: 10px;
  font-family: "Segoe UI";
  size: 10px;
}
</style>