<template>
  <Content>
    <Step current="5" />
    <h2>Revise suas informações</h2>
    <div class="physical-person">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="person.email" id="email" readonly />
      </Field>
      <Field>
        <Input label="Nome" :value.sync="person.name" id="name" />
      </Field>
      <Field>
        <Input label="CPF" :value.sync="person.cpf" id="cpf" />
      </Field>
      <Field>
        <Input label="Data de Nascimento" :value.sync="person.birthdata" id="birthdata" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="person.phone" id="phone" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="person.password" id="password" />
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

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  data: () => {
    return {
      person: {
        email: '',
        name: '',
        cpf: '',
        birthdata: '',
        phone: '',
        password: '',
      }
    }
  },
}
</script>

<style></style>