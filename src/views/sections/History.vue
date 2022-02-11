<template>
  <div class="wrapper parallaxHistory">
    <div class="main-raised">
      <div class="container achicar">
        <section>
          <h1 id="tituloH">Make history</h1>
          <div class="filtro8"></div>
          <div class="filtro9"></div>
          <div class="filtro10"></div>
          <div class="filtro11"></div>
          <div class="filtro12"></div>
          <div
            style="border-radius: 5vmax; background: rgb(0, 0, 0, 0.4); padding: 5%;"
          >
            <p>
              Japan – 2053 After several natural disasters, the Japanese
              economic market was driven into a huge inflationary crisis by
              enormous repair costs. With the promise that a new currency could
              bring this inflation down, the Japanese government was giving all
              the necessary resources and its last remaining financial mediums
              to an organization called "RAIKUMO" in hope of saving the country.
              But they took advantage of these funds and shortly thereafter are
              ruling the government instead of the government ruling them. They
              later called themselves "RAIKUMO - Saviors of the rising sun" even
              though they did anything but save the country. People were
              suffering because of their broken promises and still they gave
              these people hope. They started to conduct experiments. At first
              it was just some in nature, but after one went wrong and caused a
              never-ending storm in the clouds over Japan, they switched to
              experiments on humans. The company which couldn’t keep their
              promises manipulated those who suffered from the actions of their
              own action and promised them a problem-free life if they would
              only participate in the experiments. Most of these people now lie
              lifeless 6 feet underground or are still used as test subjects.
              Nothing changed for years, RAIKUMO kept destroying the country and
              no one could do anything about it, but little did they know their
              own creation could one day turn against them.
            </p>
          </div>
        </section>
      </div>
      <section class="containerVideo">
        <div class="filtro8"></div>
        <div class="filtro9"></div>
        <div class="filtro10"></div>
        <div class="filtro11"></div>
        <div class="filtro12"></div>
        <div class="containerTitulo"></div>
        <div class="videoMobile"></div>
        <video
          src="@/assets/videos/raikumo.mp4"
          type="video/mp4"
          controls
          autoplay
          loop
          muted
        >
          your browser does not support HTML5
        </video>
      </section>
    </div>
  </div>
</template>

<style scoped>
.parallaxHistory {
  text-align: center;
  background: center no-repeat fixed;
  -webkit-font-background: center no-repeat fixed;
  -moz-osx-font-background: center no-repeat fixed;
  background-size: cover;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.espacioBottom {
  margin-top: 90vmax;
  position: relative;
}
.achicar {
  width: 80%;
}
#tituloH {
  width: 53%;
  height: 14.5vmax;
  margin: 6vmax auto;
  line-height: 6vmax;
  background: linear-gradient(10deg, black 10%, rgba(83, 202, 251, 0.5), white);
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
}
h1 {
  font-weight: bold;
  font-size: 10vmax;
}
p {
  word-spacing: 6px;
  font-size: 2vmax;
  line-height: 2.8vmax;
}
p::first-letter {
  font-size: 5vmax !important;
  font-weight: 600 !important;
  color: rgba(83, 202, 251, 0.5);
}
.containerVideo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.containerTitulo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 70.4%;
  height: 100%;
}
.containerTitulo::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: 3px rgb(110, 110, 17) solid;
  width: 100%;
  height: 100%;
}
video {
  width: 70%;
  height: 70%;
  transition: 0.5s ease-in-out;
  z-index: 11;
}
.filtro8 {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 10%;
  top: 105px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro8:hover {
  transform: scale(1.5, 1.5);
}
.filtro9 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 21%;
  top: 19%;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro9:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro10 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 604px;
  top: 340px;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro10:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
.filtro11 {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 735px;
  top: 300px;
  background: rgba(83, 202, 251, 0.5);
  filter: blur(4px);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro11:hover {
  transform: scale(1.5, 1.5);
}
.filtro12 {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 425px;
  top: 133px;
  background: rgba(83, 202, 251, 0.5);
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.filtro12:hover {
  filter: blur(1px);
  transform: scale(1.5, 1.5);
}
</style>
