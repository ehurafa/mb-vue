<template>
  <div class="radio-group">
    <Radio id="radio1" v-model="userType" value="pf" name="user" label="Pessoa Física" @change="changed" />
    <Radio id="radio2" v-model="userType" value="pj" name="user" label="Pessoa Jurídica" @change="changed" />
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
      userType: ''
    }
  },
  methods: {
    changed(e) {
      this.$emit("changed", e);
    }
  }
}
</script>

<style>
  @import './style.scss';
</style>