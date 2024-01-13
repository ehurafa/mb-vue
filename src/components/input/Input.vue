<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :value="value" :disabled="disabled" v-on:input="change($event)" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: { type: String },
    value: { type: String },
    type: { type: String },
    id: { type: String },
    disabled: { type: Boolean },
  },
  methods: {
    change(e) {
      this.$emit('update:value', e.target.value)
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>
