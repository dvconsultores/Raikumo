<template>
  <div class="parallaxHistory">
    <div class="filtro3"></div>
    <section class="container containerGrid">
      <section class="section grid">
        <div class="filtro8"></div>
        <div class="filtro9"></div>
        <div class="filtro10"></div>
        <div class="filtro11"></div>
        <div class="filtro12"></div>
        <div class="filtro13"></div>
        <div class="filtro14"></div>
        <div class="filtro16"></div>
        <div class="filtro17"></div>
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
  margin-top: 20vh;
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
  background: center no-repeat fixed;
  -webkit-font-background: center no-repeat fixed;
  -moz-osx-font-background: center no-repeat fixed;
  background-size: cover;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.filtro3 {
  position: absolute;
  width: 30vmax;
  height: 28vmax;
  right: 10vmax;
  top: 658.63px;
  background: #f1a441;
  opacity: 0.2;
  filter: blur(200px);
  transition: 0.5s ease-in-out;
}
.filtro3:hover {
  transform: scale(1.5, 1.5);
}
.filtro8 {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 10%;
  top: 105px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro8:hover {
  transform: scale(1.5, 1.5);
}
.filtro9 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 21%;
  top: 19%;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro9:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro10 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 604px;
  top: 340px;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro10:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro11 {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 735px;
  top: 300px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro11:hover {
  transform: scale(1.5, 1.5);
}
.filtro12 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 425px;
  top: 133px;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro12:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro13 {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 10%;
  bottom: 105px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro13:hover {
  transform: scale(1.5, 1.5);
}
.filtro14 {
  position: absolute;
  width: 8px;
  height: 8px;
  right: 21%;
  bottom: 19%;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro14:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro16 {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 735px;
  bottom: 300px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro16:hover {
  transform: scale(1.5, 1.5);
}
.filtro17 {
  position: absolute;
  width: 8px;
  height: 8px;
  right: 425px;
  bottom: 133px;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro17:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
</style>
