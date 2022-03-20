<template>
  <div>
    <div class="espacioArriba"></div>
    <div class="parallaxIndex">
      <intro
        v-animate-onscroll="'anim1'"
        class="anim1Start"
        id="intro"
        style="margin-bottom: 15vmax !important"
      ></intro>
      <main class="main-raised">
        <WhatIs id="intro"></WhatIs>
        <section
          class="containerVideo anim1-2Start"
          v-animate-onscroll="'anim1-2'"
        >
          <div class="containerTitulo"></div>
          <div class="videoMobile"></div>
          <video :src="Video" type="video/mp4" controls autoplay loop muted>
            your browser does not support HTML5
          </video>
        </section>
      </main>
      <Features></Features>
      <team id="team"></team>
      <Join v-animate-onscroll="'anim1'" class="anim1Start" id="join"></Join>
      <help v-animate-onscroll="'anim1'" class="anim1Start" id="FAQ"></help>
    </div>
  </div>
</template>

<script>
import Intro from "./sections/Intro";
import WhatIs from "./sections/WhatIs";
import Features from "./sections/Features";
import Team from "./sections/Team";
import Join from "./sections/Join";
import Help from "./sections/Help";

export default {
  components:{Intro,WhatIs,Features,Team,Join,Help},props:{video:{type:String,default:require("@/assets/videos/raikumo.mp4")},},mounted(){document.getElementById("intro").classList.add("anim1")},computed:{Video(){return `${this.video}`;}}
};
</script>

<style lang="scss" scoped>
*{z-index:1;color:#fff}.md-card-actions.text-center{display:flex;justify-content:center !important}.contact-form{margin-top:30px}.md-has-textarea+.md-layout{margin-top:15px}.parallaxIndex{overflow:hidden;background:center no-repeat fixed url("../assets/img/fondo2.png");-webkit-background:center no-repeat fixed url("../assets/img/fondo2.png");-moz-osx-background:center no-repeat fixed url("../assets/img/fondo2.png");background-size:cover;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.espacioArriba{padding:1vmax;visibility:hidden}#FAQ{margin-bottom:4vmax}#team{padding-top:4vmax;padding-bottom:3vmax}#join{padding-top:4vmax;padding-bottom:3vmax}.containerVideo{position:relative;display:flex;align-items:center;justify-content:center;width:100%}.containerTitulo{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:80.5%;height:100%}.containerTitulo:after{content:"";position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;border:3px #6e6e11 solid;width:100%;height:100%}video{width:80%;height:80%;z-index:11}
.anim1Start{opacity:0;transform:translateY(100px);transition:1s ease-in-out}.anim1{opacity:1;transform:translateY(0px);transition:1s ease-in-out}.anim1-2Start{opacity:0;transform:translateY(100px) scale(.9);transition:1.5s ease-in-out}.anim1-2{opacity:1;transform:translateY(0px) scale(1);transition:1.5s ease-in-out}
</style>
