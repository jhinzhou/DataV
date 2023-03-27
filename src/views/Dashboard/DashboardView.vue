<template>
  <div class="g-bg">
    <css-doodle>
      :doodle { @grid: 1x20 / 150vmin; } @place-cell: center; width: @rand(60vmin, 100vmin); height:
      @rand(60vmin, 100vmin); transform: translate(@rand(-120%, 120%), @rand(-80%, 80%))
      scale(@rand(.8, 2.8)) skew(@rand(45deg)); clip-path: polygon( @r(0, 30%) @r(0, 50%), @r(30%,
      60%) @r(0%, 30%), @r(60%, 100%) @r(0%, 50%), @r(60%, 100%) @r(50%, 100%), @r(30%, 60%) @r(60%,
      100%), @r(0, 30%) @r(60%, 100%) ); background: @pick(#FFFFCC, #CCFFFF, #99CCFF, #FFFF99,
      #FFFF66, #FFCC99, #FF9966, #CCFFCC, #CCFF99, #FFCC00,#66CCCC, #FF99CC, #FFCC33, #CC99CC,
      #6699CC, #FFCCCC,#FFCC99,#9999CC,#CCCC00,#FFCCFF); opacity: @rand(.5, .9); position: relative;
      top: @rand(-80%, 80%); left: @rand(-80%, 80%); animation: colorChange @rand(6.1s, 26.1s)
      infinite @rand(-.5s, -2.5s) linear alternate; @keyframes colorChange { 100% { left: 0; top: 0;
      filter: hue-rotate(360deg); } }
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
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
}
/* .g-bg::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  backdrop-filter: blur(100px);
  z-index: 1;
} */

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
