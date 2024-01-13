<template>
  <Content>
    <Step current="3" />
    <h2>Pessoa Jurídica</h2>
    <div class="physical-person">
      <Field>
        <Input label="Razão social" :value.sync="person.companyname" id="companyname" />
      </Field>
      <Field>
        <Input label="CNPJ" :value.sync="person.cnpj" id="cnpj" />
      </Field>
      <Field>
        <Input label="Data de abertura" :value.sync="person.creationdate" id="creationdate" />
      </Field>
      <Field>
        <Input label="Telefone" :value.sync="person.companyphone" id="companyphone" />
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
        companyname: '',
        cnjp: '',
        creationdate: '',
        companyphone: '',
      }
    }
  },
}
</script>

<style></style>