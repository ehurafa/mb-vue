<template>
  <Content>
    <Step current="1" />
    <div>rules {{ rules }}</div>
    <hr>
    <div>user {{ user }}</div>
    <hr>
    <div>Bus.routes {{ foo }}</div>
     <hr>
    <h2>Seja bem vindo(a)</h2>
    <div class="welcome">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="user.email" id="email" @blur="emailValidate" />
      </Field>
      <Field>
        <RadioGroup v-model="user.user_type" @changed="userTypeValidate($event)" />
      </Field>
      <Field>
        <Button label="Continuar" :disabled="!unlockedButton" @next="next" />
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
      user: {
        email: '',
        user_type: '',
      },
      foo: null
    }
  },
  methods: {
    emailValidate() {
      if(UTILS.validateEmail(this.user.email)) {
        this.rules.email.valid = true;
      } else {
        this.showErrorMessage(MESSAGES.invalid_email);
        this.rules.email.valid = false;
      }
    },
    userTypeValidate(type) {
      this.user.user_type = type;
      this.rules.user_type.valid = true;
    },
    next() {
      Bus.unLockStep2();
      this.$router.push('/pessoa-fisica');
    }
  },
  computed: {
    unlockedButton() {
      return this.rules.email.valid && this.rules.user_type.valid;
    },
  },

  mounted() {
    console.log('Bus ', Bus.routes)
    this.foo =  Bus.routes
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('to ', to)
    console.log('from ', from)
    next()
  }
}
</script>

<style></style>