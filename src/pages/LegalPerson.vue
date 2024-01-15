<template>
  <Content>
    <Step current="3" />
    <h2>Pessoa Jurídica</h2>
    <div class="physical-person">
      <Field>
        <Input label="Razão social" :value.sync="$root.user.companyname" :error="$root.rules.companyname.valid === false" placeholder="Ex: Nome da empresa"  id="companyname" @blur="validateCompanyName($event)" />
      </Field>
      <Field>
        <Input label="CNPJ" :value.sync="$root.user.cnpj" :error="$root.rules.cnpj.valid === false" placeholder="Ex: 57.077.777/0001-66"  id="cnpj" @blur="validateCNPJ($event)" @keyup="applyCNPJMasck($event)" />
      </Field>
      <Field>
        <Input label="Data de abertura" :value.sync="$root.user.creationdate" :error="$root.rules.creationdate.valid === false" placeholder="Ex: 01/01/2000"  id="creationdate" @blur="validateCreationDate($event)" @keyup="applyDateMask($event)" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="$root.user.companyphone" :error="$root.rules.companyphone.valid === false" placeholder="Ex: (11) 999999999"  id="companyphone" @blur="formatPhoneField($event)" @keyup="applyPhoneMask($event)"  />
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
import UTILS from "@/utils/utils";
import { Bus } from '@/Bus';

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
    methods: {
    validateCompanyName(e) {
      if(e.length> 3) {
        this.$root.rules.companyname.valid = true;
      } else {
        this.$root.rules.companyname.valid = false;
      }
    },
    validateCNPJ(e) {
      if(UTILS.validateCNPJ(e)) {
        this.$root.rules.cnpj.valid = true;
      } else {
        this.$root.rules.cnpj.valid = false;
      }
    },
    applyCNPJMasck(e) {
      this.$root.user.cnpj = UTILS.cnpjMask(e)
    },
    validateCreationDate(e) {
      if(e.length === 10) {
        this.$root.rules.creationdate.valid = true;
      } else {
        this.$root.rules.creationdate.valid = false;
      }
    },
    validateCompanyPhone(e) {
      if(e.length> 8) {
        this.$root.rules.phone.valid = true;
      } else {
        this.$root.rules.phone.valid = false;
      }
    },
    formatPhoneField(e) {
      if(e.length === 15) {
        this.$root.rules.companyphone.valid = true;
      } else {
        this.$root.rules.companyphone.valid = false;
      }
    },
    applyPhoneMask(e) {
      this.$root.user.companyphone = UTILS.phoneMask(e)
    },
    applyDateMask (e) {
      this.$root.user.creationdate = UTILS.dateMask(e)
    },
    prev() {
      this.$router.push('/pessoa-fisica');
    },
    next() {
      Bus.unLockStep4();
      this.$router.push('/senha-de-acesso');
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (Bus.routes.legal_person) {
      next()
    }
  }
}
</script>

<style></style>