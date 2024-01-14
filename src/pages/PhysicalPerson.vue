<template>
  <Content>
    <Step current="2" />
    <h2>Pessoa Física</h2>
    <div class="physical-person">
      <Field>
        <Input label="Nome" :value.sync="user.name" id="name" />
      </Field>
      <Field>
        <Input label="CPF" :value.sync="user.cpf" id="cpf" />
      </Field>
      <Field>
        <Input label="Data de Nascimento" :value.sync="user.birthdata" id="birthdata" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="user.phone" id="phone" />
      </Field>
      <Field class="group">
          <Button label="Voltar" class="secondary" to="/" />
          <Button label="Continuar" to="/" />    
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

import { Bus } from '@/Bus';

export default {
  name: 'Physicaluser',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  data: () => {
    return {
      user: {
        email: '',
        name: '',
        user_type: '',
        cpf: '',
        birthdata: '',
        phone: ''
      }
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