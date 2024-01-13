<template>
  <div>
    <label :for="id">
      <span>{{ label }}</span>
      <input :id="id" type="radio" v-on="listeners" v-bind="$attrs">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
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