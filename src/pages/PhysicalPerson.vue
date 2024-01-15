<template>
  <Content>
    <Step current="2" />
    <h2>Pessoa Física</h2>
    <div class="physical-person">
      <Field>        
        <Input label="Nome" :value.sync="$root.user.name" id="name" :error="$root.rules.name.valid === false" placeholder="Ex: Ayrton Senna" @blur="validateName($event)"  />
      </Field>
      <Field>
        <Input label="CPF" :value.sync="$root.user.cpf" id="cpf" :error="$root.rules.cpf.valid === false" placeholder="Ex: 456.675.656-77" @blur="validateCPF($event)" @keyup="applyCPFMasck($event)" />
      </Field>
      <Field>
        <Input label="Data de Nascimento" :value.sync="$root.user.birthdate" id="birthdate" :error="$root.rules.birthdate.valid === false" placeholder="Ex: 01/01/2000" @blur="validateBirthdate($event)" @keyup="applyDateMask($event)" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="$root.user.phone" id="phone" :error="$root.rules.phone.valid === false" placeholder="Ex: (11) 999999999" @blur="formatPhoneField($event)" @keyup="applyPhoneMask($event)"  />
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
      return this.$root.rules.name.valid && this.$root.rules.cpf.valid && this.$root.rules.birthdate.valid && this.$root.rules.phone.valid;
    },
  },
  methods: {
    validateName(e) {
      if(e.length> 3) {
        this.$root.rules.name.valid = true;
      } else {
        this.$root.rules.name.valid = false;
      }
    },
    validateCPF(e) {
      if(UTILS.validateCPF(e)) {
        this.$root.rules.cpf.valid = true;
      } else {
        this.$root.rules.cpf.valid = false;
      }
    },
    applyCPFMasck(e) {
      this.$root.user.cpf = UTILS.cpfMask(e)
    },
    validateBirthdate(e) {
      if(e.length === 10) {
        this.$root.rules.birthdate.valid = true;
      } else {
        this.$root.rules.birthdate.valid = false;
      }
    },
    validatePhone(e) {
      if(e.length> 8) {
        this.$root.rules.phone.valid = true;
      } else {
        this.$root.rules.phone.valid = false;
      }
    },
    formatPhoneField(e) {
      if(e.length === 15) {
        this.$root.rules.phone.valid = true;
      } else {
        this.$root.rules.phone.valid = false;
      }
    },
    applyPhoneMask(e) {
      this.$root.user.phone = UTILS.phoneMask(e)
    },
    applyDateMask (e) {
      this.$root.user.birthdate = UTILS.dateMask(e)
    },
    prev() {
      this.$router.push('/');
    },
    next() {
      Bus.unLockStep3();
      this.$router.push('/senha-de-acesso');
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