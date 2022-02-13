<template>
  <div class="parallaxHistory">
    <div class="filtro3"></div>
    <section class="container containerGrid">
      <section class="section grid">
        <div class="filtroA"></div>
        <div class="filtroB"></div>
        <div class="filtroC"></div>
        <div class="filtroD"></div>
        <div class="filtroE"></div>
        <div class="filtroF"></div>
        <div class="filtroG"></div>
        <div class="filtroI"></div>
        <div class="filtroJ"></div>
        <aside
          class="containerTeam"
          v-for="(item, index) in dataTeam"
          v-bind:key="index"
        >
          <div class="containerFoto">
            <img :src="team1" alt="Circle Image" />
          </div>
          <div class="containerDatos">
            <h2>{{ item.nombre }}</h2>
            <p>
              <strong>{{ item.cargo }}</strong>
              <br />{{ item.twitter }}
              <br />
              <i class="fab fa-twitter" />
            </p>
          </div>
        </aside>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    team1: {
      type: String,
      default: require("@/assets/team/monkey.jpg")
    }
  },
  computed: {
    Team() {
      return {
        backgroundImage: `url(${this.team1})`
      };
    }
  },
  data() {
    return {
      dataTeam: [
        {
          index: 0,
          nombre: "Endgame",
          twitter: "@endygamie",
          cargo: "Founder"
        },
        {
          index: 1,
          nombre: "Tyler Scott Ward",
          twitter: "@LordTylerWard",
          cargo: "Advisor"
        },
        {
          index: 2,
          nombre: "Vlad",
          twitter: "@vgrichina",
          cargo: "Advisor"
        },
        {
          index: 3,
          nombre: "Mark Ward",
          twitter: "@markwardbro",
          cargo: "Advisor"
        },
        {
          index: 4,
          nombre: "Sharky",
          twitter: "@sharkyayzip",
          cargo: "Story writer"
        },
        {
          index: 5,
          nombre: "Algy",
          twitter: "@youngalgy",
          cargo: "Story writer"
        },
        {
          index: 6,
          nombre: "ikhimaz",
          twitter: "@ikhimaz",
          cargo: "3D artist"
        },
        {
          index: 7,
          nombre: "Arki_bootzz",
          twitter: "@arki_bootzz",
          cargo: "3D artist"
        },
        {
          index: 8,
          nombre: "Kuureh",
          twitter: "@kuureh_near",
          cargo: "2D artist"
        },
        {
          index: 9,
          nombre: "fluffycookie",
          twitter: "@cookie_uw0",
          cargo: "2D artist"
        },
        {
          index: 10,
          nombre: "Reyzlyn",
          twitter: "@Reyzlyn1",
          cargo: "2D artist"
        },
        {
          index: 11,
          nombre: "Andresdom",
          twitter: "@andresdom2004",
          cargo: "Developer"
        },
        {
          index: 12,
          nombre: "detextre4",
          twitter: "@herian99611270",
          cargo: "Developer"
        },
        {
          index: 13,
          nombre: "Kuro",
          twitter: "@XLBao_",
          cargo: "Contributors"
        },
        {
          index: 14,
          nombre: "Princemilfula",
          twitter: "@princemilfula",
          cargo: "Contributors"
        },
        {
          index: 15,
          nombre: "Dustee",
          twitter: "@DUSTEEdarko",
          cargo: "Contributors"
        },
        {
          index: 16,
          nombre: "DDCHR",
          twitter: "@DDCHR07",
          cargo: "Contributors"
        },
        {
          index: 17,
          nombre: "Spike",
          twitter: "@candyfaguette",
          cargo: "Contributors"
        },
        {
          index: 18,
          nombre: "Lanky",
          twitter: "@lanky_ay",
          cargo: "Contributors"
        },
        {
          index: 19,
          nombre: "Starpause",
          twitter: "@starpause",
          cargo: "Contributors"
        },
        {
          index: 20,
          nombre: "Nick Ward",
          twitter: "@nickawkward",
          cargo: "Contributors"
        },
        {
          index: 21,
          nombre: "Zach",
          twitter: "@transmental",
          cargo: "Contributors"
        },
        {
          index: 22,
          nombre: "Illustrious",
          twitter: "illustriousboy",
          cargo: "Contributors"
        }
      ]
    };
  }
};
</script>

<style scoped>
.containerGrid {
  max-width: 85%;
}
.grid {
  display: grid;
  grid-template-areas: "1 2 3";
  grid-template-columns: 34% 35% 34%;
  width: 100%;
}
.containerTeam {
  width: 100%;
  margin-bottom: 13%;
}
.containerFoto {
  margin-top: 3%;
  float: left;
  width: 9.5vmax;
  height: 9.5vmax;
  border-radius: 50%;
  overflow: hidden;
}
.containerFoto img {
  background: center no-repeat;
  background-size: cover;
}
.containerFoto:hover {
  transition: 0.5s ease-in-out;
  transform: scale(1.1, 1.1);
  box-shadow: 0px 0px 1px rgb(110, 110, 17), 0px 0px 15px rgb(110, 110, 17);
}
.containerDatos {
  display: inline-block;
  margin-left: 3%;
  width: 24vmax;
  max-width: 60%;
  height: 10vmax;
}
.containerDatos h2 {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-weight: 900;
  margin: 1% auto !important;
  font-size: 2.6vmax;
}
.containerDatos p {
  color: rgb(179, 174, 174);
  line-height: 26px;
  font-size: 1.3vmax;
}
.containerDatos i {
  font-size: 1.5vmax;
}

.parallaxHistory {
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
