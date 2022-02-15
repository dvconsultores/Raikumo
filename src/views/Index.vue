<template>
  <div><div class="espacioArriba"></div><div class="parallaxIndex"><intro id="intro"></intro><main class="main-raised"><div class="espacio"></div><!--////////////////////--><help id="FAQ"></help><history id="history"></history><team id="team"></team><jobs id="jobs"></jobs></main></div></div>
</template>

<script>
  import Intro from "./sections/Intro";import Help from "./sections/Help";import History from "./sections/History";import Team from "./sections/Team";import Jobs from "./sections/Jobs";export default{components:{Intro,Help,History,Team,Jobs}};
</script>

<style lang="scss" scoped>
*{z-index:1;color:#fff}.md-card-actions.text-center{display:flex;justify-content:center !important}.contact-form{margin-top:30px}.md-has-textarea+.md-layout{margin-top:15px}.parallaxIndex{overflow:hidden;background:center no-repeat fixed url("../assets/img/fondo.jpg");-webkit-background:center no-repeat fixed url("../assets/img/fondo.jpg");-moz-osx-background:center no-repeat fixed url("../assets/img/fondo.jpg");background-size:cover;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.espacio{padding:8vmax;position:relative}.espacioArriba{padding:1vmax;position:relative}#FAQ{margin-bottom:4vmax}#history{position:relative;padding-top:6vmax;margin-bottom:12vmax}#history:after{content:"";position:absolute;top:0;left:0;width:100%;height:.7em;background:linear-gradient(100deg,#000 10%,rgba(83,202,251,.4),#000);border-radius:35%}#team{position:relative;padding-top:4vmax;padding-bottom:2vmax}#team:after{content:"";position:absolute;top:0;left:0;width:100%;height:.7em;background:linear-gradient(100deg,#000 10%,rgba(83,202,251,.4),#000);border-radius:35%}
#team:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:.7em;background:linear-gradient(100deg,#000 10%,rgba(83,202,251,.4),#000);border-radius:35%}#jobs{position:relative}///////////////////////////////////////////////////////////////////////
</style>
