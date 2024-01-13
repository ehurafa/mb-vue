<template>
  <button :disabled="disabled">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: { type: String, required: true },
    disabled: { type: Boolean },
    to: { type: String, required: true },
    }
  }
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>