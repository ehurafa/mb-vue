<template>
  <div class="input">input</div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    text: { type: String },
    value: { type: String },
    type: { type: String },
    disabled: { type: Boolean },
  }
}
</script>

<style>
  @import './style.scss';
</style>