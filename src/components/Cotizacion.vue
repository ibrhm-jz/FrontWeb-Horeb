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
            <v-list-item-title class="font-drawer">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Clientes">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Empleados">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Empleados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Productos">
          <v-list-item-icon>
            <v-icon>mdi-chart-ppf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Cotizacion">
          <v-list-item-icon>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-drawer">Cotizacion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Empresa">
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
          <b-button size="sm" @click="hide" v-on:click="logout">Cerar sesion</b-button>
        </div>
      </template>
    </b-sidebar>

    <v-container class="contenedor">
      <div ref="content">
        <div class="row">
          <div class="col-sm-6">
            <span class="titulosecundario" style="color:black !important;">Cotizacion</span>
          </div>
          <div class="col-sm-6">
            <span
              class="titulosecundario"
              style="color:red !important;"
            >No.cotizacion:&nbsp;{{this.numero_cotizacion}}</span>
          </div>
        </div>
        <v-spacer></v-spacer>

        <div class="row">
          <div class="col-sm-6">
            <v-text-field append-icon="mdi-bag-checked" label="Nombre" v-model="nombreEmpresa"></v-text-field>
          </div>
          <div class="col-sm-6">
            <v-text-field
              :rules="rules"
              append-icon="mdi-map-legend"
              label="Direccion"
              v-model="EmpresaDireccion"
            ></v-text-field>
          </div>
        </div>

        <div class="row" style="margin-top:-30px; margin-bottom:-20px;">
          <div class="col-sm-6">
            <v-text-field append-icon="mdi-phone" label="Telefono" v-model="EmpresaTelefono"></v-text-field>
          </div>
          <div class="col-sm-6">
            <v-text-field append-icon="mdi-city" label="Ciudad" v-model="EmpresaCiudad"></v-text-field>
          </div>
        </div>

        <table class="table">
          <tr>
            <th>Accion</th>
            <th>Cantidad</th>
            <th>Medida</th>
            <th>Descripcion</th>
            <th>Precio Unitario</th>
            <th>Porcentaje</th>
            <th>Importe</th>
          </tr>
          <tr v-for="(invoice_product, k) in items" :key="k.id">
            <td scope="row" class="trashIconContainer">
              <i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>
            </td>
            <td v-text="invoice_product.cantidad"></td>
            <td v-text="invoice_product.medida"></td>
            <td v-text="invoice_product.descripcion"></td>
            <td v-text="invoice_product.precio_unitario"></td>
            <td>
              <v-text-field style="width:50px;" append-icon="mdi-" placeholder="$" required></v-text-field>
            </td>
            <td v-text="invoice_product.importe"></td>
          </tr>
        </table>

        <hr />
        <b>
          <font size="4" face="Segoe UI">
            <span>Subtotal : {{total}}</span>
            <div>IVA 16% : {{invoice_iva}}</div>
            <div>Total : {{invoice_total}}</div>
            <span>Cantidad en Letras : {{cantletra}}</span>
          </font>
        </b>
      </div>
      <div id="example">
        <h6 v-if="boolcerrado">
          <font color="red">*La venta ya se cerró y se guardo.</font>
        </h6>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div align="left">
            <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              v-on:click="BuscarProductos"
              v-b-modal.modal-prevent-closing
            >
              <v-icon left>mdi-plus</v-icon>Añadir
            </v-btn>&nbsp;
            <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              v-b-modal.modal-porcentaje
            >
              <v-icon left>mdi-cash-multiple</v-icon>cerrar cotizacion
            </v-btn>&nbsp;
            <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              @click="exportPDF"
              v-b-modal.modal-cotizacion
            >
              <v-icon left>mdi-send</v-icon>imprimir
            </v-btn>&nbsp;
            <v-btn
              class="ma-2"
              tile
              style="background-color:#00b686; color:white;"
              @click="LlenarDatos"
            >
              <v-icon left>mdi-send</v-icon>xd
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>

    <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Elije Producto"
        centered
        size="lg"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        ok-variant="success"
      >
        <div class="input-group md-form form-sm form-1 pl-0">
          <div class="input-group-prepend">
            <span>
              <b-button squared variant="success" v-on:click="BuscarProductos">Buscar</b-button>
            </span>
          </div>
          <input
            class="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
            v-model="searchnombre"
            v-on:keyup.enter="BuscarProductos"
          />
        </div>
        <br />

        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Tipo</th>
                <th class="text-left">Medida</th>
                <th class="text-left">Precio unitario</th>
                <th class="text-left">Existencia</th>
                <th class="text-left">Cantidad</th>
                <th class="text-left">Accion</th>
              </tr>
            </thead>
            <tbody>
              <!-- newEntries: {{ newEntries }} -->
              <tr v-for="products in datosProductos" :key="products.id">
                <td>{{products.nombre}}</td>
                <td>{{products.tipo}}</td>
                <td>{{products.medida}}</td>
                <td>${{products.precio_unitario}}</td>
                <td>{{products.cantidad_existencia}}</td>
                <td>
                  <v-text-field
                    style="width:50px;"
                    v-model="newEntries[products.id]"
                    placeholder="Cant"
                    required
                  ></v-text-field>
                </td>

                <td>
                  <b-button
                    variant="success"
                    class="btn-circle.btn-xl"
                    @click="addNewRow(products,newEntries[products.id])"
                  >
                    <b-icon icon="cart2" aria-label="Añadir"></b-icon>
                  </b-button>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </b-modal>
    </div>

    <div>
      <b-modal
        id="modal-porcentaje"
        ref="modal"
        title="Datos adicionales"
        centered
        size="sm"
        @show="resetModal"
        @hidden="resetModal"
        @ok="calculateGanancia"
        ok-variant="success"
      >
        <v-text-field
          append-icon="mdi-currency-usd"
          label="Porcentaje de Ganancia"
          v-model="PorcentajeGanancia"
        />
        <br />
        <v-text-field append-icon="mdi-truck" label="Gastos en flete" v-model="costo_flete" />
        <br />
        <v-text-field append-icon="mdi-map" label="Lugar de Entrega" />

        <br />
        <v-text-field append-icon="mdi-note-plus" label="Agregar nota" />
      </b-modal>
    </div>
  </div>
</template>


<script>
import { API } from "../Servicios/axios";
import "jspdf-autotable";
import { LOGO, PIE } from "../base64/images";
import jsPDF from "jspdf";
export default {
  created() {
    this.token = localStorage.getItem("userToken");
    if (this.token == null || this.token == "") {
      this.$router.push("/");
    } else {
      this.getCotizacion();
    }
  },
  name: "Cotizacion",
  data() {
    return {
      drawer: false,
      boolcerrado: false,
      numero_cotizacion: "2",
      group: null,
      nombreEmpresa: "",
      EmpresaDireccion: "",
      EmpresaTelefono: "",
      EmpresaCiudad: "",
      cant_letra: "",
      comprobacion: "",
      token: "",
      name: "",
      // eslint-disable-next-line
      nameState: null,
      // eslint-disable-next-line
      submittedNames: [],
      datosProductos: [],
      newEntries: [{}],
      newPorcentaje: [{}],
      PorcentajeGanancia: "",
      costo_flete: "",
      invoice_subtotal: 0,
      invoice_total: 0,
      invoice_tax: 16,
      invoice_iva: 0,
      searchnombre: "",
      items: [
        {
          producto_id: "",
          nombre: "",
          direccion: "",
          ciudad: "",
          medida: "",
          descripcion: "",
          precio_unitario: "",
          cantidad: "",
          importe: "",
          status: "",
          costo_flete: "",
          ganancia: "",
        },
      ],
      category: null,
      optionscategory: [
        { value: null, text: "Seleccione la categoria" },
        { value: "Tuberia", text: "Tuberia" },
        { value: "Mallas", text: "Mallas" },
        { value: "Valvulas", text: "Valvulas" },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("userToken");
      this.$router.push("/");
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },

    addNewRow(list, cant) {
      this.items.push({
        producto_id: list.id,
        nombre: "",
        direccion: "",
        ciudad: "",
        cantidad: cant,
        medida: list.medida,
        descripcion: list.nombre,
        precio_unitario: list.precio_unitario,
        importe: 0,
        status: "",
        costo_flete: "",
        ganancia: "",
      });

      this.comprobacion = "comprobado";
      this.newEntries = [];
      this.$root.$emit("bv::hide::modal", "modal-prevent-closing", "#btnShow");
      this.calcularImporte();
      // eslint-disable-next-line
      console.log(this.items);
    },
    calcularImporte() {
      var x = 0;
      while (x <= this.items.length) {
        this.items[x].importe = (
          parseFloat(this.items[x].cantidad) *
          parseFloat(this.items[x].precio_unitario)
        ).toFixed(2);
        x++;
      }
    },

    LlenarDatos() {
      for (var i in this.items) {
        this.$set(this.items[i], "nombre", this.nombreEmpresa);
        this.$set(this.items[i], "direccion", this.EmpresaDireccion);
        this.$set(this.items[i], "ciudad", this.EmpresaCiudad);
        this.$set(this.items[i], "status", "No vendido");
        this.$set(this.items[i], "costo_flete", this.costo_flete);
        this.$set(this.items[i], "ganancia", this.PorcentajeGanancia);
      }
      // eslint-disable-next-line
      console.log(this.items);
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk() {
      // Prevent modal from closing
      //bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    deleteRow(index, invoice_product) {
      var idx = this.items.indexOf(invoice_product);
      /* eslint-disable */
      console.log(idx, index);
      if (idx > -1) {
        this.items.splice(idx, 1);
        this.invoice_total = "0.00";
        this.invoice_iva = "0.00";
      }
    },

    exportPDF() {
      if (
        (this.nombreEmpresa == "" ||
          this.EmpresaDireccion == "" ||
          this.EmpresaTelefono == "",
        this.EmpresaCiudad == "" || this.comprobacion == "")
      ) {
        window.alert("Los datos no estan completos");
      } else {
        var vm = this;

        var columns = [
          { title: "Cantidad", dataKey: "cantidad" },
          { title: "Medidad", dataKey: "medida" },
          { title: "Descripcion", dataKey: "descripcion" },
          { title: "Precio Unitario", dataKey: "precio_unitario" },
          { title: "Importe", dataKey: "importe" },
        ];
        var doc = new jsPDF("p", "pt");
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.setFontSize(16);
        doc.setTextColor(0, 182, 134);
        doc.text("Suministros en Tuberia Horeb S.A de C.V ", 40, 40);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.text("RFC: STH1607128M9", 40, 55);
        doc.setTextColor(255, 0, 0);
        doc.text(
          "CLABE INTERBANCARIA: 0021-0070-1420-7691-60    SUCURSAL:7014   CUENTA BANAMEX:207616",
          40,
          70
        );
        doc.setLineWidth(0.2);
        doc.line(40, 80, width - 40, 80);
        var img = new Image();
        img.src = LOGO;

        doc.addImage(img, "PNG", 40, 80, 450, 80);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text("NOMBRE: " + vm.nombreEmpresa.toUpperCase(), 40, 180);
        // doc.setLineWidth(0.2);
        // doc.line(40, 184, width-80, 184);
        doc.setFontSize(10);
        doc.text("DIRECCION " + vm.EmpresaDireccion.toUpperCase(), 40, 195);
        doc.text("TELEFONO : " + vm.EmpresaTelefono.toUpperCase(), 40, 210);
        doc.text("CIUDAD : " + vm.EmpresaCiudad.toUpperCase(), 40, 225);
        // doc.setFontType("bold");
        //  doc.line(20, 20, 60, 20); // horizontal line
        // var imgData = 'data:image/png;base64,'+ Base64.encode('../assets/logo.png');

        doc.autoTable(columns, vm.items, {
          margin: { top: 240 },
          styles: { fillColor: [113, 204, 180],halign: "left", },
          didDrawPage: function (data) {
            // Reseting top margin. The change will be reflected only after print the first page.
            data.settings.margin.top = 40;
          },
        });
        let finalY = doc.lastAutoTable.finalY;
        // The y position on the page
        if (finalY + 100 > height - 45) {
          doc.addPage();
          var textWidth =
            (doc.getStringUnitWidth("SUBTOTAL : " + vm.invoice_subtotal) *
              doc.internal.getFontSize()) /
            doc.internal.scaleFactor;
          var columns_price = ["Conceptos", "Total"];
          var data_price = [
            ["SUBTOTAL", vm.invoice_subtotal],
            ["IVA 16%", vm.invoice_iva],
            ["TOTAL", vm.invoice_total],
          ];
          doc.autoTable(columns_price, data_price, {
            showHead: "never",
            startY: 40,
             theme: 'plain',
            margin: { top: 0, left: width / 2 + 70 },
            styles: {
              halign: "left",
            },
          });
          doc.text(40, 55, "CANTIDAD EN LETRAS : ");
          doc.setFontSize(8);
          doc.text(40, 70, vm.cant_letra.toUpperCase());
          var imgpie = new Image();
          imgpie.src = PIE;
          doc.addImage(imgpie, "PNG", 40,  100, width - 80, 110, {
            margin: { bottom: 40 },
          });
          doc.save("Cotizacion_" + this.numero_cotizacion + ".pdf");


        } else {
          var textWidth =
            (doc.getStringUnitWidth("SUBTOTAL : " + this.format(vm.invoice_subtotal)) *
              doc.internal.getFontSize()) /
            doc.internal.scaleFactor;
          var columns_price = ["Conceptos", "Total"];
          var data_price = [
            ["SUBTOTAL", this.format(vm.invoice_subtotal)],
            ["IVA 16%", this.format(vm.invoice_iva)],
            ["TOTAL", this.format(vm.invoice_total)],
          ];
          doc.autoTable(columns_price, data_price, {
            showHead: "never",
            startY: finalY,
             theme: 'plain',
            margin: { top: 0, left: width / 2 + 70 },
            styles: {
              halign: "left",
            },
          });
          //
          // doc.text((width/2)+40+textWidth, finalY + 20, "SUBTOTAL : " + vm.invoice_subtotal);
          // doc.text((width/2)+40+textWidth, finalY + 35, "IVA 16% :  " + vm.invoice_iva);
          // doc.text((width/2)+40+textWidth, finalY + 50, "TOTAL :    " + vm.invoice_total);
          doc.text(40, finalY + 35, "CANTIDAD EN LETRAS : ");
          doc.setFontSize(8);
          doc.text(40, finalY + 50, vm.cant_letra.toUpperCase());
          var imgpie = new Image();
          imgpie.src = PIE;
          doc.addImage(imgpie, "PNG", 40, finalY + 100, width - 80, 110, {
            margin: { bottom: 40 },
          });
          doc.save("Cotizacion_" + this.numero_cotizacion + ".pdf");
        }
      }
    },
    CentrarTexto(text, doc) {
      var textWidth =
        (doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
      return textOffset;
    },
format(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
},

    calculateGanancia() {
      var x = 0;
      this.boolcerrado = true;
      while (x <= this.items.length) {
        //this.items[x].precio_u=parseFloat(this.items[x].precio_u)+1;
        this.items[x].precio_unitario = (
          parseFloat(this.items[x].precio_unitario) *
            (this.PorcentajeGanancia / 100) +
          parseFloat(this.items[x].precio_unitario)
        ).toFixed(2);

        this.items[x].importe = (
          parseFloat(this.items[x].cantidad) *
          parseFloat(this.items[x].precio_unitario)
        ).toFixed(2);
        x++;
      }
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
    getCotizacion() {
      API.get("no-cotizacion", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.numero_cotizacion = response.data;

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
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  mounted() {
    this.items = [];
    this.BuscarProducto();
    //console.log("Numeor"+convertir.NumerosALetras(58225))
  },
  computed: {
    cantletra() {
      var cantidad;
      cantidad = convertir.NumerosALetras(this.invoice_total);
      this.cant_letra = cantidad;
      return cantidad;
    },
    total() {
      var subtotal;
      return this.items.reduce((total, item) => {
        1;
        subtotal = total + item.cantidad * item.precio_unitario;
        this.invoice_subtotal = subtotal.toFixed(2);
        this.invoice_iva = (subtotal * (this.invoice_tax / 100)).toFixed(2);
        this.invoice_total = (
          subtotal * (this.invoice_tax / 100) +
          subtotal
        ).toFixed(2);
        return subtotal;
      }, 0);
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
  width: 65%;
}
.font-drawer {
  color: black;
  margin-left: 10px;
  font-family: "Segoe UI";
  size: 10px;
}
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}
</style>