<template>
  <div>
    <div class="espacioArriba"></div>
    <div class="wrapper parallaxIndex">
      <intro id="intro"></intro>
      <main
        class="main main-raised slider"
        style="background: transparent; box-shadow: none"
      >
        <div class="espacio"></div>
        <help id="FAQ"></help>
        <!--////////////////////-->
        <history id="history"></history>
        <team id="team"></team>
        <jobs id="jobs"></jobs>
      </main>
    </div>
    <!--
    <video
      src="@/assets/videos/raikumo.mp4"
      type="video/mp4"
      controls
      autoplay
      loop
      muted
    >
      your browser does not support HTML5
    </video>-->
  </div>
</template>

<script>
/*
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
    }, 66);
  }
}
*/
import Intro from "./sections/Intro";
import Help from "./sections/Help";
import History from "./sections/History";
import Team from "./sections/Team";
import Jobs from "./sections/Jobs";

export default {
  components: {
    Intro,
    Help,
    History,
    Team,
    Jobs
  }
  /*
  methods: {
    scrollAnim1() {
      let animado1 = document.getElementById("animado1");
      const posicionObj1 = animado1.getBoundingClientRect().top;

      const tamañoPantalla = window.innerHeight / 3;

      if (posicionObj1 < tamañoPantalla) {
        animado1.classList.add("animate__animated");
        animado1.classList.add("animate__bounce");
      }
    },
    scrollListener() {
      resizeThrottler(this.scrollAnim1);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }*/
};
</script>

<style lang="scss" scoped>
* {
  z-index: 1;
  color: white;
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
  background: center no-repeat fixed;
  -webkit-font-background: center no-repeat fixed;
  -moz-osx-font-background: center no-repeat fixed;
  background-size: cover;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: center no-repeat fixed url("../assets/img/fondo.jpg");
  background-size: cover;
}
.espacio {
  padding: 8vmax;
  position: relative;
}
.espacioArriba {
  padding: 1vmax;
  position: relative;
}
#FAQ {
  margin-bottom: 6vmax;
}
#history {
  position: relative;
  padding-top: 6vmax;
  margin-bottom: 12vmax;
}
#history:after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(
    100deg,
    black 10%,
    rgba(83, 202, 251, 0.4),
    black
  );
  border-radius: 35%;
}
#team {
  position: relative;
  padding-top: 4vmax;
  padding-bottom: 2vmax;
}
#team:after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(
    100deg,
    black 10%,
    rgba(83, 202, 251, 0.4),
    black
  );
  border-radius: 35%;
}
#team:before {
  content: "";
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 0.7em;
  background: linear-gradient(
    100deg,
    black 10%,
    rgba(83, 202, 251, 0.4),
    black
  );
  border-radius: 35%;
}
/*
video {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}*/
</style>
