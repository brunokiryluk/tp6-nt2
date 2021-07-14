<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-info">
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- opción ruta mockIo -->
          <li class="nav-item">
            <router-link to="/http">
              <a class="nav-link" href="/mockIo">MockIo</a>
            </router-link>
          </li>
          <!-- opción ruta forumlario -->
          <li class="nav-item">
            <router-link to="/form">
              <a class="nav-link" href="/formulario">Formulario</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-componentes-navbar {
}
</style>
