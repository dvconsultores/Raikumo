<template>
  <section class="section containerPortada">
    <aside class="left">
      <div class="containerFeatures">
        <img class="imgFeatures" src="@/assets/img/Img.png" alt="img" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div class="containerFeatures aumento">
        <img class="imgFeatures" src="@/assets/img/Img2.png" alt="img" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div
        class="containerFeatures"
        v-for="(item, index) in dataFeatures"
        v-bind:key="index"
      >
        <img class="imgFeatures" :src="item.img" alt="img" />
        <h4>{{ item.text }}</h4>
      </div>
    </aside>

    <aside class="right">
      <div class="containerTextoFeatures">
        <h1>Our Features</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis duis
          velit turpis amet
        </h4>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  data() {
    return {
      first: false,
      dataFeatures: [
        {
          img: this.imagen,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          img: this.imagen2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]
    };
  },
  props: {
    imagen: { type: String, default: require("@/assets/img/Img.png") },
    imagen2: { type: String, default: require("@/assets/img/Img2.png") },
    imagen3: { type: String, default: require("@/assets/img/Img2.png") },
    imagen4: { type: String, default: require("@/assets/img/Img.png") }
  }
};
</script>

<style lang="scss" scoped>
.blanco {
  color: #fff !important;
}
.containerPortada {
  // margin: auto;
  // width: 90%;
  margin-top: 15vmax;
  background: #aa55aa;
  padding-left: 5%;
  padding-right: 5%;
  height: 55vmax;
  display: flex;
  flex-direction: row;
}
.left {
  width: 50%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 0.7fr 0.7fr;
}
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containerFeatures {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.96419375rem;
  width: 17vmax;
  height: 17vmax;
  background: #663366;
  border-radius: 23.1407px;
}
.aumento {
  height: 20vmax;
}
.imgFeatures {
  width: 7rem;
  border-radius: 1000em;
}
.containerFeatures h4 {
  font-size: 1.3vmax;
  font-weight: normal !important;
  visibility: visible;
}

.containerTextoFeatures {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 25%;
}
.containerTextoFeatures h1 {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  font-size: 5vmax;
  line-height: 5rem;
  font-weight: 900;
  visibility: visible;
}
.containerTextoFeatures h4 {
  font-size: 2vmax;
  font-weight: normal !important;
  visibility: visible;
}
</style>
