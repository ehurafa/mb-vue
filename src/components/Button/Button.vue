<template>
  <button :disabled="disabled" @click="next">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: { type: String, required: true },
    disabled: { type: Boolean },
  },
  methods: {
    next() {
      this.$emit('next')
    }
  }
}
  
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import '../../assets/style/mixins.scss';
  @import './style.scss';
</style>