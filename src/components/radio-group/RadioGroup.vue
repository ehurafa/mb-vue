<template>
  <div class="radio-group">
    <Radio id="radio1" v-model="personType" value="pp" name="person" label="Pessoa Física" @change="changed" />
    <Radio id="radio2" v-model="personType" value="lp" name="person" label="Pessoa Jurídica" @change="changed" />
  </div>
</template>

<script>
import Radio from "@/components/radio/Radio"
export default {
  name: 'RadioGroup',
  components: { Radio },
  props: {
    value: { type: String },
  },
  data() {
    return {
      personType: ''
    }
  },
  methods: {
    changed(e) {
      console.log("Changed", e);
      this.$emit("changed", e);
    }
  }
}
</script>

<style>
  @import './style.scss';
</style>