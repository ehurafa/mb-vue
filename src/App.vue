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

html, body {
  font-size: 16px;
}

#app {
  font-family: $font-family;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
    width: 100%;
    max-width: $max-width;
    padding: 100px;
    height: 100vh;
}

label, label {
    font-size: 0.8rem;
}
</style>
