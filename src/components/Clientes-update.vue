<template>
  <div>
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
          <p>Administracion</p>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Clientes</a>
          </li>
          <li>
            <a href="#">Empleados</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Cotizacion</a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/tutorial/files/sidebar.zip"
              class="download"
              >Cerrar Sesion</a
            >
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              class="article"
              >Back to article</a
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
            <b-form-input placeholder="Buscar"></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info">
                <b-icon icon="search"></b-icon
              ></b-button>
            </b-input-group-append>
            <b-button squared variant="success" style="margin-left: 50px">
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
              <tbody>
                <tr v-for="(clientes, i) in dataClientes" :key="i">
                  <td>{{ clientes.nombres }}</td>
                  <td>{{ clientes.apellidos }}</td>
                  <td>{{ clientes.empresa }}</td>
                  <td>{{ clientes.direccion }}</td>
                  <td>{{ clientes.telefono }}</td>
                  <td>
                    <b-button squared variant="warning" class="padd-button">
                      <b-icon icon="pencil-square" style=" color: #fff;"></b-icon></b-button>

                    <b-button squared variant="danger" class="padd-button">
                      <b-icon icon="trash-fill"></b-icon
                    ></b-button>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
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
    this.BuscarClientes();
  },
  data() {
    return {
      dataClientes: [],
      token: "",
      nombres: "",
      searchnombres: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
      empresa: "",
      users_id: "",
      categoria: "",
    };
  },
  methods: {
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

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
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
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
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
  background: #6d7fcc;
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
  color: #7386d5;
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

