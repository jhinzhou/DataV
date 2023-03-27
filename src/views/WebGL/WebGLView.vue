<template>
  <div class="webgl"></div>
  <div class="login"></div>
</template>
<script setup></script>
<style scoped>
.webgl {
  position: relative;
  width: 100%;
  height: 100%;

  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(147, 117, 255, 1) 25%,
    rgba(234, 254, 255, 1) 51%,
    rgba(255, 177, 233, 1) 62%,
    rgba(197, 251, 255, 1) 96%
  );
  filter: blur(1500px);
  transform: rotate(-146.16deg);
}
.login {
  /* 矩形 2678 */
  position: absolute;
  width: 80%;
  height: 90%;
  left: 10%;
  right: 10%;
  top: 5%;
  bottom: 5%;

  background: radial-gradient(rgba(255, 255, 255, 0.57) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset 0px 0px 20px rgb(255, 255, 255);
  backdrop-filter: blur(100px);

  border-radius: 60px;
}
</style>
