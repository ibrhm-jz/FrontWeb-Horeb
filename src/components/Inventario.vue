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
                              <router-link to="/inventario">
            <li>
              <a href="#"
                ><b-icon icon="inboxes-fill"></b-icon
                >&nbsp;&nbsp;Inventario</a
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
        <h2>Administracion de Inventario</h2>
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
                  <th class="text-left">Concepto</th>
                  <th class="text-left">Entradas</th>
                  <th class="text-left">Salidas</th>
                  <th class="text-left">Existencia</th>
                 
                </tr>
              </thead>
              <tbody class="text-mayus">
                <tr v-for="(Empleados,i) in dataEmpleados" :key="i">
                  <td><font size=1><b>{{ Empleados.concepto}}</b></font></td>
                  <td><font size=2><b>{{ Empleados.entradas }}</b></font></td>
                  <td><font size=2>{{ Empleados.salidas }}</font></td>
                  <td><font size=3><b>  <b-badge pill variant="primary">{{ Empleados.existencia}}</b-badge></b></font></td>
                  <td>

                                 <div class="h2 mb-0"><b-icon icon="pencil-square" style="color: #fff;"
              class="rounded-circle bg-success p-2"  v-b-modal.modal-update @click="sendUser(Empleados)"></b-icon>&nbsp;<b-icon icon="trash-fill" style="color: #fff;"
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
        title="Registrar Inventario"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="RegistrarEmpleado"
        ok-variant="success"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" invalid-feedback="*Requerido">
            <b-form-input
              id="concepto"
              v-model="concepto"
              :state="nameState"
              required
              placeholder="Concepto"
              class="text-mayus"
            ></b-form-input>
            <br />
            <b-form-input
              id="entradas"
              v-model="entradas"
              :state="nameState"
              required
              placeholder="Entradas"
              class="text-mayus"
              type="text"
            ></b-form-input>
            <br />
          
            <b-form-input
              id="salidas"
              v-model="salidas"
              :state="nameState"
              required
              placeholder="Salidas"
              class="text-mayus"
             
            ></b-form-input>
            <br />
              <b-form-input
              v-model="existencia"
              :state="nameState"
              required
              placeholder="Existencia"
              type="text"
              class="text-mayus"
            ></b-form-input>
            <br />
          </b-form-group>
        </form>
      </b-modal>
    </div>

    <div>
      <b-modal
        id="modal-update"
        ref="modal"
        title="Actualizar Inventario"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="ActualizarEmpleado"
        ok-variant="success"
      >
         <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" invalid-feedback="*Requerido">
            <b-form-input
              id="concepto"
              v-model="selectedUser.concepto"
              :state="nameState"
              required
              placeholder="concepto"
               class="text-mayus"
            ></b-form-input>
            <br />
            <b-form-input
              id="entradas"
              v-model="selectedUser.entradas"
              :state="nameState"
              required
              placeholder="entradas"
               class="text-mayus"
              type="text"
            ></b-form-input>
            <br />
              <b-form-input
              id="contraseña"
              v-model="selectedUser.salidas"
              :state="nameState"
              required
              placeholder="Contraseña"
              type="existencia"
            ></b-form-input>

            <br />
            <b-form-input
              id="salidas"
              v-model="selectedUser.existencia"
              :state="nameState"
              required
              placeholder="Telefono"
               class="text-mayus"
            ></b-form-input>
            <br />
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
      concepto: "",
      entradas: "",
      salidas: "",
      existencia: "",
     
      searchnombre:"",
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
      API.get("inventario", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataEmpleados = response.data;
      });
    },
    Limpiar: function () {
      (this.concepto = ""),
        (this.entradas = ""),
        (this.existencia = ""),
        (this.salidas = "");
        
    },

    RegistrarEmpleado() {
      if(this.concepto=="" || this.entradas=="" || this.existencia==""  || this.salidas==""){
        this.$swal({
          title: 'Atencion',
          text: 'Rellena los campos',
          icon: 'warning',
          confirmButtonText: 'Continuar'
        });
      }else{
                  const data = {
        salidas:this.salidas,
        existencia:this.existencia,
        concepto:this.concepto,
        entradas:this.entradas,
      };
      API.post("registro-inventario", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          this.Limpiar();
          this.getEmpleados();
          this.$swal({
              title: 'Informacion',
              text: 'Los datos se han guardado con éxito',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
        })
        .catch((error) => {
          this.$swal({
              title: 'Error',
              text: 'Lo sentimos, ocurrió un error ' + error,
              icon: 'error',
              confirmButtonText: 'Continuar'
            });
        });
     
      }

    },

    ActualizarEmpleado() {
 if(this.selectedUser.concepto=="" || this.selectedUser.entradas=="" || this.selectedUser.existencia==""  || this.selectedUser.salidas==""){
  this.$swal({
          title: 'Atencion',
          text: 'Rellena los campos',
          icon: 'warning',
          confirmButtonText: 'Continuar'
        });    
      }else{

      const data = {
        concepto: this.selectedUser.concepto,
        entradas: this.selectedUser.entradas,
        existencia: this.selectedUser.existencia,
        salidas: this.selectedUser.salidas,
      };
      API.put("actualizar-inventario/" + this.selectedUser.id, data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          this.selected = [];
          this.Limpiar();
          this.$swal({
              title: 'Informacion',
              text: 'Los datos se han guardado con éxito',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
        
        })
        .catch((error) => {
          this.$swal({
              title: 'Error',
              text: 'Lo sentimos, ocurrió un error ' + error,
              icon: 'error',
              confirmButtonText: 'Continuar'
            });
        });

    }
    },

    getUser(Empleados) {
      API.get("inventario/" +Empleados.users_id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.dataUsuario = response.data;
      });
    },
    sendUser(item) {
      this.selectedUser = item;
    },


    deleteEmpleados(result) {
      var con;
      con=confirm("¿Esta seguro de eliminar?");
    if(con==true){
        API.delete("borrar-inventario/" + result.id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.$swal({
              title: 'Informacion',
              text: 'Se elimino',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
        this.getEmpleados();
      });
    }else{
    
    }
    },

BuscarEmpleado() {
      const data = {
        concepto: this.searchnombre,
      };
      API.post("buscar-inventario", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
         this.dataEmpleados = res.data;
         this.$swal({
              title: 'Informacion',
              text: 'Los datos se han guardado con éxito',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
        })
        .catch((error) => {
          this.$swal({
              title: 'Error',
              text: 'Lo sentimos, ocurrió un error ' + error,
              icon: 'error',
              confirmButtonText: 'Continuar'
            });
        });
    },

  },
  computed:{
    BuscarEmpleado() {
      const data = {
        concepto: this.searchnombre,
      };
      API.post("buscar-inventario", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
         this.dataEmpleados = res.data;
         this.$swal({
              title: 'Informacion',
              text: 'Los datos se han guardado con éxito',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
        })
        .catch((error) => {
          this.$swal({
              title: 'Error',
              text: 'Lo sentimos, ocurrió un error ' + error,
              icon: 'error',
              confirmButtonText: 'Continuar'
            });
        });
    },

  }
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

