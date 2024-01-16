<template>
  <transition name="slide">
    <div :class="['snackbar', { [type]: true }]" :type="type">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    message: { type: String, required: true },
    type: { 
      type: String,
      default: 'error',
      validator: function (value) {
        return ['error', 'success'].includes(value)
      }
    },
  },
}
  
</script>

<style lang="scss" scoped>
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>