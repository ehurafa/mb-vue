<template>
  <div class="field">field</div>
</template>

<script>
export default {
  name: 'Field',
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