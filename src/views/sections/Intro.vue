<template>
  <parallax class="section contenedor-portada">
    <aside id="left">
      <div
        class="md-size-50 md-small-size-70 md-xsmall-size-100 textoIntro imgMobile"
        :style="Image"
      >
        <h1 class="title blanco">
          Discover, Collect, <br />and Read Amazing Headline
        </h1>
        <h4>
          lorem parsem ipdum indum mindum quimsun bindum dasdun
        </h4>
        <br />
        <div class="botoncito">
          <md-button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="md-info md-lg"
            target="_blank"
            ><span class="texto-boton">subscribe</span>
          </md-button>
        </div>
      </div>
    </aside>

    <aside id="right">
      <div class="decoracionImg">
        <div class="img" :style="Image" />
      </div>
    </aside>

    <aside id="bottom">
      <div id="bloqueIzquierda">
        <p class="bloques">123k</p>
        <span class="bloques">value</span>
      </div>

      <div id="bloqueCentro">
        <p class="bloques">123k</p>
        <span class="bloques">value</span>
      </div>

      <div id="bloqueDerecha">
        <p class="bloques">123k</p>
        <span class="bloques">value</span>
      </div>
    </aside>
  </parallax>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: require("@/assets/img/Img.png")
    }
  },
  computed: {
    Image() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.blanco {
  color: white !important;
}
.texto-boton {
  color: black !important;
  font-weight: 600;
  font-size: 1.5vmax;
}
.botoncito {
  visibility: visible;
}
.textoIntro h1 {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-size: 5vmax;
  font-weight: 900;
  visibility: visible;
}
.textoIntro h4 {
  font-size: 1.5vmax;
  visibility: visible;
}
.imgMobile {
  background: center no-repeat;
  background-size: cover;
  width: auto;
  height: auto;
  border-radius: 1em;
  z-index: 2;
  visibility: hidden;
}
.img {
  background: center no-repeat;
  background-size: cover;
  width: 98%;
  height: 98%;
  z-index: 2;
}
.decoracionImg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 27vmax;
  border: rgb(110, 110, 17) 1px solid;
}
.decoracionImg:after {
  content: "";
  position: absolute;
  width: 39%;
  height: 27vmax;
  border: rgb(110, 110, 17) 1px solid;
  transform: translate(0.2%, 1.4%);
  z-index: -1;
}
.decoracionImg:before {
  content: "";
  position: absolute;
  width: 40%;
  height: 27vmax;
  border: rgb(110, 110, 17) 1px solid;
  transform: translate(-1%, -1%);
  z-index: 1;
}
#left {
  grid-area: left;
  display: flex;
  align-items: center;
}
#right {
  grid-area: right;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto 5%;
}
#bottom {
  color: white;
  grid-area: bottom;
  display: flex;
  justify-content: flex-start;
}
#bloqueIzquierda {
  margin-top: 1%;
  display: grid;
  width: 10%;
  height: 6vmax;
  background: rgb(0, 0, 0, 0.4) !important;
}
#bloqueCentro {
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  display: grid;
  position: relative;
  width: 10%;
  height: 6vmax;
  background: rgb(0, 0, 0, 0.4) !important;
}
#bloqueCentro:after {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 100%;
  background: white;
}
#bloqueCentro::before {
  content: "";
  position: absolute;
  right: 0;
  width: 2px;
  height: 100%;
  background: white;
}
#bloqueDerecha {
  margin-top: 1%;
  display: grid;
  width: 10%;
  height: 6vmax;
  background: rgb(0, 0, 0, 0.4) !important;
}
.bloques {
  margin: auto;
  font-size: 1.5vmax;
  line-height: 15px;
}
p.bloques {
  font-size: 2.4vmax;
  font-weight: 600;
  margin-bottom: 0;
}
.contenedor-portada {
  display: grid;
  grid-template-areas: "left right" "left right" "bottom bottom";
  grid-template-columns: 55% 40%;
  margin-left: 4%;
}
</style>
