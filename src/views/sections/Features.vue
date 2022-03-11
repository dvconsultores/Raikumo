<template>
<section class="section containerPortada"><aside class="left"><div class="containerFeatures"><img class="imgFeatures" :src="imagen" alt="img"/><h4>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4></div><div class="containerFeatures aumento"><img class="imgFeatures" :src="imagen2" alt="img"/><h4>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4></div><div class="containerFeatures" v-for="(item, index) in dataFeatures" v-bind:key="index"><img class="imgFeatures" :src="item.img" alt="img"/><h4>{{item.text}}</h4></div></aside><aside class="right"><div class="containerTextoFeatures"><h1>Our Features</h1><h4>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sagittis duis velit turpis amet </h4></div></aside></section>
</template>

<script>
export default {
  data(){return{first:false,dataFeatures:[{img:this.imagen3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{img:this.imagen4,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]};},props:{imagen:{type:String,default:require("@/assets/img/Img.png")},imagen2:{type:String,default:require("@/assets/img/Img2.png")},imagen3:{type:String,default:require("@/assets/img/Img2.png")},imagen4:{type:String,default:require("@/assets/img/Img.png")}}
};
</script>

<style lang="scss" scoped>
.blanco{color:#fff !important}.containerPortada{margin-top:15vmax;background:#a5a;padding-left:5%;padding-right:5%;height:55vmax;display:flex;flex-direction:row}.left{width:50%;display:grid;grid-template-rows:1fr 1fr;grid-template-columns:.7fr .7fr}.right{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.containerFeatures{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:.96419375rem;width:17vmax;height:17vmax;background:#636;border-radius:23.1407px;transition:.5s ease-in-out}.aumento{height:20vmax}.imgFeatures{width:9vmax;border-radius:1000em;transition:.5s ease-in-out}.containerFeatures:hover{transform:translateY(-10px);box-shadow:-1px -1px 5px #3b133b;transition:.5s ease-in-out}.containerFeatures h4{font-size:1.3vmax;font-weight:400 !important;visibility:visible}.containerTextoFeatures{display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;margin-bottom:25%}.containerTextoFeatures h1{text-align:center;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif !important;font-size:5vmax;font-weight:900;visibility:visible}
.containerTextoFeatures h4{text-align:center;font-size:2vmax;font-weight:400 !important;visibility:visible}
</style>
