<script setup></script>

<template>
  <div class="home">
    <el-card class="system-select"> Dashboard</el-card>
    <el-card class="system-select"> Option</el-card>
    <el-card class="system-select"> WebGL</el-card>
  </div>
</template>
<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-select {
  width: 15%;
  height: 25%;
  margin-right: 2%;
  --el-card-bg-color: #ffffff72;
  --el-card-border-color: #ffffff05;
  transition: 0.2s all;
}
.system-select:hover {
  transform: translateY(-20px);
  box-shadow: 10px 10px 20px 10px rgba(132, 132, 132, 0.155);
}
.system-select:active {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.4), inset 0 0 0 rgba(0, 0, 0, 0.4),
    inset 0 0 0 rgba(0, 0, 0, 0.4), inset 7px 7px 12px rgba(0, 0, 0, 0.4);
}
</style>
