<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-nuevo.png" alt width="160" height="55" />
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link link to="/login">
            <button class="btn btn-light" type="submit">
              Iniciar Sesion
              <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
            </button>
          </router-link>
        </form>
      </div>
    </nav>
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
              title="Card Title"
              :img-src="url1"
              img-alt="Image"
              img-height="200"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Card Title"
              :img-src="url2"
              img-alt="Image"
                            img-height="200"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
            
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-height="200"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
      </div>
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
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
</style>