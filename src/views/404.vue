<template>
  <div class="notFound"><h1 class="letras">(404) Page NotFound</h1><div class="containerMono"><img :src="Mono" alt="Monkey"/></div></div>
</template>

<script>
export default{props:{mono:{type:String,default:require("@/assets/team/monkey.jpg")},},computed:{Mono(){return `${this.mono}`;},},};
</script>

<style scoped>
.notFound{display:flex;margin:auto;justify-content:center;align-items:center;height:100vh;overflow:hidden}.letras{background:linear-gradient(10deg,#000 10%,rgba(83,202,251,.5),#fff);background-size:cover;background-clip:text;-webkit-background-clip:text;color:transparent;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif !important;font-weight:800;text-align:center;z-index:1}.containerMono{position:absolute;width:40vmax;height:40vmax;border-radius:60%;overflow:hidden;z-index:0;animation:monito 5s infinite}.containerMono img{background:center no-repeat;background-size:cover}@keyframes monito{0%{transform:translateY(-50px)}30%{transform:translateY(0px) rotate(5deg)}50%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}100%{transform:translateY(-50px)}}
</style>
