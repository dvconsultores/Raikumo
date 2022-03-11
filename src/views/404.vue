<template>
  <div class="notFound">
    <h1 class="letras">(404) Page NotFound</h1>
    <md-button id="botonIntro" href="/raikumo"
      ><span class="texto-boton">Go Back</span></md-button
    >
  </div>
</template>

<style scoped>
.notFound{overflow:hidden;background:center no-repeat fixed url("../assets/img/fondo2.png");-webkit-background:center no-repeat fixed url("../assets/img/fondo2.png");-moz-osx-background:center no-repeat fixed url("../assets/img/fondo2.png");background-size:cover;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;margin:auto;flex-direction:column;justify-content:center;align-items:center;height:100vh;overflow:hidden}.letras{background:linear-gradient(10deg,#000 10%,rgba(83,202,251,.5),#fff);background-size:cover;background-clip:text;-webkit-background-clip:text;color:transparent;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif !important;font-weight:800;text-align:center;padding:12px;z-index:1}#botonIntro{display:flex;justify-content:center;align-items:center;padding:30px;height:3.875rem;background:linear-gradient(10deg,#000 10%,rgba(83,202,251,.5),#fff);border-radius:30px}.texto-boton{color:#fff;font-weight:600;font-size:1.5vmax;text-transform:none !important}
</style>
