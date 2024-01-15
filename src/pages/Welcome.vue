<template>
  <Content>
    <Step current="1" />
    <h2>Seja bem vindo(a)</h2>
    <div class="welcome">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="$root.user.email" id="email" :error="$root.rules.email.valid === false" placeholder="Ex: silvio.santos@gmail.com" @blur="validateEmail" />
      </Field>
      <Field>
        <RadioGroup v-model="$root.user.user_type" @changed="userTypeValidate($event)" />
      </Field>
      <Field>
        <Button label="Continuar" :disabled="!unlockedButton" @goto="next" />
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

import UTILS from "@/utils/utils";
import MESSAGES from "@/utils/messages";
import userMixin from "@/userMixin";
import { Bus } from '@/Bus';

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  data: () => {
    return {
      user_type: ''
    }
  },
  methods: {
    validateEmail() {
      if(UTILS.validateEmail(this.$root.user.email)) {
        this.$root.rules.email.valid = true;
      } else {
        this.showErrorMessage(MESSAGES.invalid_email);
        this.$root.rules.email.valid = false;
      }
    },
    getUserType(type) {
      console.log(type)
      const types = {
        pf: "Pessoa Física",
        pj: "Pessoa Jurídica"
      }
      return types[type]
    },
    userTypeValidate(type) {
      this.user_type = type;
      this.$root.user.user_type = this.getUserType(type);
      this.$root.rules.user_type.valid = true;
    },
    next() {
      Bus.unLockStep2();
      const to = this.user_type === 'pf' ? '/pessoa-fisica' : '/pessoa-juridica';
      this.$router.push(to);
    }
  },
  computed: {
    unlockedButton() {
      return this.$root.rules.email.valid && this.$root.rules.user_type.valid;
    },
  },
}
</script>

<style></style>