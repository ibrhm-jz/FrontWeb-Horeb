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
                ><b-icon icon="file-person-fill"></b-icon
                >&nbsp;&nbsp;Empleados</a
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
        <h2>Administracion de los Productos</h2>
        <div class="line"></div>
        <v-card elevation="2" tile class="padd-card">
          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Buscar"
              v-model="searchnombres"
              v-on:keyup.enter="BuscarProductos"
            ></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info" @click="BuscarProductos">
                <b-icon icon="search"></b-icon
              ></b-button>
              
            </b-input-group-append>
                                    <b-form-select
              v-model="category"
              :options="optionscategory"
              @change="FiltroProducto()"
               style="margin-left: 50px"
            ></b-form-select>
            <b-button squared variant="success" style="margin-left: 50px"  v-b-modal.modal-prevent-closing>
              <b-icon icon="plus"></b-icon>Nuevo Registro</b-button
            >

          </b-input-group>
          <br />
          <div>

            <div class="mt-3">
              Seleccionado:
              <strong>{{ category }}</strong>
            </div>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nombre</th>
                  <th class="text-left">Existencia</th>
                  <th class="text-left">Categoria</th>
                  <th class="text-left">Precio Unitario</th>
                  <th class="text-left">Tipo de Medida</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody class="text-mayus">
                <tr v-for="products in datosProductos" :key="products.id">
                  <td>{{ products.nombre }}</td>
                  <td>{{ products.cantidad_existencia }}</td>
                  <td>{{ products.categoria }}</td>
                  <td>
                    <font color="red"
                      >$ <b>{{ products.precio_unitario }}</b></font
                    >
                  </td>
                  <td>{{ products.medida }}</td>
                  <td>
                    <b-button
                      squared
                      variant="info"
                      class="padd-button"
                      v-b-modal.modal-actualizar-producto
                      @click="sendProduct(products)"
                    >
                      <b-icon icon="pencil-square" style="color: #fff"></b-icon
                    ></b-button>

                    <b-button
                      squared
                      variant="danger"
                      class="padd-button"
                      v-b-modal.modal-delete
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
            title="Registrar Producto"
            centered
            @show="resetModal"
            @hidden="resetModal"
            @ok="RegistrarProducto"
            ok-variant="success"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group :state="nameState" invalid-feedback="*Requerido">
                <b-form-input
                  id="name-input"
                  v-model="nombre"
                  :state="nameState"
                  required
                  placeholder="Nombre"
                ></b-form-input>
                <br />

                <b-form-input
                  id="name-input"
                  v-model="medida"
                  :state="nameState"
                  required
                  placeholder="Tipo de Medida"
                  type="text"
                ></b-form-input>
                <br />
                <b-form-input
                  id="name-input"
                  v-model="precio_unitario"
                  :state="nameState"
                  required
                  placeholder="$Precio unitario"
                ></b-form-input>
                <br />
                <b-form-input
                  id="name-input"
                  v-model="cantidad_existencia"
                  :state="nameState"
                  required
                  placeholder="Cantidad en Existencia"
                ></b-form-input>
                <br />
                <div>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                  <div class="mt-3">
                    Selected:
                    <strong>{{ selected }}</strong>
                  </div>
                </div>
              </b-form-group>
            </form>
          </b-modal>
        </div>

        <div>
          <b-modal
            id="modal-actualizar-producto"
            ref="modal"
            title="Actualizar Producto"
            centered
            @show="resetModal"
            @hidden="resetModal"
            @ok="ActualizarProducto"
            ok-variant="success"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group :state="nameState" invalid-feedback="*Requerido">
                <b-form-input
                  id="name-input"
                  v-model="selectedProduct.nombre"
                  :state="nameState"
                  required
                  placeholder="Nombre"
                ></b-form-input>
                <br />

                <b-form-input
                  id="name-input"
                  v-model="selectedProduct.medida"
                  :state="nameState"
                  required
                  placeholder="Tipo de Medida"
                  type="text"
                ></b-form-input>
                <br />

                <b-form-input
                  id="name-input"
                  v-model="selectedProduct.precio_unitario"
                  :state="nameState"
                  required
                  placeholder="$Precio unitario"
                ></b-form-input>
                <br />
                <b-form-input
                  id="name-input"
                  v-model="selectedProduct.cantidad_existencia"
                  :state="nameState"
                  required
                  placeholder="Cantidad en Existencia"
                ></b-form-input>
                <br />
                <div>
                  <b-form-select
                    v-model="selectedProduct.categoria"
                    :options="options"
                  ></b-form-select>
                  <div class="mt-3">
                    Selected:
                    <strong>{{ selected }}</strong>
                  </div>
                </div>
              </b-form-group>
            </form>
          </b-modal>
          <b-modal
            id="modal-delete"
            centered
            size="sm"
            ok-variant="danger"
            okTitle="SI"
            cancelTitle="NO"
            headerClass="p-2 border-bottom-0"
            footerClass="p-2 border-top-0"
          >
            <div align="center">
              <p class="my-4">¿Deseas continuar?</p>
            </div>
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
      this.$router.push("/login");
    }
  },
  mounted() {
    this.BuscarProductos();
  },
  data() {
    return {
      drawer: false,
      boxTwo: "",
      group: null,
      token: "",
      name: "",
      // eslint-disable-next-line
      nameState: null,
      // eslint-disable-next-line
      submittedNames: [],
      datosProductos: [],
      selectedProduct: [],
      nombre: "",
      searchnombre: "",
      tipo: "",
      medida: "",
      descripcion: "",
      precio_unitario: 0.0,
      cantidad_existencia: "",
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
        { value: "Tuberia", text: "Tuberia" },
        { value: "Mallas", text: "Mallas" },
        { value: "Valvulas", text: "Valvulas" },
      ],
    };
  },
  methods: {
              logout(){
      localStorage.removeItem('userToken')
      this.$router.push("/")
    },
    BuscarProductos() {
      const data = {
        nombre: this.searchnombre,
      };
      API.post("buscar-producto", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.datosProductos = res.data;
          //window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },

    FiltroProducto() {
      if (this.category == null) {
        this.BuscarProductos();
      } else {
        const data = {
          categoria: this.category,
        };
        API.post("producto-filtro-categoria", data, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
          .then((res) => {
            // eslint-disable-next-line
            console.log(res.data);
            this.datosProductos = res.data;
            //this.getProduct();
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
          });
      }
    },

    ActualizarProducto() {
      const data = {
        nombre: this.selectedProduct.nombre,
        medida: this.selectedProduct.medida,
        categoria: this.selectedProduct.categoria,
        precio_unitario: this.selectedProduct.precio_unitario,
        cantidad_existencia: this.selectedProduct.cantidad_existencia,
      };
      API.put("actualizar-producto/" + this.selectedProduct.id, data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          (this.selected = []), this.BuscarProductos();
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },
    delectProducto(result) {
      API.delete("borrar-producto/" + result.id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(this.result);
        window.alert("Se elimino");
        this.BuscarProductos();
      });
    },
    RegistrarProducto() {
      const data = {
        nombre: this.nombre,
        medida: this.medida,
        categoria: this.selected,
        precio_unitario: this.precio_unitario,
        cantidad_existencia: this.cantidad_existencia,
      };
      API.post("registro-producto", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.BuscarProductos();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },

    sendProduct(item) {
      this.selectedProduct = item;
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
  background: #fff;
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

