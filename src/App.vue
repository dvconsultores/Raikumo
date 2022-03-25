<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div><router-view /></div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<style>
:root {
  --step--5: clamp(0.49rem, calc(0.54rem + -0.07vw), 0.53rem);
  --step--4: clamp(0.61rem, calc(0.64rem + -0.04vw), 0.63rem);
  --step--3: clamp(0.77rem, calc(0.76rem + 0.02vw), 0.76rem);
  --step--2: clamp(0.96rem, calc(0.89rem + 0.1vw), 0.91rem);
  --step--1: clamp(1.2rem, calc(1.05rem + 0.21vw), 1.09rem);
  --step-0: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  --step-1: clamp(1.45rem, calc(1.35rem + 0.48vw), 1.68rem);
  --step-2: clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem);
  --step-3: clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem);
  --step-4: clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem);
  --step-5: clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem);
  --step-6: clamp(3rem, calc(2.5rem + 2vw), 4rem);
  --step-7: clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem);
  --step-8: clamp(3.92rem, calc(3.22rem + 3.52vw), 5.72rem);
  --step-9: clamp(4.7rem, calc(3.75rem + 4.78vw), 7.15rem);
}
</style>
