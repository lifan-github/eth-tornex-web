<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

html, body {
  margin: 0;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  overflow-x: hidden;
}

.effective-area {
  width: 1200px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text-color {
  color: #02ba96;
}

.font13 {
  font-size: 13px;
}

.font14 {
  font-size: 14px;
}

.font16 {
  font-size: 16px;
}

.font18 {
  font-size: 18px;
}

.color255 {
  color: #fff;
}

.gray {
  color: #DADADA;
}
</style>
