<template>
  <div id="app">
     <div>Bus.routes {{ foo }}</div>
     <hr />
     <div>rules {{ bar }}</div>
     <hr />
      <router-view/> 
  </div>
</template>

<script>
import { Bus } from '@/Bus';
import userMixin from "@/userMixin";

export default {
  name: 'App',
  mixins: [userMixin],
   data: () => {
    return {
      user: {
        email: '',
        user_type: '',
      },
      foo: null,
      bar: null
    }
  },
    mounted() {
    console.log('Bus ', Bus.routes)
    this.foo =  Bus.routes
    this.bar =  this.rules
  },
}
</script>

<style lang="scss">
@import './assets/style/base.scss';
@import './assets/style/variables.scss';
@import './assets/style/index.scss';
</style>
