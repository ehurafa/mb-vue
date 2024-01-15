<template>
  <div class="radio">
    <label :for="id">
      <input :id="id" type="radio" v-on="listeners" v-bind="$attrs">
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  model: {
    prop: "model",
    event: "change-radio"
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: event => {
          console.log('event ', event)
          this.$emit("change-radio", event.target.value);
          this.$emit("change", event.target.value);
        }
      };
    }
  }
}
</script>

<style>
  @import './style.scss';

</style>