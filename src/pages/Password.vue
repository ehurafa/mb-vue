<template>
  <Content>
    <Step current="4" />
    <h2>Senha de acesso</h2>
    <div class="password">
      <Field>
        <Input label="Sua senha" :value.sync="$root.user.password" :error="$root.rules.password.valid === false" id="password" @blur="validatePassword($event)" />
      </Field>
      <Field class="group"> 
          <Button label="Voltar" class="secondary" @goto="prev" />
          <Button label="Continuar"  @goto="next" />   
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

export default {
  name: 'Password',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  methods: {
    validatePassword(e) {
      if(e.length > 2) {
        this.$root.rules.password.valid = true;
      } else {
        this.$root.rules.password.valid = false;
      }
    },
    prev() {
      this.$router.push('/pessoa-juridica');
    },
    next() {
      this.$router.push('/revise-suas-informacoes');
    }
  }
}
</script>

<style></style>