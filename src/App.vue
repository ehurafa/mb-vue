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

<style lang="scss">
@import './assets/style/base.scss';
@import './assets/style/variables.scss';
#app {
  font-family: $font-family;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
    background: yellow;
    width: 100%;
    max-width: $max-width;
    padding: 100px;
    height: 100vh;
}
</style>
