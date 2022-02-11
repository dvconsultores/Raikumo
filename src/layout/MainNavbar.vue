<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :color-on-scroll="colorOnScroll"
    style="background: black !important"
  >
    <!--///////////////////////////-ESCRITORIO-/////////////////////////////////////-->
    <section v-if="showDownload" class="sectionFlex">
      <md-button
        class="md-just-icon md-simple md-toolbar-toggle eliminarNavbar moverBoton"
        :class="{ toggled: toggledClass }"
        @click="toggleNavbarMobile()"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </md-button>
      <!--v-for="(linkEscritorio, index) in dataEscritorio"
        v-bind:key="index"-->
      <md-list-item
        class="eliminarMobile"
        href="#history"
        @click="scrollToElement()"
      >
        <!--<i class="material-icons">content_paste</i> ejemplo de icono para usar
        HAY UN ATRIBUTO  v-if="showDownload"   QUE NI IDEA PARA QUE SIRVE-->
        <p class="centrarMobile">History</p>
      </md-list-item>

      <md-list-item
        class="eliminarMobile"
        href="#team"
        @click="scrollToElement()"
      >
        <p class="centrarMobile">Team</p>
      </md-list-item>

      <md-button
        class="md-simple raikumo"
        href="/"
        @click="scrollToElement()"
      ></md-button>
      <!--v-for="(linkEscritorio, index) in dataEscritorio"
        v-bind:key="index"-->
      <md-list-item
        class="eliminarMobile"
        href="#FAQ"
        @click="scrollToElement()"
      >
        <p class="centrarMobile">FAQ</p>
      </md-list-item>

      <md-list-item
        class="eliminarMobile"
        href="#jobs"
        @click="scrollToElement()"
      >
        <p class="centrarMobile">Jobs</p>
      </md-list-item>
    </section>

    <li class="md-list-item eliminarMobile">
      <a
        href="javascript:void(0)"
        class="md-list-item-router md-list-item-container md-button-clean dropdown"
      >
        <div class="md-list-item-content">
          <drop-down direction="down" class="profile-photo">
            <div
              class="profile-photo-small"
              slot="title"
              data-toggle="dropdown"
            >
              <img src="@/assets/team/monkey.jpg" alt="Circle Image" />
              <!--<img :src="img" alt="Circle Image" />-->
            </div>
            <ul class="dropdown-menu dropdown-menu-right">
              <li class="dropdown-header">You account</li>
              <li>
                <a
                  href="#"
                  class="dropdown-item blanco"
                  style="background: none !important; box-shadow: none !important"
                >
                  Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="dropdown-item blanco"
                  style="background: none !important; box-shadow: none !important"
                >
                  Settings and other stuff
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="dropdown-item blanco azul"
                  style="background: none !important; box-shadow: none !important"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </drop-down>
        </div>
      </a>
    </li>
    <!--
    <md-list class="eliminarMobile">
      <md-list-item href="javascript:void(0)" @click="scrollToElement()">
        <i class="material-icons">account_circle</i>
        <p class="hidden-lg">Near Wallet</p>
        <md-tooltip md-direction="bottom">You Account</md-tooltip>
      </md-list-item>
    </md-list>-->

    <!--///////////////////////////-MOBILE-/////////////////////////////////////-->
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-collapse">
        <div class="md-collapse-wrapper">
          <mobile-menu nav-mobile-section-start="true">
            <!--v-for="(linkMobile, index) in dataMobile"
              v-bind:key="index"-->
            <md-list-item href="#history" @click="scrollToElement()">
              <p class="centrarMobile">History</p>
            </md-list-item>
            <md-list-item href="#team" @click="scrollToElement()">
              <p class="centrarMobile">Team</p>
            </md-list-item>
            <md-list-item href="#FAQ" @click="scrollToElement()">
              <p class="centrarMobile">FAQ</p>
            </md-list-item>
            <md-list-item href="#jobs" @click="scrollToElement()">
              <p class="centrarMobile">Jobs</p>
            </md-list-item>

            <li class="md-list-item">
              <a
                href="javascript:void(0)"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down direction="down" class="profile-photo">
                    <div
                      class="profile-photo-small centrarMobile"
                      slot="title"
                      data-toggle="dropdown"
                    >
                      <img src="@/assets/team/monkey.jpg" alt="Circle Image" />
                      <!--<img :src="img" alt="Circle Image" />-->
                    </div>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li class="dropdown-header">You account</li>
                      <li>
                        <a
                          href="#"
                          class="dropdown-item blanco"
                          style="background: none !important; box-shadow: none !important"
                        >
                          Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="dropdown-item blanco azul"
                          style="background: none !important; box-shadow: none !important"
                        >
                          Settings and other stuff
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="dropdown-item blanco azul"
                          style="background: none !important; box-shadow: none !important"
                        >
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>
            <!--
            <md-list-item href="javascript:void(0)" @click="scrollToElement()">
              <i class="material-icons centrarMobile">account_circle</i>
              <p class="hidden-lg centrarMobile">Near Wallet</p>
            </md-list-item>
            -->
          </mobile-menu>

          <!--ejemplo de listas   <li class="md-list-item" v-if="!showDownload">
              <md-list>
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Components</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>All Components</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>Documentation</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>-->
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
/*
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler;
    }, 66);
  }
}
*/
import MobileMenu from "@/layout/MobileMenu";
export default {
  data() {
    return {
      toggledClass: false,
      dataMobile: ["History", "FAQ", "Team", "Jobs"],
      dataEscritorio: [
        ["history", "FAQ"],
        ["Team", "Jobs"]
      ]
    };
  },
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
    /*
    handleScroll() {
      let verScroll = window.pageYOffset;
      window.onscroll = function() {
        let scrollActual = window.pageYOffset;
        if (verScroll > scrollActual) {
          document.getElementById("toolbar").style.top = "0";
        } else {
          document.getElementById("toolbar").style.top = "-60px";
        }
      };
    },
    scrollListener() {
      resizeThrottler(this.handleScroll());
    },*/
  },
  /*
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },*/
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style scoped>
* {
  z-index: 10;
}
.blanco {
  color: white !important;
}
.sectionFlex {
  justify-content: center;
  width: 90%;
  display: flex;
}
.raikumo {
  background: center no-repeat url("../assets/logos/raikumo long.png");
  background-size: cover;
  position: relative;
  width: 20%;
}
.centrarMobile {
  margin: auto !important;
}
.eliminarMobile {
  display: block;
  margin: 0 10px;
}
.eliminarNavbar {
  display: none;
}
.foto {
  background: center no-repeat;
  background-size: cover;
}
.moverBoton {
  position: absolute !important;
  top: 10%;
}
</style>
