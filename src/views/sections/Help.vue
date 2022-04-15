<template>
  <section class="containerPortada">
    <aside class="containerTitle">
      <h1>FAQ</h1>
    </aside>

    <section class="section" style="padding-top: 0 !important">
      <div class="container achicar">
        <md-toolbar
          id="toolbarQuestions"
          style="justify-content: start; background: transparent"
          v-for="(item, index) in dataQuestion"
          v-bind:key="index"
          :class="{ colorSelected: item.color }"
        >
          <div class="questions" @click="cambiarToolbar(index)">
            <span class="preguntas">
              {{ item.question }}
            </span>

            <span
              v-if="item.mostrar"
              style="
                font-size: var(--step--1);
                font-weight: 200 !important;
                white-space: initial;
                padding: 0.8vmax 1vmax;
              "
            >
              {{ item.detalle }}
            </span>
            <img :src="item.icono" class="botonQuestions" />
          </div>
        </md-toolbar>
      </div>
    </section>
  </section>
</template>

<script>
export default{data(){return{iconoA:require("@/assets/icons/arrow-down.png"),iconoB:require("@/assets/icons/arrow-up.png"),dataQuestion:[{id:1,question:"What is Raikumo?",detalle:"Raikumo is a digital collectible card game (DCCG) or Online collectible card game (OCCG) built on near blockchain.",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:2,question:"What does it have to do with NFTs?",detalle:"The digital trading card in game are owned by users as NFTs",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:3,question:"When is the NFT drop?",detalle:"We're aiming for our first nft pack drop sometime around march 2022 - april 2022",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:4,question:"When will the game launch?",detalle:"End of 2022 or q1 2023",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:5,question:"Does it have a token(fungible)?",detalle:"No we dont have a token yet.",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:6,question:"Are you looking for investment?",detalle:"Yes we're a startup and looking for investment, you can contact us in discord.",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false},{id:7,question:"Whitepaper, Roadmaps?",detalle:"Whitepaper and roadmap will be available soon",icono:require("@/assets/icons/arrow-down.png"),color:false,mostrar:false}]};},methods:{cambiarToolbar(id){if (this.dataQuestion[id].icono===this.iconoA){this.dataQuestion[id].icono=this.iconoB;this.dataQuestion[id].color=true;this.dataQuestion[id].mostrar=true}
else{this.dataQuestion[id].icono=this.iconoA;this.dataQuestion[id].color=false;this.dataQuestion[id].mostrar=false}}}};
</script>

<style lang="scss">
.containerPortada{padding-left:5%;padding-right:5%}.containerTitle{margin-bottom:20px;margin-top:20px;display:flex;justify-content:center}.containerTitle h1{font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif !important;font-size:var(--step-6);line-height:5rem;font-weight:900;visibility:visible}svg{display:none}#toolbarQuestions{box-shadow:none !important;border-bottom:1px #1a1a1a solid}.questions{cursor:pointer;display:flex;flex-direction:column;width:90%}.preguntas{font-size:var(--step-1);font-weight:700;padding:.8vmax 1vmax;line-height:3ch;text-align:start;text-justify:center !important;white-space:initial}.colorSelected{background:hsl(0 0 100%/0.15) !important;backdrop-filter:blur(2rem)}.achicar{max-width:90% !important}.botonQuestions{position:absolute;right:2.5%;top:0;bottom:0;margin:auto;width:clamp(2em, 3vw, 2.5em)}
</style>
