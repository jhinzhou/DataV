<template>
  <!-- <div class="g-bg">
    <div class="g-polygon g-polygon-1"></div>
    <div class="g-polygon g-polygon-2"></div>
    <div class="g-polygon g-polygon-3"></div>
  </div> -->
  <div class="g-bg">
    <css-doodle>
      :doodle { @grid: 1x20 / 100vmin; } 
      @place-cell: center; 
      width: @rand(60vmin, 100vmin); height: @rand(60vmin, 100vmin);
      transform: translate(@rand(-120%, 120%), @rand(-80%, 80%))
      scale(@rand(.8, 2.8)) skew(@rand(45deg));
      clip-path: polygon( @r(0, 30%) @r(0, 50%), @r(30%,
      60%) @r(0%, 30%), @r(60%, 100%) @r(0%, 50%), @r(60%, 100%) @r(50%, 100%), @r(30%, 60%) @r(60%,
      100%), @r(0, 30%) @r(60%, 100%) ); 
      background: @pick(#f44336, #e91e63, #9c27b0, #673ab7,#3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645,
      #ffc107, #ff5722, #43f8bf, #e136eb, #f57c23, #32ed39); 
      opacity: @rand(.5, .9); 
      position: relative; 
      top: @rand(-80%, 80%); 
      left: @rand(-80%, 80%); 
      animation: colorChange @rand(6.1s,
      26.1s) infinite @rand(-.5s, -2.5s) linear alternate; 
      @keyframes colorChange { 100% { left: 0;
      top: 0; filter: hue-rotate(360deg); } }
    </css-doodle>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import 'css-doodle'
onMounted(() => {
  const doodle = document.querySelector('css-doodle')

  document.addEventListener('click', function (e) {
    doodle.update()
  })
})
</script>
<style scoped>
.g-bg {
  width: 100%;
  height: 100%;
}
.g-polygon {
  position: absolute;
  opacity: 0.5;
  width: 50%;
  height: 80%;
}
.g-polygon-1 {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #ffee55;
  clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
}
.g-polygon-2 {
  position: fixed;
  right: 0;
  bottom: 0;
  background: #e950d1;
  clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
}
.g-polygon-3 {
  position: fixed;
  margin-left: 20%;
  bottom: 0;
  background: rgba(87, 80, 233);
  clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}
.g-bg::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(150px);
  z-index: 1;
}
</style>
