<template>
  <Content>
    <Step current="2" />
    <h2>Pessoa Física</h2>
    <div class="physical-person">
      <Field>
        <Input label="Nome" :value.sync="user.name" id="name" :error="rules.name.valid === false" placeholder="Ex: Ayrton Senna" @blur="validateName($event)"  />
      </Field>
      <Field>
        <Input label="CPF" :value.sync="user.cpf" id="cpf" :error="rules.cpf.valid === false" placeholder="Ex: 456.675.656-77" @blur="validateCPF($event)"  />
      </Field>
      <Field>
        <Input label="Data de Nascimento" :value.sync="user.birthdate" id="birthdate" :error="rules.birthdate.valid === false" placeholder="Ex: 01/01/2000" @blur="validateBirthdate($event)"  />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="user.phone" id="phone" :error="rules.phone.valid === false" placeholder="Ex: (11) 999999999" @blur="validatePhone($event)"  />
      </Field>
      <Field class="group">
          <Button label="Voltar" class="secondary" @goto="prev" />
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

import userMixin from "@/userMixin";
import UTILS from "@/utils/utils";
import { Bus } from '@/Bus';

export default {
  name: 'Physicaluser',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  computed: {
    unlockedButton() {
      return this.rules.name.valid && this.rules.cpf.valid && this.rules.birthdate.valid && this.rules.phone.valid;
    },
  },
  methods: {
    validateName(e) {
      if(e.length> 3) {
        this.rules.name.valid = true;
      } else {
        this.rules.name.valid = false;
      }
    },
    validateCPF(e) {
      if(UTILS.validateCPF(e)) {
        this.rules.cpf.valid = true;
      } else {
        this.rules.cpf.valid = false;
      }
    },
    validateBirthdate(e) {
      if(e.length === 10) {
        this.rules.birthdate.valid = true;
      } else {
        this.rules.birthdate.valid = false;
      }
    },
    validatePhone(e) {
      if(e.length> 8) {
        this.rules.phone.valid = true;
      } else {
        this.rules.phone.valid = false;
      }
    },
    prev() {
      this.$router.push('/');
    },
    next() {
      Bus.unLockStep3();
      this.$router.push('/pessoa-juridica');
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (Bus.routes.physical_person) {
      next()
    }
  }
}
</script>

<style></style>