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
            <button class="btn btn-light" type="submit">Iniciar Sesion <b-icon icon="lock-fill" aria-hidden="true"></b-icon></button>
          </router-link>
        </form>
      </div>
    </nav>
  </div>
</template>
<style  scoped>
.btn-green {
  color: #ffffff;
  background-color: #00b686 !important;
  border-color: #00b686 !important;
  padding: 8px;
}
</style>