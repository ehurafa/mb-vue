<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :value="value" :class="{ error: error }" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" v-on:input="change($event)" @blur="blur($event)" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: { type: String, required: true },
    placeholder: { type: String },
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
    error: { type: Boolean },
  },
  methods: {
    change(e) {
      this.$emit('update:value', e.target.value);      
    },
    blur(e) {
      this.$emit('blur', e.target.value);
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>
