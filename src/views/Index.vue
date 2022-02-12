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
        <!--////////////////////-->
        <help id="FAQ"></help>
        <history id="history"></history>
        <team id="team"></team>
        <jobs id="jobs"></jobs>
      </main>
    </div>
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
      const animadoA = document.querySelectorAll(".animadoA");
      const posicionA = animadoA.getBoundingClientRect().top;

      const tamañoPantallaA = window.innerHeight / 3;
      const tamañoPantallaC = window.innerHeight / 5;

      if (posicionA < tamañoPantallaA) {
        animadoA.style.opacity = 1;
        animadoA.classList.add("animadoMover");
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
  }
  */
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
#jobs {
  position: relative;
}

///////////////////////////////////////////////////////////////////////
/*
.animadoA {
  opacity: 0;
  transition: 0.5s ease-in-out;
}
.animadoMover {
  animation: animadoA 0.5s ease-in-out;
}
@keyframes animadoA {
  0% {
    transform: translatex(-40%);
  }
  100% {
    transform: translateX(0%);
  }
}
*/
</style>
