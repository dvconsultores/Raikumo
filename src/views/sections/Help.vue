<template>
  <section class="section">
    <div class="container achicar">
      <md-toolbar
        style="justify-content: start;"
        class="toolbarQuestions colorBase"
        v-for="(item, index) in dataQuestion"
        v-bind:key="index"
        v-bind:class="{ cambioColor: item.color }"
      >
        <p class="numero">0 {{ index + 1 }}</p>
        <div class="questions">
          <md-list md-expand-single="true">
            <md-list-item md-expand style="width: 100% !important">
              <span class="preguntas" @click="cambiarToolbar(index)">
                {{ item.question }}
              </span>

              <md-list slot="md-expand">
                <md-list-item>
                  <span
                    style="position: relative; font-size: 1.3vmax; font-weight: 200 !important; white-space: initial"
                  >
                    {{ item.detalle }}
                  </span>
                </md-list-item>
              </md-list>
            </md-list-item>
          </md-list>
          <md-button
            class="md-icon-button botonQuestions"
            style="background-color: transparent !important; box-shadow: none !important; position: absolute"
          >
            <md-icon
              style="font-size: 2.5vmax !important; height: 30%; transition: ease 1s !important"
            >
              {{ item.icono }}
            </md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      iconoA: "add_circle",
      iconoB: "remove",
      /*/// */
      dataQuestion: [
        {
          id: 1,
          question: "What is Raikumo?",
          detalle:
            "Raikumo is a digital collectible card game (DCCG) or Online collectible card game (OCCG) built on near blockchain.",
          icono: "add_circle",
          color: true
        },
        {
          id: 2,
          question: "What does it have to do with NFTs?",
          detalle:
            "The digital trading card in game are owned by users as NFTs",
          icono: "add_circle",
          color: true
        },
        {
          id: 3,
          question: "When is the NFT drop?",
          detalle:
            "We're aiming for our first nft pack drop sometime around march 2022 - april 2022",
          icono: "add_circle",
          color: true
        },
        {
          id: 4,
          question: "When will the game launch?",
          detalle: "End of 2022 or q1 2023",
          icono: "add_circle",
          color: true
        },
        {
          id: 5,
          question: "Does it have a token(fungible)?",
          detalle: "No we dont have a token yet.",
          icono: "add_circle",
          color: true
        },
        {
          id: 6,
          question: "Are you looking for investment?",
          detalle:
            "Yes we're a startup and looking for investment, you can contact us in discord.",
          icono: "add_circle",
          color: true
        },
        {
          id: 7,
          question: "Whitepaper, Roadmaps?",
          detalle: "Whitepaper and roadmap will be available soon",
          icono: "add_circle",
          color: true
        }
      ]
    };
  },
  methods: {
    cambiarToolbar(id) {
      if (this.dataQuestion[id].icono === this.iconoA) {
        this.dataQuestion[id].icono = this.iconoB;
        this.dataQuestion[id].color = false;
      } else {
        this.dataQuestion[id].icono = this.iconoA;
        this.dataQuestion[id].color = true;
      }
    }
  }
};
</script>

<style lang="scss">
svg {
  display: none;
}
.toolbarQuestions {
  margin: 0 !important;
  box-shadow: none !important;
  border-bottom: 1px rgb(26, 26, 26) solid;
}
.numero {
  font-size: 2.5vmax;
  position: relative;
  font-weight: 600;
  margin: 0 2%;
}
.questions {
  width: 90%;
}
.preguntas {
  font-size: 1.7vmax;
  font-weight: 400;
  padding: 0.8vmax 1vmax;
  text-align: start;
  text-justify: center !important;
  white-space: initial;
}
.colorBase {
  background: hsl(0 0 100% / 0.15) !important;
  backdrop-filter: blur(2rem);
}
.cambioColor {
  background: rgb(0, 0, 0, 0.7) !important;
}
.achicar {
  max-width: 90% !important;
}
.botonQuestions {
  right: 2.5%;
  top: 0;
  bottom: 0;
}
</style>
