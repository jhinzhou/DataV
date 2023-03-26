<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const gotoPage = val => {
  router.push(val)
}
</script>

<template>
  <div class="card">
    <div class="system-select">
      <div class="btn" @click="gotoPage('dashboard')">Dashboard</div>
      <div class="btn btn1" @click="gotoPage('option')">Option</div>
      <div class="btn btn2" @click="gotoPage('webgl')">WebGL</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: #5b5a5a1a;
}
.system-select {
  width: 80%;
  height: 60%;
  margin-right: 2%;
  display: flex;
  border-radius: 20px;
  --el-card-bg-color: #d1d1d1;
  --el-card-border-color: #ffffff2f;
  transition: 0.2s all;
  box-shadow: 10px 10px 20px 10px rgba(44, 44, 44, 0.155);
}
.system-select:hover {
  transform: translateY(-20px);
  box-shadow: 0 10px 20px 10px rgba(223, 223, 223, 0.155);
}
.system-select:active {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.4), inset 0 0 0 rgba(0, 0, 0, 0.4),
    inset 0 0 0 rgba(0, 0, 0, 0.4), inset 7px 7px 12px rgba(0, 0, 0, 0.4);
}
@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}

.btn {
  position: relative;
  z-index: 0;
  width: 160px;
  height: 80px;
  line-height: 80px;
  color: var(--color);
  font-size: 24px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.4));

  &:hover {
    color: #fff;
    box-shadow: 0 0 5px var(--color), 0 0 25px var(--color);

    &::after,
    &::before {
      transition: 0.3s;
      background: var(--color);
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 300%;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: 0 0;
    background-image: conic-gradient(var(--color), var(--color));
    animation: rotate 2s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #000;
    border-radius: 10px;
  }
}

.btn1 {
  filter: hue-rotate(180deg);
}

.btn2 {
  filter: hue-rotate(270deg);
}

.btn3 {
  filter: hue-rotate(90deg);
}
</style>
