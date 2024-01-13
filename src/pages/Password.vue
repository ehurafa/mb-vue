<template>
  <Content>
    <Step current="4" />
    <h2>Senha de acesso</h2>
    <div class="password">
      <Field>
        <Input label="Sua senha" :value.sync="person.password" id="password" />
      </Field>
      <Field class="group">
          <Button label="Continuar" class="secondary" to="/" />
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

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  data: () => {
    return {
      person: {
        password: '',
      }
    }
  },
}
</script>

<style></style>