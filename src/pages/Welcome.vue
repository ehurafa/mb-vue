<template>
  <Content>
    <Step current="1" />
    <h2>Seja bem vindo(a)</h2>
    <div class="welcome">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="person.email" id="email" @keyup="emailValidate" />
      </Field>
      <Field>
        <RadioGroup v-model="person.person_type" @changed="person.person_type = $event" />
      </Field>
      <Field>
        <Button label="Continuar" to="/" :disabled="lockedButton" />
      </Field>
    </div>
  </Content>  
</template>

<script>
import Content from "@/template/Content";
import Field from "@/components/field/Field";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import RadioGroup from "@/components/radio-group/RadioGroup";
import Step from "@/components/step/Step";

import userMixin from "@/userMixin";
import rulesMixin from "@/rulesMixin";

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin, rulesMixin],
  data: () => {
    return {
      person: {
        email: '',
        person_type: '',
      }
    }
  },
  methods: {
    emailValidate() {
      if (this.person.email.length > 2) {
        this.rules.email.valid = true;
      } else {
        this.rules.email.valid = false;
      }
    }
  },
  computed: {
    lockedButton() {
      return !this.rules.email.valid;
    } 
  },
  mounted() {
    console.log('this.$user >> ', this.user)
    console.log('this.$rules >>>>>> ', this.rules)

  },
  beforeRouteEnter: (to, from, next) => {
    console.log('to ', to)
    console.log('from ', from)
    next()
  }
}
</script>

<style></style>