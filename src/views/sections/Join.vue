<template>
  <section class="containerPortada">
    <aside class="containerTitle">
      <h1>Join The Team</h1>
    </aside>
    <section class="containerSection">
      <router-link
        v-for="(item, index) in dataJoin"
        v-bind:key="index"
        to=""
        :href="item.to"
        target="_blank"
      >
        <aside class="containerJoin">
          <span>{{ item.title }}</span>
          <img src="@/assets/icons/arrow-top-right.png" />
        </aside>
      </router-link>
    </section>
  </section>
</template>

<script>
export default {
  data(){return{dataJoin:[{title:"Art Director",to:""},{title:"Game Designer",to:"https://www.cgspectrum.com/career-pathways/game-designer"},{title:"Game Developer",to:"https://resources.workable.com/game-developer-job-description"},{title:"3D Animator",to:"https://www.cgspectrum.com/career-pathways/3d-animator"}]};}
};
</script>

<style scoped>
.containerPortada{padding-left:5%;padding-right:5%}.containerTitle{margin-bottom:20px;margin-top:20px;display:flex;justify-content:center}.containerTitle h1{text-align:center;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif !important;font-size:5vmax;line-height:5rem;font-weight:900;visibility:visible}.containerSection{margin:auto;width:85%;display:flex;flex-direction:column}.containerJoin{color:#a5a !important;font-weight:700 !important;font-size:2vmax;padding:1.25rem;display:flex;justify-content:space-between}.containerJoin:hover{background-color:rgba(217,217,217,.15)}
</style>
