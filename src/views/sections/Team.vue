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
      <img class="perfil" :src="item.perfil" alt="profile" />
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
          cargo: "Founder",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 1,
          nombre: "Tyler Scott Ward",
          twitter: "@LordTylerWard",
          cargo: "Advisor",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 2,
          nombre: "Vlad",
          twitter: "@vgrichina",
          cargo: "Advisor",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 3,
          nombre: "Mark Ward",
          twitter: "@markwardbro",
          cargo: "Advisor",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 4,
          nombre: "Sharky",
          twitter: "@sharkyayzip",
          cargo: "Story writer",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 5,
          nombre: "Algy",
          twitter: "@youngalgy",
          cargo: "Story writer",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 6,
          nombre: "ikhimaz",
          twitter: "@ikhimaz",
          cargo: "3D artist",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 7,
          nombre: "Arki_bootzz",
          twitter: "@arki_bootzz",
          cargo: "3D artist",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 8,
          nombre: "Kuureh",
          twitter: "@kuureh_near",
          cargo: "2D artist",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 9,
          nombre: "fluffycookie",
          twitter: "@cookie_uw0",
          cargo: "2D artist",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 10,
          nombre: "Reyzlyn",
          twitter: "@Reyzlyn1",
          cargo: "2D artist",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 11,
          nombre: "Andresdom",
          twitter: "@andresdom2004",
          cargo: "Developer",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 12,
          nombre: "detextre4",
          twitter: "@herian99611270",
          cargo: "Developer",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 13,
          nombre: "Kuro",
          twitter: "@XLBao_",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 14,
          nombre: "Princemilfula",
          twitter: "@princemilfula",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 15,
          nombre: "Dustee",
          twitter: "@DUSTEEdarko",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 16,
          nombre: "DDCHR",
          twitter: "@DDCHR07",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 17,
          nombre: "Spike",
          twitter: "@candyfaguette",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 18,
          nombre: "Lanky",
          twitter: "@lanky_ay",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 19,
          nombre: "Starpause",
          twitter: "@starpause",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 20,
          nombre: "Nick Ward",
          twitter: "@nickawkward",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 21,
          nombre: "Zach",
          twitter: "@transmental",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        },
        {
          index: 22,
          nombre: "Illustrious",
          twitter: "illustriousboy",
          cargo: "Contributors",
          perfil: require("@/assets/team/monkey.jpg")
        }
      ]
    };
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
  border-radius: 1000em;
  width: 7.37625rem;
  height: 7.37625rem;
}
</style>
