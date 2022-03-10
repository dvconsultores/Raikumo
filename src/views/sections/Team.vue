<template>
  <section class="containerPortada">
    <aside class="containerTitle">
      <h1>Meet The Team</h1>
    </aside>

    <aside
      class="containerTeam"
      v-for="(item, index) in dataTeam"
      v-bind:key="index"
    >
      <img :class="Perfil" />
    </aside>
  </section>
  <!-- <i class="fab fa-twitter" /> -->
</template>

<script>
export default {
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
        { index: 2, nombre: "Vlad", twitter: "@vgrichina", cargo: "Advisor" },
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
  },
  computed: {
    Perfil() {
      return {
        perfil: true
      };
    }
  }
};
</script>

<style scoped>
.containerPortada {
  padding-left: 5%;
  padding-right: 5%;
}
.containerTitle {
  display: flex;
  justify-content: center;
}
.containerTitle h1 {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-size: 5vmax;
  line-height: 5rem;
  font-weight: 900;
  visibility: visible;
}
.perfil {
  background: center no-repeat url("../../assets/team/monkey.jpg");
  background-size: cover;
}
</style>
