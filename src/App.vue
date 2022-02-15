<template>
  <div id="material-kit">
    <div :class="Filtro1"></div>
    <div :class="Filtro2"></div>
    <div :class="Filtro3"></div>
    <div :class="Filtro4"></div>
    <div :class="Filtro5"></div>
    <div :class="Filtro6"></div>
    <div :class="Filtro7"></div>
    <div :class="Filtro8"></div>
    <div :class="Filtro9"></div>
    <div :class="Filtro10"></div>
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Filtro1() {
      return {
        filtro1: true
      };
    },
    Filtro2() {
      return {
        filtro2: true
      };
    },
    Filtro3() {
      return {
        filtro3: true
      };
    },
    Filtro4() {
      return {
        filtro4: true
      };
    },
    Filtro5() {
      return {
        filtro5: true
      };
    },
    Filtro6() {
      return {
        filtro6: true
      };
    },
    Filtro7() {
      return {
        filtro7: true
      };
    },
    Filtro8() {
      return {
        filtro8: true
      };
    },
    Filtro9() {
      return {
        filtro9: true
      };
    },
    Filtro10() {
      return {
        filtro10: true
      };
    }
  }
};
</script>

<style scoped>
.filtro1{position:absolute;width:262px;height:262px;left:-50px;top:41px;background:rgba(229,229,229,.2);filter:blur(200px);transition:.5s ease-in-out}.filtro1:hover{transform:scale(1.2,1.2)}.filtro3{position:absolute;width:30vmax;height:28vmax;right:10vmax;top:658.63px;background:#f1a441;opacity:.2;filter:blur(200px);transition:.5s ease-in-out}.filtro3:hover{transform:scale(1.5,1.5)}.filtro4{position:absolute;width:30vmax;height:28vmax;right:10vmax;bottom:100px;background:#d1a441;opacity:.2;filter:blur(200px);transform:rotate(75.78deg)}.filtro5{position:absolute;width:20vmax;height:20vmax;right:10vmax;bottom:90px;background:#53cafb;filter:blur(200px);transform:rotate(75.78deg)}.filtro2{position:absolute;width:20vmax;height:20vmax;right:10vmax;top:332px;background:#53cafb;filter:blur(200px);z-index:5;transition:.5s ease-in-out}.filtro2:hover{transform:scale(1.5,1.5)}.filtro6{position:absolute;width:14px;height:14px;left:42px;top:567px;background:rgba(83,202,251,.5);filter:blur(4px);z-index:5;transition:.5s ease-in-out}
.filtro6:hover{transform:scale(1.5,1.5)}.filtro6:active{background:linear-gradient(30deg,#ff0,#8a2be2)}.filtro7{position:absolute;width:8px;height:8px;left:268px;top:151px;background:rgba(83,202,251,.5);z-index:5;transition:.5s ease-in-out}.filtro7:hover{filter:blur(1px);transform:scale(1.5,1.5)}.filtro8{position:absolute;width:14px;height:14px;left:483px;top:214px;background:rgba(83,202,251,.5);filter:blur(4px);z-index:5;transition:.5s ease-in-out}.filtro8:hover{transform:scale(1.5,1.5)}.filtro8:active{background:linear-gradient(30deg,#ff0,#8a2be2)}.filtro9{position:absolute;width:8px;height:8px;left:386px;top:517px;background:rgba(83,202,251,.5);z-index:5;transition:.5s ease-in-out}.filtro9:hover{filter:blur(1px);transform:scale(1.5,1.5)}.filtro9:active{transform:rotate(30deg);background:violet}.filtro10{position:absolute;width:8px;height:8px;left:604px;top:343px;background:rgba(83,202,251,.5);z-index:5;transition:.5s ease-in-out}.filtro10:hover{filter:blur(1px);transform:scale(1.5,1.5)}
.filtro10:active{transform:rotate(-30deg);background:linear-gradient(30deg,#ff0,#8a2be2)}
</style>
