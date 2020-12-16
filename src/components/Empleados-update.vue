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
        <h2>Administracion de Empleados</h2>
        <div class="line"></div>
        <v-card elevation="2" tile class="padd-card">
          <b-input-group class="mt-3">
            <b-form-input placeholder="Buscar" v-model="searchnombre" v-on:keyup.enter="BuscarEmpleado"></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info"  @click="BuscarEmpleado">
                <b-icon icon="search"></b-icon
              ></b-button>
            </b-input-group-append>
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
                  <th class="text-left">Tipo de Usuario</th>
                  <th class="text-left">E-mail</th>
                  <th class="text-left">Telefono</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody class="text-mayus">
                <tr v-for="(Empleados,i) in dataEmpleados" :key="i">
                  <td><font size=1><b>{{ Empleados.nombres }}</b></font></td>
                  <td><font size=1><b>{{ Empleados.apellidos }}</b></font></td>
                  <td><font size=1>{{ Empleados.tipo_usuario }}</font></td>
                  <td><font size=1>{{ Empleados.email }}</font></td>
                  <td><font size=1>{{ Empleados.telefono }}</font></td>
                  <td>

                                 <div class="h2 mb-0"><b-icon icon="pencil-square" style="color: #fff;"
              class="rounded-circle bg-success p-2"  v-b-modal.modal-update @click="sendUser(Empleados)"></b-icon></div>
               
                <div class="h2 mb-0"><b-icon icon="trash-fill" style="color: #fff;"
              class="rounded-circle bg-danger p-2"   v-b-modal.modal-delete  @click="deleteEmpleados(Empleados)"></b-icon></div>

                   <!-- <b-button
                      squared
                      variant="info"
                      class="padd-button"
                      v-b-modal.modal-update
                      @click="sendUser(Empleados)"
                    >
                      <b-icon icon="pencil-square" style="color: #fff"></b-icon
                    ></b-button>

                    <b-button
                      squared
                      variant="danger"
                      class="padd-button"
                      @click="deleteEmpleados(Empleados)"
                    >
                      <b-icon icon="trash-fill"></b-icon
                    ></b-button>

                    -->
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
              class="text-mayus"
            ></b-form-input>
            <br />
            <b-form-input
              id="apellidos"
              v-model="apellidos"
              :state="nameState"
              required
              placeholder="Apellidos"
              class="text-mayus"
              type="text"
            ></b-form-input>
            <br />
          
            <b-form-input
              id="correo"
              v-model="correo"
              :state="nameState"
              required
              placeholder="CORREO"
             
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
               class="text-mayus"
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
    </div>
  </div>
</template>
<script>
import { API } from "../Servicios/axios";
export default {
  created() {
    this.token = localStorage.getItem("userToken");
    if (this.token == null || this.token == "") {
      this.$router.push("/");
    }
  },
  mounted() {
    this.BuscarEmpleado();
    this.getVendedores();
  },
  data() {
    return {
     drawer: false,
      group: null,
      token:"",
      name: "",
    checked: false,     
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
      this.$router.push("/")
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
     if(this.password!=this.rpassword){

      window.alert("Las contraseñas no coinciden");
     }else{
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
     }
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

