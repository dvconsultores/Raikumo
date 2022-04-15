<template>
  <section class="containerPortada">
    <aside class="containerTitle">
      <h1>Meet The Team</h1>
    </aside>
    <section class="containerSectionTeam">
      <aside
        v-animate-onscroll.repeat="'anim1'"
        class="containerTeam anim1Start"
        v-for="(item, index) in dataTeam"
        v-bind:key="index"
      >
        <img class="perfil" :src="item.perfil" alt="profile" />
        <p>{{ item.nombre }}</p>
        <span>{{ item.cargo }}</span>
        <div>
          <i class="fab fa-twitter" style="margin-right: 3px" />
          <span>{{ item.twitter }}</span>
        </div>
      </aside>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataTeam: [
        {
          nombre: "Endgame",
          twitter: "@endygamie",
          cargo: "Founder",
          perfil: require("@/assets/team/endygamie.jpg")
        },
        {
          nombre: "Tyler Scott Ward",
          twitter: "@LordTylerWard",
          cargo: "Advisor",
          perfil: require("@/assets/team/Tyler_Scott_Ward.png")
        },
        {
          nombre: "Vlad",
          twitter: "@vgrichina",
          cargo: "Advisor",
          perfil: require("@/assets/team/vlad.jpeg")
        },
        {
          nombre: "Mark Ward",
          twitter: "@markwardbro",
          cargo: "Advisor",
          perfil: require("@/assets/team/Mark_Ward.png")
        },
        {
          nombre: "Sharky",
          twitter: "@sharkyayzip",
          cargo: "Story writer",
          perfil: require("@/assets/team/shark.jpg")
        },
        {
          nombre: "YoungAlgy",
          twitter: "@youngalgy",
          cargo: "Story writer",
          perfil: require("@/assets/team/YoungAlgy.jpg")
        },
        {
          nombre: "ikhimaz",
          twitter: "@ikhimaz",
          cargo: "3D artist",
          perfil: require("@/assets/team/ikhimaz.jpg")
        },
        {
          nombre: "Arki_bootzz",
          twitter: "@arki_bootzz",
          cargo: "3D artist",
          perfil: require("@/assets/team/arki.jpg")
        },
        {
          nombre: "Kuureh",
          twitter: "@kuureh_near",
          cargo: "2D artist",
          perfil: require("@/assets/team/kuureh.jpg")
        },
        {
          nombre: "fluffycookie",
          twitter: "@cookie_uw0",
          cargo: "2D artist",
          perfil: require("@/assets/team/Fluffycookie.jpg")
        },
        {
          nombre: "Reyzlyn",
          twitter: "@Reyzlyn1",
          cargo: "2D artist",
          perfil: require("@/assets/team/Reyzlyn.jpg")
        },
        {
          nombre: "Andresdom",
          twitter: "@andresdom2004",
          cargo: "Developer",
          perfil: require("@/assets/team/Andrés.jpg")
        },
        {
          nombre: "detextre4",
          twitter: "@herian99611270",
          cargo: "Developer",
          perfil: require("@/assets/team/herian.jpg")
        },
        // {
        //   index: 13,
        //   nombre: "Kuro",
        //   twitter: "@XLBao_",
        //   cargo: "Contributors",
        //   perfil: require("@/assets/team/monkey.jpg")
        // },
        {
          nombre: "Princemilfula",
          twitter: "@princemilfula",
          cargo: "Contributor",
          perfil: require("@/assets/team/princemilfula.jpg")
        },
        // {
        //   index: 15,
        //   nombre: "Dustee",
        //   twitter: "@DUSTEEdarko",
        //   cargo: "Contributors",
        //   perfil: require("@/assets/team/monkey.jpg")
        // },
        {
          nombre: "DDCHR",
          twitter: "@DDCHR07",
          cargo: "Contributor",
          perfil: require("@/assets/team/Totallynormie.jpg")
        },
        {
          nombre: "Spike",
          twitter: "@candyfaguette",
          cargo: "Contributor",
          perfil: require("@/assets/team/spike.jpg")
        },
        {
          nombre: "Lanky",
          twitter: "@lanky_ay",
          cargo: "Contributor",
          perfil: require("@/assets/team/lankwell.jpg")
        },
        {
          nombre: "Starpause",
          twitter: "@starpause",
          cargo: "Contributor",
          perfil: require("@/assets/team/starpause.jpg")
        },
        {
          nombre: "Nick Ward",
          twitter: "@nickawkward",
          cargo: "Contributor",
          perfil: require("@/assets/team/wardn.jpg")
        },
        {
          nombre: "Zach",
          twitter: "@transmental",
          cargo: "Contributor",
          perfil: require("@/assets/team/transmental.jpg")
        },
        {
          nombre: "Illustrious",
          twitter: "@illustriousboy",
          cargo: "Contributor",
          perfil: require("@/assets/team/illustrious.jpg")
        },
        {
          nombre: "idioticsavant",
          twitter: "@idioticsavant_1",
          cargo: "Contributor",
          perfil: require("@/assets/team/idioti.jpg")
        },
        {
          nombre: "jetsetter",
          twitter: "@jetsetter114",
          cargo: "Contributor",
          perfil: require("@/assets/team/jetsetter.jpg")
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
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.containerTitle h1 {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-size: var(--step-6);
  line-height: 5rem;
  font-weight: 900;
  visibility: visible;
}
.containerSectionTeam {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1.25rem;
}
.containerTeam {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containerTeam p {
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  font-size: var(--step-1);
  text-align: center;
}
.containerTeam span {
  font-size: var(--step--2);
  line-height: 2ch;
}
.perfil {
  border-radius: 1000em;
  width: 7.37625rem;
  height: 7.37625rem;
  transition: 0.6s ease-in-out;
}
.perfil:hover {
  transform: translateY(-10px);
  transition: 0.6s ease-in-out;
  box-shadow: 1px 1px 5px #a6a;
}
.anim1Start {
  opacity: 0;
  transform: translateY(20px);
  transition: 1s ease-in-out;
}
.anim1 {
  opacity: 1;
  transform: translateY(0px);
  transition: 1s ease-in-out;
}
</style>
