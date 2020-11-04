<template>
  <div width="100%">
    <div class="wrapper">
      <!-- Sidebar  -->
            <nav id="sidebar">
        <div class="sidebar-header">
          <div align="center">
            <img
              src="../assets/logo-nuevo.png"
              class="d-inline-block align-top"
              width="150px"
            />
          </div>
        </div>

        <ul class="list-unstyled components">
          <p>Administracion Horeb</p>
                   <router-link to="/Inicio">
          <li>
            <a href="#">
              <b-icon icon="house-door-fill"></b-icon>&nbsp;&nbsp;Inicio</a
            >
          </li>
          </router-link>
          <router-link to="/Clientes">
            <li>
              <a href="#"
                ><b-icon icon="person-lines-fill"></b-icon
                >&nbsp;&nbsp;Clientes</a
              >
            </li>
          </router-link>
           <router-link to="/Empleados">
          <li>
            <a href="#"
              ><b-icon icon="file-person-fill"></b-icon>&nbsp;&nbsp;Empleados</a
            >
          </li>
          </router-link>
          <router-link to="/Productos">
          <li>
            <a href="#"
              ><b-icon icon="cart-fill"></b-icon>&nbsp;&nbsp;Productos</a
            >
          </li>
          </router-link>
          <router-link to="/Cotizacion">
          <li>
            <a href="#"
              ><b-icon icon="file-earmark-check-fill"></b-icon
              >&nbsp;&nbsp;Cotizacion</a
            >
          </li>
          </router-link>
                    <router-link to="/editCotizacion">
            <li>
              <a href="#"
                ><b-icon icon="file-earmark-check-fill"></b-icon
                >&nbsp;&nbsp;Editar Cotizacion</a
              >
            </li>
          </router-link>
        </ul>
        <br />
        <br />
        <ul class="list-unstyled CTAs">
          <li>
            <a
             @click="logout"
              href=""
            >
              <b-icon icon="door-open-fill"></b-icon>&nbsp;&nbsp;¿Salir?</a
            >
          </li>
        </ul>
      </nav>


      <!-- Page Content  -->
      <div id="content">
        <h2>Administracion de Clientes</h2>
        <div class="line"></div>
        <v-card elevation="2" tile class="padd-card">
          <b-input-group class="mt-3">
            <b-form-input placeholder="Buscar" v-model="searchnombres" v-on:keyup.enter="BuscarClientes"></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info"  @click="BuscarClientes">
                <b-icon icon="search"></b-icon
              ></b-button>
            </b-input-group-append>
                                                            <b-form-select
              v-model="category"
              :options="optionscategory"
              @change="FiltroProducto()"
               style="margin-left: 50px"
            ></b-form-select>

            <b-button
              squared
              variant="success"
              style="margin-left: 50px"
              v-b-modal.modal-prevent-closing
            >
              <b-icon icon="plus"></b-icon>Nuevo Registro</b-button
            >
          </b-input-group>
          <br />

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nombres</th>
                  <th class="text-left">Apellidos</th>
                  <th class="text-left">Razon Social</th>
                  <th class="text-left">Direccion</th>
                  <th class="text-left">Telefono</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody class="text-mayus">
                <tr v-for="(clientes, i) in dataClientes" :key="i">
               
                  <td>{{ clientes.nombres }}</td>
                  <td>{{ clientes.apellidos }}</td>
                  <td>{{ clientes.empresa }}</td>
                  <td>{{ clientes.direccion }}</td>
                  <td>{{ clientes.telefono }}</td>
               
                  <td>
                    <b-button
                      squared
                      variant="info"
                      class="padd-button"
                      v-b-modal.modal-update
                      @click="sendUser(clientes)"
                    >
                      <b-icon icon="pencil-square" style="color: #fff"></b-icon
                    ></b-button>

                    <b-button
                      squared
                      variant="danger"
                      class="padd-button"
                      @click="deleteClientes(clientes)"
                    >
                      <b-icon icon="trash-fill"></b-icon
                    ></b-button>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

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
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="apellidos"
                  v-model="apellidos"
                  :state="nameState"
                  required
                  placeholder="Apellidos"
                  type="text"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="direccion"
                  v-model="direccion"
                  :state="nameState"
                  required
                  placeholder="Direccion"
                  type="text"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="correo"
                  v-model="correo"
                  :state="nameState"
                  required
                  placeholder="Correo"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="correo"
                  v-model="telefono"
                  :state="nameState"
                  required
                  placeholder="Telefono"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="empresa"
                  v-model="empresa"
                  :state="nameState"
                  required
                  placeholder="Razon Social"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <div>
                  <b-form-select
                    v-model="selected"
                    :options="dataVendedores"
                    value-field="id"
                    text-field="nombres"
                    class="text-mayus"
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
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group :state="nameState" invalid-feedback="*Requerido">
                <b-form-input
                  id="nombres"
                  v-model="selectedUser.nombres"
                  :state="nameState"
                  required
                  placeholder="Nombres"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="apellidos"
                  v-model="selectedUser.apellidos"
                  :state="nameState"
                  required
                  placeholder="Apellidos"
                  class="text-mayus"
                  type="text"
                ></b-form-input>
                <br />
                <b-form-input
                  id="direccion"
                  v-model="selectedUser.direccion"
                  :state="nameState"
                  required
                  placeholder="Direccion"
                  class="text-mayus"
                  type="text"
                ></b-form-input>
                <br />
                <b-form-input
                  id="correo"
                  v-model="selectedUser.correo"
                  :state="nameState"
                  required
                  placeholder="Correo"
                  class="text-mayus"
                ></b-form-input>
                <br />
                <b-form-input
                  id="correo"
                  v-model="selectedUser.telefono"
                  :state="nameState"
                  required
                  placeholder="Telefono"
                  class="text-mayus"
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
                    class="text-mayus"
                  ></b-form-select>
                </div>
              </b-form-group>
            </form>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { API } from "../Servicios/axios";
export default {
  created() {
    this.token = localStorage.getItem("userToken");
    this.miUsuario = localStorage.getItem("userId");
    if (this.token == null || this.token == "") {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.BuscarClientes();
    this.getVendedores();
  },
  data() {
    return {
      drawer: false,
      group: null,
      miUsuario:"",
      name: "",
      token: "",
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
        optionscategory: [
        { value: null, text: "Todo" },
        { value: "1", text: "Mis clientes" },
     
      
      ],
      dataVendedores: [],
      selectedUser: [],
    };
  },
  methods: {
            logout(){
      localStorage.removeItem('userToken')
      this.$router.push("/")
    },
        FiltroProducto() {
          console.log(this.miUsuario)
      if (this.category == null) {
        this.BuscarClientes();
      } else {
        const data = {
          user_id: this.miUsuario,
        };
        API.post("mis-clientes", data, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
          .then((res) => {
            // eslint-disable-next-line
            console.log(res.data);
            this.dataClientes = res.data;
            //this.getProduct();
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
          });
      }
    },
    Limpiar: function () {
      (this.nombres = ""),
        (this.apellidos = ""),
        (this.direccion = ""),
        (this.telefono = ""),
        (this.correo = ""),
        (this.empresa = "");
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
          this.BuscarClientes();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
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
        this.BuscarClientes();
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
      API.put("actualizar-cliente/" + this.selectedUser.id, data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.selected = [];
          this.Limpiar();
          this.BuscarClientes();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
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
  },
};
</script>
<style scoped>
/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #fff;
  color: grey;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #fff;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #fff;
}

#sidebar ul p {
  color: grey;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 0.9em;
  display: block;
}

#sidebar ul li a:hover {
  color: green;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: green;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: green;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  background:  #fff;
}
.padd-card {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.padd-button {
  margin-left: 2px;
  margin-right: 2px;
}
.text-mayus {
  text-transform: uppercase;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>

