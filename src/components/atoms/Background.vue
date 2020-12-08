<template>
  <v-container
    class="sky"
    fluid
    ma-0
  >
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <slot />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
    <span class="star" />
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Background',
});
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
  margin:0
}

.sky {
  display: block;
  background: black;
  width: 102vw;
  height: 100vh;
}
.star {
  border-radius: 50%;
  background: white;
  position: absolute;
  animation: star linear infinite;
  @for $i from 1 through 70 {
    &:nth-child(#{$i}) {
      $size: random(7) + 3px;
      width: $size;
      height: $size;
      animation-duration: random(30) + 15s;
      animation-delay: random(40) - 40s;
      top: random(101) - 1vh;
    }
  }
}
@keyframes star {
  from { transform: translate3d(-100%, 0, 1px); }
  to { transform: translate3d(100vw, 0, 1px); }
}

@keyframes eject {
  0% {
    transform: translate3d(-50vmin, -20vmin, 0px) rotate(0turn);
  }
  50%, 100% {
    transform: translate3d(100vw, -20vmin, 0px) rotate(-2turn);
  }
}

h1 {
  position: absolute;
  color: white;
  font-family: arial, sans-serif;
  left: 0;
  top: 50%;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  transform: translateY(-50%);
  @media (min-width: 600px) {
    font-size: 30px;
  }
}

</style>
