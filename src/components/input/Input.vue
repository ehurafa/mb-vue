<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :value="value" :disabled="disabled" :readonly="readonly" v-on:input="change($event)" @blur="blur" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    type: { 
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email'].includes(value)
      }
      },
    id: { type: String, required: true },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
  },
  methods: {
    change(e) {
      this.$emit('update:value', e.target.value);      
    },
    blur() {
      this.$emit('blur');
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>
