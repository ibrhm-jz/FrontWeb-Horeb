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
                ><b-icon icon="inboxes-fill"></b-icon>&nbsp;&nbsp;Inventario</a
              >
            </li>
          </router-link>
        </ul>
        <br />
        <br />
        <ul class="list-unstyled CTAs">
          <li>
            <a @click="logout" href="">
              <b-icon icon="door-open-fill"></b-icon>&nbsp;&nbsp;¿Salir?</a
            >
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <b-container fluid="xl">
          <h2>Editar Cotizacion</h2>
          <div class="line"></div>
          <v-card class="padd-card">
            <p>Introduce el folio a buscar :</p>
            <b-input-group class="mt-3">
              <b-form-input
                placeholder="Introduce tu numero de cotizacion"
                v-model="numero_cotizacion"
                v-on:keyup.enter="BuscarProductos"
              ></b-form-input>
              <b-input-group-append>
                <b-button squared variant="info" @click="BuscarVenta">
                  <b-icon icon="search"></b-icon
                ></b-button>
              </b-input-group-append>
            </b-input-group>
            <div class="row">
              <div class="col-sm-12">
                <div align="right">
                  <p>
                    <span class="titulosecundario" style="color: red !important"
                      ><b
                        >No.cotizacion:&nbsp;{{ this.numero_cotizacion }}</b
                      ></span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div v-if="boolEncontro">
            <!--  <p>{{"Vendedor : "+this.datosVendedor.nombres +" "+ this.datosVendedor.apellidos}}</p> -->
              <div class="row" style="margin-top: -30px; margin-bottom: -20px">
                <div class="col-sm-6">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      placeholder="Nombre"
                      class="text-mayus"
                      v-model="nombreEmpresa"
                    ></b-form-input>
                  </b-input-group>
                </div>
                <div class="col-sm-6">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon icon="cursor-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      placeholder="Direccion"
                      class="text-mayus"
                      v-model="EmpresaDireccion"
                    ></b-form-input>
                  </b-input-group>
                </div>
              </div>

              <div class="row" style="margin-top: -10px">
                <div class="col-sm-6">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon icon="telephone-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      placeholder="Telefono"
                      class="text-mayus"
                      v-model="EmpresaTelefono"
                    ></b-form-input>
                  </b-input-group>
                </div>
                <div class="col-sm-6">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon icon="flag-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      class="text-mayus"
                      placeholder="Ciudad"
                      v-model="EmpresaCiudad"
                    ></b-form-input>
                  </b-input-group>
                </div>
              </div>

              <v-simple-table>
                <thead>
                  <tr>
                    <th>Accion</th>
                    <th>Cantidad</th>
                    <th>Medida</th>
                    <th>Descripcion</th>
                    <th>Precio Unitario</th>
                    <th>Importe</th>
                  </tr>
                </thead>
                <tbody class="text-mayus">
                  <tr v-for="(invoice_product, k) in items" :key="k.id">
                    <td scope="row" class="trashIconContainer" width="10px">
                      <i
                        class="far fa-trash-alt"
                        @click="deleteRow(k, invoice_product)"
                      ></i>
                    </td>
                    <td>
                      <b-form-input
                        style="width: 50px"
                        placeholder="%"
                        required
                        v-model="invoice_product.cantidad"
                        @input="calcularImporte()"
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        style="width: 100px"
                        placeholder="%"
                        required
                        v-model="invoice_product.medida.toUpperCase()"
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        style="width: 450px; text-transform: uppercase"
                        required
                        class="text-mayus"
                        v-model="invoice_product.descripcion.toUpperCase()"
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        style="width: 110px"
                        required
                        v-model="invoice_product.precio_unitario"
                        @input="calcularImporte()"
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        style="width: 110px"
                        required
                        v-model="invoice_product.importe"
                      ></b-form-input>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>

              <hr />
              <b>
                <p>
                  <font size="4">
                    <span>Subtotal : {{ total }}</span>
                    <div>IVA 16% : {{ invoice_iva }}</div>
                    <div>Total : {{ invoice_total }}</div>
                    <span>Cantidad en Letras : {{ cantletra }}</span>
                  </font>
                </p>
              </b>

              <div id="example">
                <h6 v-if="boolcerrado">
                  <font color="red">*La venta se cerró y se guardo.</font>
                </h6>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div align="left">
                    <b-button
                      squared
                      variant="info"
                      v-b-modal.modal-prevent-closing
                      ><b-icon icon="plus"></b-icon>Añadir</b-button
                    >&nbsp; &nbsp;
                    <b-button
                      squared
                      variant="success"
                      v-b-modal.modal-porcentaje
                      ><b-icon icon="paperclip"></b-icon>Añadir un
                      porcentaje</b-button
                    >&nbsp;&nbsp;
                    <b-button
                      squared
                      variant="danger"
                      v-b-modal.modal-cerrar
                      v-if="boolGuardar"
                      ><b-icon icon="download"></b-icon>Actualizar
                      Cotizacion</b-button
                    >&nbsp;

                    <b-button squared variant="danger" @click="exportPDF()"
                      ><b-icon icon="download"></b-icon>Imprimir</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </b-container>
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
                  <b-button
                    squared
                    variant="success"
                    v-on:click="BuscarProductos"
                    >Buscar</b-button
                  >
                </span>
              </div>
              <input
                class="form-control my-0 py-1 text-mayus"
                type="text"
                placeholder="Search"
                aria-label="Search"
                v-model="searchnombre"
                v-on:keyup.enter="BuscarProductos"
              />
            </div>
            <br />

            <v-data-table
              :headers="headers"
              :items="datosProductos"
              class="text-mayus"
            >
              <template v-slot:item="row">
                <tr class="text-mayus">
                  <td>
                    <font size="1"
                      ><b>{{ row.item.nombre }}</b></font
                    >
                  </td>

                  <td>
                    <font size="1">{{ row.item.categoria }}</font>
                  </td>
                  <td>
                    <font size="1"
                      ><b>$ {{ row.item.precio_unitario }}</b></font
                    >
                  </td>
                  <td>
                    <font size="1">{{ row.item.medida }}</font>
                  </td>
                  <td>
                    <v-text-field
                      style="width: 50px"
                      v-model="newEntries[row.item.id]"
                      placeholder="Cant"
                      required
                    ></v-text-field>
                  </td>
                  <td>
                    <b-button
                      variant="success"
                      class="btn-circle.btn-xl"
                      @click="addNewRow(row.item, newEntries[row.item.id])"
                    >
                      <b-icon icon="cart2" aria-label="Añadir"></b-icon>
                    </b-button>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </b-modal>
        </div>
        <!-- Modales -->
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
            <!-- <v-text-field
              append-icon="mdi-truck"
              label="Gastos en flete"
              v-model="costo_flete"
            /> -->
          </b-modal>
        </div>

        <div>
                   <b-modal
            id="modal-cerrar"
            ref="modal"
            title="Datos adicionales"
            centered
            size="sm"
            @show="resetModal"
            @hidden="resetModal"
            @ok="GuardaCotizacion"
            ok-variant="success"
          >
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon icon="map"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Lugar de entrega"
                class="text-mayus"
                v-model="lugarEntrega"
              ></b-form-input>
            </b-input-group>

            <br />

            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon icon="clock-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Tiempo de entrega"
                class="text-mayus"
                v-model="nota"
              ></b-form-input>
            </b-input-group>
            <br />

            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon
                  icon="clock-history
"
                ></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Vigencia"
                class="text-mayus"
                v-model="vigencia"
              ></b-form-input>
            </b-input-group>
          </b-modal>
        </div>
      </div>
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
    this.miUsuario = localStorage.getItem("userId");
    if (this.token == null || this.token == "") {
      this.$router.push("/");
    } else {
      this.newPorcentaje = [];
      this.BuscarVenta();
      this.BuscarProductos();
    }
  },
  mounted() {
    this.items = [];
    this.getVendedor();
  },
  data() {
    return {
      boolcerrado: false,
      boolEncontro: false,
      numero_cotizacion: 0,
      group: null,
      miUsuario: "",
      nombreEmpresa: "",
      EmpresaDireccion: "",
      EmpresaTelefono: "",
      EmpresaCiudad: "",
      cant_letra: "",
      comprobacion: "",
      token: "",
      nota: "",
      vigencia:"",
       datosVendedor:"",
      lugarEntrega: "",
      name: "",
      boolGuardar: true,
      nameState: null,
      submittedNames: [],
      datosProductos: [],
      newEntries: [{}],
      newPorcentaje: [{}],
      newProducts: [{}],
      PorcentajeGanancia: "",
      costo_flete: "",
      invoice_subtotal: 0,
      invoice_total: 0,
      invoice_tax: 16,
      invoice_iva: 0,
      searchnombre: "",
      items: [
        {
          nombre: "",
          direccion: "",
          ciudad: "",
          medida: "",
          descripcion: "",
          producto_id: "",
          status: "",
          costo_flete: "",
          ganancia: "",
          cantidad: 0,
          importe: "",
          precio_unitario: "",
        },
      ],
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre",
        },

        { text: "Categoria", value: "categoria" },
        { text: "Precio Unitario", value: "precio_unitario" },
        { text: "UNIDAD DE MEDIDA", value: "medida" },
        { text: "Accion", value: "iron" },
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
        this.$set(this.items[i], "no_venta", this.numero_cotizacion);
        this.$set(this.items[i], "nombre", this.nombreEmpresa);
        this.$set(this.items[i], "direccion", this.EmpresaDireccion);
        this.$set(this.items[i], "ciudad", this.EmpresaCiudad);
        this.$set(this.items[i], "telefono", this.EmpresaTelefono);
        this.$set(this.items[i], "status", "No vendido");
        if (this.costo_flete == "") {
          this.$set(this.items[i], "costo_flete", "0");
        } else {
          this.$set(this.items[i], "costo_flete", this.costo_flete);
        }
        if (this.costo_flete == "") {
          this.$set(this.items[i], "ganancia", "0");
        } else {
          this.$set(this.items[i], "ganancia", this.PorcentajeGanancia);
        }

        this.$set(this.items[i], "user_id", this.miUsuario);
      }
      // eslint-disable-next-line
      console.log(this.items);
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk() {
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
        (this.nombreEmpresa == "!" ||
          this.EmpresaDireccion == "!" ||
          this.EmpresaTelefono == "!",
        this.EmpresaCiudad == "!")
      ) {
        window.alert("Los datos no estan completos");
      } else {
        var vm = this;
        var columns = [
          { title: "Cantidad", dataKey: "cantidad" },
          { title: "Unidad", dataKey: "medida" },
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

        doc.setTextColor(0, 0, 0);
        doc.text("FOLIO: " + vm.numero_cotizacion, 460, 55);
        doc.setTextColor(255, 0, 0);
        doc.text(
          "CLABE INTERBANCARIA: 0021-0070-1420-7691-60    SUCURSAL:7014   CUENTA BANAMEX:207616",
          40,
          70
        );
        doc.setTextColor(0, 0, 0);
        doc.setLineWidth(0.2);
        doc.line(40, 80, width - 40, 80);
        var img = new Image();
        img.src = LOGO;
        doc.addImage(img, "PNG", 40, 80, 450, 80);
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
        doc.text("NOMBRE: " + vm.nombreEmpresa.toUpperCase(), 40, 180);
        doc.text("DIRECCION " + vm.EmpresaDireccion.toUpperCase(), 40, 195);
        doc.text("TELEFONO : " + vm.EmpresaTelefono.toUpperCase(), 40, 210);
        doc.text("CIUDAD : " + vm.EmpresaCiudad.toUpperCase(), 40, 225);
        doc.autoTable(columns, vm.items, {
          margin: { top: 240 },
          styles: { fillColor: [113, 204, 180], halign: "left", fontSize: 9 },
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
            ["Subtotal:", "$" + this.format(vm.invoice_subtotal)],
            ["Iva 16%:", "$" + this.format(vm.invoice_iva)],
            ["Total:", "$" + this.format(vm.invoice_total)],
          ];

          doc.autoTable(columns_price, data_price, {
            showHead: "never",
            startY: 40,
            theme: "plain",
            margin: { top: 0, left: width / 2 + 100 },
            styles: {
              halign: "left",
              fontSize: 9,
            },
          });
          doc.setFontSize(9);
          doc.text(40, 55, "CANTIDAD EN LETRAS : ");
          doc.setFontSize(7);
          doc.setTextColor(255, 0, 0);
          doc.text(40, 70, vm.cant_letra.toUpperCase());
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(7);
          doc.text(40, 130, "CONDICIONES");
          doc.text(40, 140, "PRECIOS SUJETOS A CAMBIO SIN PREVIO AVISO");
          doc.text(40, 150, "FORMA DE PAGO: CONTADO ANTICIPADO");
          doc.text(40, 160, "TIEMPO DE ENTREGRA :" + vm.nota.toUpperCase());
          doc.text(
            40,
            140,
            "LUGAR DE ENTREGA: :" + vm.lugarEntrega.toUpperCase()
          );
          doc.text(
            40,
            150,
            "MANIOBRAS DE DESCARGA Y RIESGO A CUENTA DEL CLIENTE"
          );
          doc.text(
            40,
            160,
            "NO TRANSITAMOS EN LUGARES O CARRETERAS ACCIDENTADAS, UNICAMENTE LLEGAMOS HASTA DONDE LA UNIDAD TENGA ACCESO."
          );
          doc.text(
            40,
            170,
            "UNA VEZ ENTREGADO EL MATERIAL NO SE HACEN DEVOLUCIONES."
          );
          doc.save("Cotizacion_" + this.numero_cotizacion + ".pdf");
        } else {
          var textWidth =
            (doc.getStringUnitWidth(
              "SUBTOTAL : " + this.format(vm.invoice_subtotal)
            ) *
              doc.internal.getFontSize()) /
            doc.internal.scaleFactor;
          var columns_price = ["Conceptos", "Total"];
          var data_price = [
            ["Subtotal:", "$" + this.format(vm.invoice_subtotal)],
            ["Iva 16%:", "$" + this.format(vm.invoice_iva)],
            ["Total:", "$" + this.format(vm.invoice_total)],
          ];
          doc.autoTable(columns_price, data_price, {
            showHead: "never",
            startY: finalY,
            theme: "plain",
            margin: { top: 0, left: width / 2 + 110 },
            styles: {
              halign: "left",
              fontSize: 9,
            },
          });
          doc.setFontSize(9);
          doc.text(40, finalY + 55, "CANTIDAD EN LETRAS : ");
          doc.setFontSize(7);
          doc.setTextColor(255, 0, 0);
          doc.text(40, finalY + 70, vm.cant_letra.toUpperCase());
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(7);
          doc.text(40, finalY + 120, "CONDICIONES");
          doc.text(
            40,
            finalY + 130,
            "PRECIOS SUJETOS A CAMBIO SIN PREVIO AVISO"
          );
          doc.text(40, finalY + 140, "FORMA DE PAGO: CONTADO ANTICIPADO");
          doc.text(
            40,
            finalY + 150,
            "TIEMPO DE ENTREGRA :" + vm.nota.toUpperCase()
          );
          doc.text(
            40,
            finalY + 160,
            "LUGAR DE ENTREGA: :" + vm.lugarEntrega.toUpperCase()
          );
          doc.text(
            40,
            finalY + 170,
            "MANIOBRAS DE DESCARGA Y RIESGO A CUENTA DEL CLIENTE"
          );
          doc.text(
            40,
            finalY + 180,
            "NO TRANSITAMOS EN LUGARES O CARRETERAS ACCIDENTADAS, UNICAMENTE LLEGAMOS HASTA DONDE LA UNIDAD TENGA ACCESO."
          );
          doc.text(
            40,
            finalY + 190,
            "UNA VEZ ENTREGADO EL MATERIAL NO SE HACEN DEVOLUCIONES."
          );
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
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    RestaurarDatos() {
      this.itemsR = [];
      for (var i in this.items) {
        API.get("productos/" + this.items[i].producto_id, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }).then((response) => {
          this.itemsR.push({
            producto_id: response.data.id,
            nombre: "",
            direccion: "",
            ciudad: "",
            cantidad: parseInt(this.items[i].cantidad),
            medida: response.data.medida,
            descripcion: response.data.nombre,
            precio_unitario: response.data.precio_unitario,
            importe: 0,
            status: "",
            costo_flete: "",
            ganancia: "",
          });

          /* eslint-disable */
          console.log(response.data.nombre);
          // eslint-disable-next-line no-console
        });
      }
      this.items = [];
      this.items = this.itemsR;
      //this.calcularImporte();
    },

    calculateGanancia() {
      var x = 0;

      while (x <= this.items.length) {
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

            getVendedor() {
      API.get("user/"+this.miUsuario , {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        this.datosVendedor = response.data;

        /* eslint-disable */
        console.log("DATOSSSSSSSSSSSS"+this.datosVendedor);
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

    BuscarVenta() {
      const data = {
        no_venta: this.numero_cotizacion,
      };
      API.post("/buscar-venta", data, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          // eslint-disable-next-line
          console.log(res.data);

          this.items = res.data;
          this.nombreEmpresa = res.data[0].nombre;
          this.EmpresaDireccion = res.data[0].direccion;
          this.EmpresaCiudad = res.data[0].ciudad;
          this.EmpresaTelefono = res.data[0].telefono;
          if (this.numero_cotizacion == 0) {
            this.boolEncontro = false;
          } else {
            this.boolEncontro = true;
            this.calcularImporte();
          }
        })
        .catch((error) => {
          if (this.numero_cotizacion == 0) {
            this.boolEncontro = false;
          } else {
            this.boolEncontro = true;
            this.calcularImporte();
          }
        });
    },

    UpdatewithFrom() {
      API.delete("borrar-venta/" + this.numero_cotizacion, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(this.result);
        this.GuardaCotizacion();
        //  window.alert("Se elimino");

        this.getProduct();
      });
    },
    GuardaCotizacion() {
      this.LlenarDatos();
      var dataJSON = JSON.stringify(this.items);
      console.log("HOLAAAAA" + dataJSON);
      API.post("update", dataJSON, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => {
          this.boolGuardar = false;

          // eslint-disable-next-line
          console.log(res.data);

          // window.alert("Los datos se han guardado");
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          window.alert(error);
        });
    },
  },

  computed: {
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

