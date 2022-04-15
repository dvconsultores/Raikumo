<template>
  <section class="section containerPortada">
    <div class="contenedor-portada">
      <aside id="left">
        <div
          class=" md-size-50 md-small-size-70 md-xsmall-size-100 textoIntro imgMobile"
        >
          <h1 class="title blanco">What is Raikumo ?</h1>
          <h4 v-for="(i, index) in texto" v-bind:key="index">{{ i.text }}</h4>
        </div>
      </aside>
      <aside id="right2">
        <div
          class="decoracionImg anim2Start"
          v-animate-onscroll.repeat="'anim2'"
        >
          <div class="img" :style="Image2" />
        </div>
      </aside>
      <aside id="bottom">
        <div class="botoncito">
          <md-button id="botonIntro" href="#" target="_blank"
            ><span class="texto-boton">Join Discord</span></md-button
          >
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      first: false,
      texto: [
        {
          text:
            "Raikumo is an NFT card game that focuses on incentivizing gamers and collectors alike; providing quality collectibles and an enjoyable game."
        }
      ]
    };
  },
  props: {
    imagen: { type: String, default: require("@/assets/img/Img.png") },
    imagen2: { type: String, default: require("@/assets/img/Img.png") }
  },
  computed: {
    Image() {
      return { backgroundImage: `url(${this.imagen})` };
    },
    Image2() {
      return { backgroundImage: `url(${this.imagen2})` };
    }
  }
};
</script>

<style lang="scss" scoped>
.blanco {
  color: #fff !important;
}
.texto-boton {
  color: #fff;
  font-weight: 600;
  font-size: var(--step--1);
  text-transform: none !important;
}
.botoncito {
  visibility: visible;
}
#botonIntro {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 3.875rem;
  background: #a5a !important;
  border-radius: 30px;
}
.textoIntro h1 {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-size: var(--step-6);
  font-weight: 900;
  visibility: visible;
}
.textoIntro h4 {
  margin: 25px 0;
  max-width: 80%;
  font-size: var(--step-1);
  font-weight: 400 !important;
  visibility: visible;
}
.imgMobile {
  background: center no-repeat;
  background-size: cover;
  width: auto;
  height: auto;
  border-radius: 1em;
  z-index: 2;
}
.img {
  background: center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.decoracionImg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 27vmax;
  position: relative;
}
.decoracionImg:after {
  content: "";
  position: absolute;
  width: 22rem;
  height: 22rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c9c;
  filter: blur(109.769px);
  transform: rotate(30deg);
}
#left {
  grid-area: left;
  display: flex;
  align-items: center;
}
#right2 {
  grid-area: right;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto 5%;
}
#bottom {
  color: #fff;
  grid-area: bottom;
  display: flex;
  justify-content: flex-start;
}
.containerPortada {
  padding-left: 5%;
  padding-right: 5%;
}
.contenedor-portada {
  display: grid;
  grid-template-areas: "left right" "left right" "bottom bottom";
  grid-template-columns: 60% 40%;
  border-radius: 20px !important;
  padding-left: 2vmax;
  padding-bottom: 2vmax;
  background: center no-repeat;
  background-size: cover;
}
.anim2Start {
  opacity: 0;
  transform: scale(0);
  transition: 1s ease-in-out;
}
.anim2 {
  opacity: 1;
  transform: scale(1);
  transition: 1s ease-in-out;
}
</style>
