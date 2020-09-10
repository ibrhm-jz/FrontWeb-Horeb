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
      <span class="titulosecundario" style="color:black !important;">Productos</span>
      <v-spacer></v-spacer>
      <br />
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span> 
                    <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              @click="BuscarProductos"
            >
              <v-icon left>mdi-magnify</v-icon>Buscar
            </v-btn>
            <!-- <b-button squared variant="success" @click="BuscarProductos">Buscar</b-button> -->
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Buscar" v-model="searchnombre" v-on:keyup.enter="BuscarProductos" />
      </div>
      <br />

      <div class="row">
        <div class="col-md-4">
          <div align="left">
                       <div>
              <b-form-select v-model="category" :options="optionscategory" @change="FiltroProducto()"></b-form-select>
             <div class="mt-3">
                Seleccionado:
                <strong>{{ category }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div align="right">
           <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              v-b-modal.modal-prevent-closing
            >
              <v-icon left>mdi-tag-plus</v-icon>Añadir Producto
            </v-btn>
            <!-- <b-button squared variant="success" v-b-modal.modal-prevent-closing>Añadir Producto</b-button> -->
          </div>
        </div>
      </div>

      <br />
      <div class="mt-1">
        <b-card-group class="mb-3" v-for="products in datosProductos" :key="products.id">
          <b-card text-variant="black" class="overflow-hidden" >
            <b-row no-gutters>
              <b-col md="2">
                <b-card-img
                  src="https://image.flaticon.com/icons/svg/3125/3125478.svg"
                  alt="Image"
                 class="border border-light rounded"
                ></b-card-img>
              </b-col>
              <b-col md="18">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <font color="black" size="4" style="text-transform: uppercase;">
                        <b>{{products.nombre}}</b>
                      </font>
                    </div>
                    {{products.tipo}}
                    {{products.categoria}}
                    <v-spacer></v-spacer>
                    ${{products.precio_unitario}}
                    <v-spacer></v-spacer>
                    MEDIDA : {{products.medida}}
                  </b-card-text>
                </b-card-body>
                <div align="left" style="margin-left:10px;">
                <v-btn icon color="red">
                        <v-icon
                          style="color: #71ccb4;"
                           v-b-modal.modal-actualizar-producto
                          @click="sendProduct(products)"
                        >mdi-pencil</v-icon>
                      </v-btn>
                  &nbsp;
                  <v-btn icon color="red">
                        <v-icon
                          style="color: red;"
                          @click="delectProduct(products)"
                        >mdi-delete</v-icon>
                      </v-btn>
               
                </div>
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
              placeholder="Medida"
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
              <b-form-select v-model="selected" :options="options"></b-form-select>
             <div class="mt-3">
                Selected:
                <strong>{{ selected }}</strong>
              </div>
            </div>
          </b-form-group>
        </form>
      </b-modal>


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
              placeholder="Medida"
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
              <b-form-select v-model="selectedProduct.categoria" :options="options"></b-form-select>
             <div class="mt-3">
                Selected:
                <strong>{{ selected }}</strong>
              </div>
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
        this.$router.push("/")
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
      datosProductos: [],
      selectedProduct:[],
      nombre: "",
      searchnombre: "",
      tipo: "",
      medida: "",
      descripcion: "",
      precio_unitario: 0.0,
      cantidad_existencia: "",
      categoria: "",
      selected: null,
      category:null,
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
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
     sendProduct(item) {
        this.selectedProduct = item;
    },
        logout(){
      localStorage.removeItem('userToken')
      this.$router.push("/")
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
          this.getProduct();
        })
        .catch((error) => {
            // eslint-disable-next-line
          console.error(error);
        });
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
        this.$bvModal.hide("modal-actualizar-producto");
      });
    },
    getProduct() {
      API.get("productos", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.datosProductos = response.data;

        /* eslint-disable */
        console.log(this.datosProductos);
        // eslint-disable-next-line no-console
      });
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
if(this.category==null){
  this.getProduct();
}else{
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
      API.put("actualizar-producto/"+this.selectedProduct.id, data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);
          this.selected=[],  
          this.getProduct(),
          window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },
     delectProduct(result) {
      API.delete('borrar-producto/' + result.id,
      {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then(response => {
          // eslint-disable-next-line
        console.log(this.result);
         window.alert("Se elimino");
        this.getProduct();
      });
    },
  },


  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.BuscarProductos();
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