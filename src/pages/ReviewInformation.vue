<template>
  <Content>
    <Step current="4" />
    <h2>Revise suas informações</h2>
    <div class="physical-person">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="$root.user.email" id="email" readonly />
      </Field>
      <Field>
        <Input label="Nome" :value.sync="$root.user.name" id="name" readonly />
      </Field>
      <Field>
        <Input label="CPF" :value.sync="$root.user.cpf" id="cpf" readonly />
      </Field>
      <Field>
        <Input label="Data de Nascimento" :value.sync="$root.user.birthdate" id="birthdate" readonly />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="$root.user.phone" id="phone" readonly />
      </Field>
      <Field>
        <Input label="Senha" :value.sync="$root.user.password" id="password" readonly />
      </Field>
      <Field class="group"> 
          <Button label="Voltar" class="secondary" @goto="prev" />
          <Button label="Cadastrar"  @goto="next" />   
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
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  mixins: [userMixin],
  methods: {
    prev() {
      this.$router.push('/senha-de-acesso');
    },
    async next() {
      const options = {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': 'http://localhost:5000', 'Access-Control-Allow-Credentials': 'true' },
        body: JSON.stringify(this.$root.user)
      };
      try {
        const response = await fetch("http://localhost:5000/registration", options);
        if (!response.ok) {
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
        }
        const data = await response.json();

        console.log(data)
      } catch (err) {
        console.error(err.message);
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (Bus.routes.review_information) {
      next()
    }
  }
}
</script>

<style></style>