<template>
  <div id="app">
    <router-view/> 
  </div>
</template>

<script>
import userMixin from "@/userMixin";

export default {
  name: 'App',
  mixins: [userMixin],
   data: () => {
    return {
      user: {
        email: '',
        user_type: '',
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/base.scss';
@import './assets/style/variables.scss';
@import './assets/style/index.scss';
</style>
