<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input v-if="email" type="email" :value="value" :disabled="disabled" v-on:input="change($event)" />
    <input v-else type="text" :value="value" :disabled="disabled" v-on:input="change($event)" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    email: { type: Boolean },
    id: { type: String, required: true },
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
