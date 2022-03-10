<template>
  <div>
    <div class="espacioArriba"></div>
    <div class="parallaxIndex">
      <intro id="intro" style="margin-bottom: 15vmax !important"></intro>
      <main class="main-raised">
        <WhatIs id="intro"></WhatIs>
        <section class="containerVideo">
          <div class="containerTitulo"></div>
          <div class="videoMobile"></div>
          <video :src="Video" type="video/mp4" controls autoplay loop muted>
            your browser does not support HTML5
          </video>
        </section>
        <!--////////////////////-->
        <!-- <help id="FAQ"></help>
        <history id="history"></history>
        <jobs id="jobs"></jobs> -->
      </main>
      <Features></Features>
      <team id="team"></team>
    </div>
  </div>
</template>

<script>
import Intro from "./sections/Intro";
import WhatIs from "./sections/WhatIs";
import Features from "./sections/Features";
import Team from "./sections/Team";
// import Help from "./sections/Help";
// import History from "./sections/History";
// import Jobs from "./sections/Jobs";
// export default { components: { Intro, Help, History, Team, Jobs } };
export default {
  components: {
    Intro,
    WhatIs,
    Features,
    Team
  },
  props: {
    video: { type: String, default: require("@/assets/videos/raikumo.mp4") }
  },
  computed: {
    Video() {
      return `${this.video}`;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  z-index: 1;
  color: #fff;
}
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.parallaxIndex {
  overflow: hidden;
  background: center no-repeat fixed url("../assets/img/fondo2.png");
  -webkit-background: center no-repeat fixed url("../assets/img/fondo2.png");
  -moz-osx-background: center no-repeat fixed url("../assets/img/fondo2.png");
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.espacioArriba {
  padding: 1vmax;
  visibility: hidden;
}
#FAQ {
  margin-bottom: 4vmax;
}
#history {
  position: relative;
  padding-top: 6vmax;
  margin-bottom: 12vmax;
}
#history:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(100deg, #000 10%, rgba(83, 202, 251, 0.4), #000);
  border-radius: 35%;
}
#team {
  padding-top: 4vmax;
  padding-bottom: 2vmax;
}
#team:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(100deg, #000 10%, rgba(83, 202, 251, 0.4), #000);
  border-radius: 35%;
}
#team:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(100deg, #000 10%, rgba(83, 202, 251, 0.4), #000);
  border-radius: 35%;
}
#jobs {
  position: relative;
}
.containerVideo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.containerTitulo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80.5%;
  height: 100%;
}
.containerTitulo:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: 3px #6e6e11 solid;
  width: 100%;
  height: 100%;
}
video {
  width: 80%;
  height: 80%;
  z-index: 11;
}
</style>
