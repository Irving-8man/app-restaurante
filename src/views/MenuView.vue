<template>
  <div class="backTitle">
    <div class="overlay"></div>
    <h2 class="titleSeccion">Menú</h2>
  </div>
</template>

<style scoped>
.backTitle {
  position: relative;
  background-image: url('../assets/img/backTitle/BackMenu.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 260px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.titleSeccion {
  color: white;
  font-size: 4.0625rem;
  font-weight: 600;
  z-index: 3;
}
</style>