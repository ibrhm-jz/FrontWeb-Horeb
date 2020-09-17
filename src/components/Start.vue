<template>
  <div>

  <div>
  <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
    <b-navbar-brand href="#"><img src="../assets/logo-nuevo.png" alt width="160" height="55" /></b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" color=blue><font color="black">Home</font></b-nav-item>
       <b-nav-item href="#" color=blue ><font color="black">Productos</font></b-nav-item>
       <b-nav-item href="#" color=blue><font color="black">Servicios</font></b-nav-item>
       <b-nav-item href="#" color=blue><font color="black">Nosotros</font></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


      
          <router-link link to="/login">
            <button class="btn btn-light" type="submit" right>
              Iniciar Sesion
              <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
            </button>
          </router-link>
       
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>


    <div>
      <v-carousel :show-arrows="false" cycle="true">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-spacer></v-spacer>
    <br />

    <div class="contenedor" >
      <div align="center" class="row">
        <div class="col-sm-4">
          <div>
            <b-card
              title="Alcantarillado"
              :img-src="url1"
              img-alt="Image"
              img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green">Conocer mas</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Pasto sintetico"
              :img-src="url2"
              img-alt="Image"
                            img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
            
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green">Conocer mas</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Valvulas"
             :img-src="url3"
              img-alt="Image"
              
              img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green">Conocer mas</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <br>
        <div class="contenedor" >
      <div align="center" class="row">
        <div class="col-sm-4">
          <div>
            <b-card
              title="Geomembrana"
              :img-src="url4"
              img-alt="Image"
              img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green" >Conocer mas</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Tuberia potable"
              :img-src="url5"
              img-alt="Image"
                            img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
            
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green">Conocer mas</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Plantas de tratamiento"
             :img-src="url6"
              img-alt="Image"
              
              img-height="300"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" class="btn-green">Conocer mas</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="contenedor-play">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/tapas.jpg"),
        },
        {
          src: require("../assets/enmallado.jpg"),
        },
        {
          src: require("../assets/tinaco.jpg"),
        },
        {
          src: require("../assets/pasto.jpg"),
        },
      ],
      img: [
        {
          src: require("../assets/1-p.png"),
        },
      ],
      url1: require("../assets/1-p.png"),
      url2: require("../assets/pasto.jpg"),
      url3: require("../assets/2-p.png"),
      url4: require("../assets/3-p.png"),
      url5: require("../assets/4-p.png"),
      url6: require("../assets/5-p.jpg"),
    };
  },
};
</script>>


<style  scoped>
.btn-green {
  color: #ffffff;
  background-color: #00b686 !important;
  border-color: #00b686 !important;
  padding: 8px;
}
.contenedor {
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
.contenedor-play{

}
</style>